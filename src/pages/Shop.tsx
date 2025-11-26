import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import printerImage from "@/assets/printer-product.jpg";
import { Search, Loader2, Filter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { formatINR, usdToINR } from "@/lib/currency";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
  category: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const { addToCart } = useCart();

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      let query = supabase.from("products").select(`
        *,
        orders(quantity)
      `);

      // Apply search filter
      if (searchQuery) {
        query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);
      }

      // Apply category filter
      if (categoryFilter !== "all") {
        query = query.eq("category", categoryFilter);
      }

      const { data, error } = await query;

      if (error) throw error;

      // Calculate total sales for each product
      let productsWithSales = (data || []).map(product => {
        const totalSales = product.orders?.reduce((sum: number, order: any) => sum + order.quantity, 0) || 0;
        return { ...product, totalSales };
      });

      // Apply sorting
      switch (sortBy) {
        case "price-low":
          productsWithSales.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          productsWithSales.sort((a, b) => b.price - a.price);
          break;
        case "best-selling":
          productsWithSales.sort((a, b) => b.totalSales - a.totalSales);
          break;
        case "name":
          productsWithSales.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default: // newest
          productsWithSales.sort((a, b) => 
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
      }

      setProducts(productsWithSales);
    } catch (error: any) {
      toast.error("Failed to load products");
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, sortBy, categoryFilter]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(timer);
  }, [fetchProducts]);

  const handleAddToCart = async (product: Product) => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      toast.error("Please sign in to add items to cart");
      return;
    }

    addToCart({
      product_id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image_url: product.image_url,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              Premium 3D Printers
            </h1>
            <p className="text-xl text-muted-foreground">
              High-end printers designed for exceptional precision and quality.
              Perfect for professionals and enthusiasts alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search 3D printers and models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="best-selling">Best Selling</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Products</SelectItem>
                  <SelectItem value="3d_printer">3D Printers</SelectItem>
                  <SelectItem value="3d_model">3D Models</SelectItem>
                  <SelectItem value="accessory">Accessories</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products available yet</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-glow transition-smooth h-full flex flex-col">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image_url || printerImage}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-smooth"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-display text-2xl">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-4 flex-1">
                        <div className="pt-4 border-t mt-auto">
                          <p className="font-display text-3xl mb-2">{formatINR(product.price)}</p>
                          <p className="text-sm text-muted-foreground mb-4">
                            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                          </p>
                          <Button 
                            variant="hero" 
                            className="w-full"
                            onClick={() => handleAddToCart(product)}
                            disabled={product.stock === 0}
                          >
                            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
