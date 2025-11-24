import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import printerImage from "@/assets/printer-product.jpg";
import { Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error: any) {
      toast.error("Failed to load products");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = async (product: Product) => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      toast.error("Please sign in to add items to cart");
      return;
    }

    try {
      const { error } = await supabase.from("orders").insert({
        user_id: session.user.id,
        product_id: product.id,
        quantity: 1,
        total_amount: product.price,
        status: "pending"
      });

      if (error) throw error;
      toast.success("Added to cart!");
    } catch (error: any) {
      toast.error(error.message);
    }
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
                          <p className="font-display text-3xl mb-2">₹{product.price.toLocaleString()}</p>
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
