import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, Package, ShoppingCart, DollarSign, TrendingUp, Plus, AlertTriangle, TrendingDown } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  category: string;
  totalSales?: number;
}

interface Order {
  id: string;
  total_amount: number;
  status: string;
  created_at: string;
  products?: { name: string };
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
    category: "3d_printer"
  });

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      const { data: roles, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .single();

      if (error || !roles) {
        toast.error("Access denied. Admin privileges required.");
        navigate("/");
        return;
      }

      setIsAdmin(true);
      fetchDashboardData();
    } catch (error) {
      navigate("/auth");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDashboardData = async () => {
    const [productsRes, ordersRes] = await Promise.all([
      supabase.from("products").select(`
        *,
        orders(quantity)
      `).order("created_at", { ascending: false }),
      supabase.from("orders").select("*, products(name)").order("created_at", { ascending: false })
    ]);

    if (productsRes.data) {
      const productsWithSales = productsRes.data.map(product => {
        const totalSales = product.orders?.reduce((sum: number, order: any) => sum + order.quantity, 0) || 0;
        return { ...product, totalSales };
      });
      setProducts(productsWithSales);
    }
    if (ordersRes.data) setOrders(ordersRes.data);
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("products").insert({
        name: newProduct.name,
        description: newProduct.description,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock),
        image_url: newProduct.image_url,
        category: newProduct.category
      });

      if (error) throw error;
      
      toast.success("Product added successfully!");
      setShowAddProduct(false);
      setNewProduct({ name: "", description: "", price: "", stock: "", image_url: "", category: "3d_printer" });
      fetchDashboardData();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const totalRevenue = orders.reduce((sum, order) => sum + Number(order.total_amount), 0);
  const totalOrders = orders.length;
  const totalProducts = products.length;
  const lowStockProducts = products.filter(p => p.stock < 5);
  const outOfStockProducts = products.filter(p => p.stock === 0);
  const bestSellingProduct = products.reduce((prev, current) => 
    (current.totalSales || 0) > (prev.totalSales || 0) ? current : prev
  , products[0]);
  const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-display text-4xl mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor sales and manage products</p>
        </div>

        {/* Inventory Alerts */}
        {(lowStockProducts.length > 0 || outOfStockProducts.length > 0) && (
          <div className="mb-6">
            <Card className="border-orange-500">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <CardTitle className="text-orange-500">Inventory Alerts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {outOfStockProducts.length > 0 && (
                    <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                      <p className="font-semibold text-red-700 dark:text-red-400">Out of Stock ({outOfStockProducts.length})</p>
                      <div className="mt-2 space-y-1">
                        {outOfStockProducts.map(p => (
                          <p key={p.id} className="text-sm text-red-600 dark:text-red-400">• {p.name}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  {lowStockProducts.length > 0 && (
                    <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <p className="font-semibold text-orange-700 dark:text-orange-400">Low Stock ({lowStockProducts.length})</p>
                      <div className="mt-2 space-y-1">
                        {lowStockProducts.map(p => (
                          <p key={p.id} className="text-sm text-orange-600 dark:text-orange-400">• {p.name} - {p.stock} units left</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalOrders}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProducts}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{avgOrderValue.toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Best Selling Product</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="font-semibold text-lg">{bestSellingProduct?.name || 'N/A'}</p>
                <p className="text-sm text-muted-foreground">
                  {bestSellingProduct?.totalSales || 0} units sold
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Stock Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">In Stock</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {products.filter(p => p.stock > 5).length}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Low Stock</span>
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                    {lowStockProducts.length}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Out of Stock</span>
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    {outOfStockProducts.length}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Restock Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              {lowStockProducts.length > 0 || outOfStockProducts.length > 0 ? (
                <div className="space-y-1">
                  <p className="text-sm text-orange-600 dark:text-orange-400">
                    ⚠️ {lowStockProducts.length + outOfStockProducts.length} product(s) need attention
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Prioritize restocking high-demand items
                  </p>
                </div>
              ) : (
                <p className="text-sm text-green-600">✓ All products well stocked</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Products Section */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Products</CardTitle>
                <CardDescription>Manage your 3D printer inventory</CardDescription>
              </div>
              <Button onClick={() => setShowAddProduct(!showAddProduct)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {showAddProduct && (
              <form onSubmit={handleAddProduct} className="mb-6 p-4 border rounded-lg space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      id="name"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                      id="stock"
                      type="number"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      value={newProduct.image_url}
                      onChange={(e) => setNewProduct({...newProduct, image_url: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select 
                      value={newProduct.category} 
                      onValueChange={(value) => setNewProduct({...newProduct, category: value})}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3d_printer">3D Printer</SelectItem>
                        <SelectItem value="3d_model">3D Model</SelectItem>
                        <SelectItem value="accessory">Accessory</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  />
                </div>
                <Button type="submit">Add Product</Button>
              </form>
            )}
            
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex justify-between items-center p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{product.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {product.category.replace('_', ' ')}
                      </Badge>
                      {product.stock === 0 && (
                        <Badge variant="destructive" className="text-xs">Out of Stock</Badge>
                      )}
                      {product.stock > 0 && product.stock < 5 && (
                        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">
                          Low Stock
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    {product.totalSales !== undefined && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Total Sales: {product.totalSales} units
                      </p>
                    )}
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-bold">₹{product.price}</p>
                    <p className={`text-sm ${product.stock === 0 ? 'text-red-600' : product.stock < 5 ? 'text-orange-600' : 'text-muted-foreground'}`}>
                      Stock: {product.stock}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold">Order #{order.id.slice(0, 8)}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(order.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${Number(order.total_amount).toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground capitalize">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
