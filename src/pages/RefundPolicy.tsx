import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { RefreshCw, AlertCircle, CheckCircle, XCircle, Clock } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Refund & Cancellation Policy</h1>
          <p className="text-muted-foreground text-center mb-8">Last updated: January 2025</p>
          
          <div className="space-y-8">
            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <RefreshCw className="h-6 w-6 text-primary" />
                Refund Policy Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Proto Design Studio, we are committed to ensuring customer satisfaction with every order. 
                Due to the custom nature of 3D printed products, our refund policy is designed to be fair 
                to both our customers and our business while maintaining high-quality standards.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                Eligible for Refund
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Defective Products:</strong> Items with manufacturing defects, broken parts, or significant quality issues.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Wrong Product:</strong> If you receive a different product than what you ordered.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Damaged in Transit:</strong> Products damaged during shipping (report within 24 hours of delivery with photos).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Dimensional Errors:</strong> If the printed product significantly deviates from the approved specifications (±2mm tolerance).</span>
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <XCircle className="h-6 w-6 text-red-500" />
                Not Eligible for Refund
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span><strong>Custom Orders:</strong> Once production has started on custom 3D prints based on your design files.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span><strong>Design Errors:</strong> Issues arising from errors in customer-provided 3D files.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span><strong>Change of Mind:</strong> Returning products simply because you changed your mind.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span><strong>Slight Color Variations:</strong> Minor color differences between screen display and actual product.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span><strong>Used/Modified Products:</strong> Items that have been used, modified, or damaged after delivery.</span>
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-primary" />
                Cancellation Policy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-foreground mb-2">Within 1 Hour of Order</h3>
                  <p>Full refund (100%) - Order can be cancelled without any charges.</p>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-foreground mb-2">Before Production Starts</h3>
                  <p>90% refund - 10% administrative fee will be deducted.</p>
                </div>
                <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-foreground mb-2">During Production</h3>
                  <p>50% refund - Production costs will be deducted.</p>
                </div>
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-foreground mb-2">After Shipping</h3>
                  <p>No cancellation possible - Order is already dispatched.</p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                Refund Process
              </h2>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <span><strong>Submit Request:</strong> Contact us within 7 days of delivery with order details and photos of the issue.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <span><strong>Review:</strong> Our team will review your request within 2-3 business days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <span><strong>Approval:</strong> If approved, you'll receive instructions for returning the product (if required).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
                  <span><strong>Refund:</strong> Amount will be credited to the original payment method within 7-10 business days.</span>
                </li>
              </ol>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact for Refunds</h2>
              <p className="text-muted-foreground mb-4">
                For refund or cancellation requests, please contact us at:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Email:</strong> refunds@protodesignstudio.com</li>
                <li><strong>Phone:</strong> +91 98765 43210</li>
                <li><strong>Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM IST</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default RefundPolicy;
