import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Truck, Package, MapPin, Clock, AlertCircle } from "lucide-react";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Shipping Policy</h1>
          <p className="text-muted-foreground text-center mb-8">Last updated: January 2025</p>
          
          <div className="space-y-8">
            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Truck className="h-6 w-6 text-primary" />
                Shipping Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Proto Design Studio ships across India with reliable courier partners. We take utmost care 
                in packaging your 3D printed products to ensure they reach you in perfect condition. All 
                shipments are tracked and insured for your peace of mind.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                Processing Time
              </h2>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Ready-Made Products</h3>
                  <p className="text-muted-foreground">1-2 business days processing time</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Custom 3D Prints (Small)</h3>
                  <p className="text-muted-foreground">3-5 business days processing time</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Custom 3D Prints (Large/Complex)</h3>
                  <p className="text-muted-foreground">5-10 business days processing time</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Bulk Orders</h3>
                  <p className="text-muted-foreground">Timeline will be communicated after order review</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Processing time does not include shipping transit time
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                Delivery Zones & Charges
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Zone</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Delivery Time</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Shipping Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Metro Cities (Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad)</td>
                      <td className="py-3 px-4">2-4 business days</td>
                      <td className="py-3 px-4">₹99 (Free above ₹999)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Tier-1 Cities (Pune, Ahmedabad, Jaipur, Lucknow, etc.)</td>
                      <td className="py-3 px-4">3-5 business days</td>
                      <td className="py-3 px-4">₹129 (Free above ₹1,499)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Tier-2 & Tier-3 Cities</td>
                      <td className="py-3 px-4">5-7 business days</td>
                      <td className="py-3 px-4">₹149 (Free above ₹1,999)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Remote Areas (North East, J&K, etc.)</td>
                      <td className="py-3 px-4">7-10 business days</td>
                      <td className="py-3 px-4">₹199 (Free above ₹2,499)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Shipping charges are calculated based on product weight and dimensions. Heavy/bulky items may incur additional charges.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Package className="h-6 w-6 text-primary" />
                Packaging
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We understand the delicate nature of 3D printed products. All items are carefully packaged using:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Multi-layer bubble wrap protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Custom foam inserts for fragile items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Sturdy corrugated boxes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>"Fragile" and "Handle with Care" labels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Weather-resistant outer packaging</span>
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Order Tracking</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Once your order is shipped, you will receive:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>Email notification with tracking number</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>SMS updates on shipping status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>Link to track your order in real-time</span>
                  </li>
                </ul>
                <p className="mt-4">
                  You can also track your orders from the "My Orders" section in your account.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-500" />
                Important Notes
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">!</span>
                  <span><strong>Address Accuracy:</strong> Please ensure your delivery address is complete and accurate. We are not responsible for delays due to incorrect addresses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">!</span>
                  <span><strong>Delivery Attempts:</strong> Our courier partners will attempt delivery 3 times. After failed attempts, the package will be returned to us.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">!</span>
                  <span><strong>Inspection:</strong> Please inspect the package upon delivery. Report any visible damage immediately to the delivery person and contact us within 24 hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">!</span>
                  <span><strong>Delays:</strong> During festive seasons or unforeseen circumstances, deliveries may take longer than usual.</span>
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Express Shipping</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Need your order faster? We offer express shipping options for urgent requirements:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Priority Shipping</h3>
                  <p className="text-muted-foreground text-sm">1-2 days faster delivery</p>
                  <p className="text-primary font-semibold mt-2">+ ₹199</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Express Shipping</h3>
                  <p className="text-muted-foreground text-sm">Next day delivery (Metro cities only)</p>
                  <p className="text-primary font-semibold mt-2">+ ₹349</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <h2 className="text-xl font-semibold text-foreground mb-4">Shipping Queries</h2>
              <p className="text-muted-foreground mb-4">
                Have questions about your shipment? Contact our shipping support team:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Email:</strong> shipping@protodesignstudio.com</li>
                <li><strong>Phone:</strong> +91 98765 43210</li>
                <li><strong>WhatsApp:</strong> +91 98765 43210</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ShippingPolicy;
