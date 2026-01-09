import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Terms & Conditions</h1>
          <p className="text-muted-foreground text-center mb-8">Last updated: January 2025</p>
          
          <div className="space-y-8">
            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Proto Design Studio ("Company", "we", "our", "us"). These Terms and Conditions govern 
                your use of our website located at app.protodesignstudio.com and all related services, products, 
                and features offered by Proto Design Studio.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with 
                any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Proto Design Studio provides the following services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Custom 3D printing services based on customer-provided designs</li>
                  <li>Ready-made 3D printed products available for purchase</li>
                  <li>3D modeling and design consultation services</li>
                  <li>Rapid prototyping for businesses and individuals</li>
                </ul>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>When you create an account with us, you must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate, complete, and current information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to terminate accounts that violate these terms or engage in fraudulent activities.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Orders and Payments</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong>4.1 Pricing:</strong> All prices are listed in Indian Rupees (₹) and include applicable taxes unless stated otherwise.</p>
                <p><strong>4.2 Payment:</strong> We accept payments via Razorpay (UPI, Credit/Debit Cards, Net Banking), PayPal, Stripe, and Cryptocurrency.</p>
                <p><strong>4.3 Order Confirmation:</strong> An order is confirmed only after successful payment. You will receive an email confirmation with order details.</p>
                <p><strong>4.4 Price Changes:</strong> We reserve the right to modify prices at any time. Price changes will not affect orders already confirmed.</p>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                5. Intellectual Property
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong>5.1 Your Content:</strong> You retain all rights to 3D designs and files you submit. By uploading, you grant us a license to use them solely for order fulfillment.</p>
                <p><strong>5.2 Our Content:</strong> All website content, logos, and branding are owned by Proto Design Studio and protected by intellectual property laws.</p>
                <p><strong>5.3 Restrictions:</strong> You may not reproduce, distribute, or create derivative works from our content without written permission.</p>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Custom 3D Printing Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong>6.1 File Requirements:</strong> You are responsible for ensuring your 3D files are printable and meet our specifications.</p>
                <p><strong>6.2 Design Review:</strong> We reserve the right to reject designs that are illegal, offensive, or technically unprintable.</p>
                <p><strong>6.3 Tolerances:</strong> 3D printing has inherent tolerances (±0.2mm for FDM, ±0.1mm for SLA). Minor variations are not considered defects.</p>
                <p><strong>6.4 Color Variations:</strong> Slight color variations between screen display and printed output are normal and expected.</p>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                7. Prohibited Uses
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You agree not to use our services for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Weapons, weapon components, or dangerous items</li>
                  <li>Counterfeit products or items infringing on trademarks</li>
                  <li>Illegal, obscene, or offensive content</li>
                  <li>Items that violate any applicable laws or regulations</li>
                  <li>Medical devices without proper certifications</li>
                </ul>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Scale className="h-6 w-6 text-primary" />
                8. Limitation of Liability
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To the maximum extent permitted by law, Proto Design Studio shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
                <p>
                  Our total liability for any claim arising from these terms or services shall not exceed the 
                  amount paid by you for the specific order in question.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes 
                arising from these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting to the website. Your continued use of our services after changes constitutes acceptance of 
                the modified terms.
              </p>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Email:</strong> legal@protodesignstudio.com</li>
                <li><strong>Phone:</strong> +91 98765 43210</li>
                <li><strong>Address:</strong> 123, Industrial Area, Phase 2, Pune, Maharashtra 411001, India</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default TermsConditions;
