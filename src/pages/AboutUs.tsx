import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Users, Target, Award, Printer } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <div className="bg-card rounded-xl p-8 border border-border mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Printer className="h-6 w-6 text-primary" />
                  Welcome to Proto Design Studio
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Proto Design Studio is India's premier 3D printing service provider, dedicated to transforming your ideas into tangible reality. 
                  Founded with a vision to make advanced manufacturing accessible to everyone, we combine cutting-edge technology with exceptional 
                  craftsmanship to deliver products that exceed expectations.
                </p>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To democratize 3D printing technology and empower individuals, businesses, and innovators across India 
                  with high-quality, affordable custom manufacturing solutions.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  To become India's most trusted name in 3D printing, known for innovation, quality, and customer satisfaction, 
                  while contributing to the Make in India initiative.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 border border-border mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Why Choose Us?
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>State-of-the-Art Technology:</strong> We use the latest 3D printing technologies including FDM, SLA, and SLS to ensure precision and quality.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Wide Material Selection:</strong> From PLA and ABS to specialized resins and nylon, we offer materials for every application.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Expert Team:</strong> Our skilled engineers and designers ensure your projects are executed flawlessly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Pan-India Delivery:</strong> We ship to all major cities across India with secure packaging and tracking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Competitive Pricing:</strong> Quality 3D printing at prices that work for individuals and businesses alike.</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Services</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🎨</div>
                  <h4 className="font-semibold text-foreground">Custom Printing</h4>
                  <p className="text-sm text-muted-foreground">Upload your designs and get them printed</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🏭</div>
                  <h4 className="font-semibold text-foreground">Prototyping</h4>
                  <p className="text-sm text-muted-foreground">Rapid prototyping for businesses</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🎁</div>
                  <h4 className="font-semibold text-foreground">Ready Products</h4>
                  <p className="text-sm text-muted-foreground">Shop from our curated collection</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AboutUs;
