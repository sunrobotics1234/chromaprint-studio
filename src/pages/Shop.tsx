import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import printerImage from "@/assets/printer-product.jpg";
import { Check } from "lucide-react";

const printers = [
  {
    id: 1,
    name: "ChromaPrint Pro X1",
    price: "₹2,49,999",
    image: printerImage,
    description: "Professional-grade printer with advanced skin-tone calibration",
    features: [
      "0.05mm layer resolution",
      "25+ skin-tone presets",
      "Auto-calibration system",
      "300x300x400mm build volume",
    ],
  },
  {
    id: 2,
    name: "ChromaPrint Studio S2",
    price: "₹1,89,999",
    image: printerImage,
    description: "Mid-range excellence for studios and professionals",
    features: [
      "0.1mm layer resolution",
      "15+ skin-tone presets",
      "Semi-auto calibration",
      "250x250x300mm build volume",
    ],
  },
  {
    id: 3,
    name: "ChromaPrint Home H3",
    price: "₹99,999",
    image: printerImage,
    description: "Perfect for hobbyists and small projects",
    features: [
      "0.2mm layer resolution",
      "10+ skin-tone presets",
      "Manual calibration",
      "200x200x250mm build volume",
    ],
  },
];

const Shop = () => {
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
              High-end printers designed for exceptional color accuracy and detail.
              Perfect for professionals and enthusiasts alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {printers.map((printer, index) => (
              <motion.div
                key={printer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-glow transition-smooth h-full">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={printer.image}
                      alt={printer.name}
                      className="w-full h-full object-cover hover:scale-105 transition-smooth"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">
                      {printer.name}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {printer.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {printer.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t">
                        <p className="font-display text-3xl mb-4">{printer.price}</p>
                        <Button variant="hero" className="w-full">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
