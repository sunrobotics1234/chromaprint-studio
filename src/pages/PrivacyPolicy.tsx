import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Shield, Eye, Lock, Database, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Privacy Policy</h1>
          <p className="text-muted-foreground text-center mb-8">Last updated: January 2025</p>
          
          <div className="space-y-8">
            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Proto Design Studio ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                app.protodesignstudio.com or use our services.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Database className="h-6 w-6 text-primary" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name, email address, and phone number</li>
                    <li>Billing and shipping addresses</li>
                    <li>Payment information (processed securely via payment gateways)</li>
                    <li>Account credentials</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referral sources</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">User Content</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>3D design files uploaded for printing</li>
                    <li>Communications with our support team</li>
                    <li>Reviews and feedback</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Eye className="h-6 w-6 text-primary" />
                How We Use Your Information
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Order Processing:</strong> To process and fulfill your orders, including printing, shipping, and delivery.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Communication:</strong> To send order updates, respond to inquiries, and provide customer support.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Marketing:</strong> To send promotional offers and newsletters (with your consent).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Improvement:</strong> To analyze usage patterns and improve our services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Legal Compliance:</strong> To comply with applicable laws and regulations.</span>
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Lock className="h-6 w-6 text-primary" />
                Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>SSL/TLS encryption for all data transmission</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Secure payment processing through PCI-DSS compliant gateways</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Regular security audits and vulnerability assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Access controls and employee training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Encrypted storage of sensitive data</span>
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Service Providers:</strong> Shipping partners, payment processors, and hosting services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Legal Requirements:</strong> When required by law or to protect our rights.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets.</span>
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Remember your preferences and login status</li>
                <li>• Analyze website traffic and usage patterns</li>
                <li>• Personalize content and advertisements</li>
                <li>• Improve website performance</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You can manage cookie preferences through your browser settings.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <UserCheck className="h-6 w-6 text-primary" />
                Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Access:</strong> Request a copy of your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Correction:</strong> Request correction of inaccurate data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Opt-out:</strong> Unsubscribe from marketing communications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Portability:</strong> Request transfer of your data</span>
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and fulfill 
                the purposes outlined in this policy. After account deletion, we may retain certain information 
                for legal compliance, dispute resolution, and fraud prevention for up to 7 years.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under 18 years of age. We do not knowingly collect 
                personal information from children. If you believe we have collected information from a child, 
                please contact us immediately.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with 
                an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or your personal data, please contact:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Data Protection Officer</strong></li>
                <li><strong>Email:</strong> privacy@protodesignstudio.com</li>
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

export default PrivacyPolicy;
