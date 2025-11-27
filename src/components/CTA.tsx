import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-voguard-navy relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-voguard-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-voguard-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to make your voice channel{" "}
            <span className="text-voguard-teal">fraud-free?</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join the next generation of voice security. Request a demo and see VoGuard's real-time detection in action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl">
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Contact Sales
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10">
            <a href="mailto:Abdelrahman_Mohamed_Salah@outlook.com" className="flex items-center gap-3 text-white/70 hover:text-voguard-teal transition-colors">
              <Mail className="w-5 h-5" />
              <span>Abdelrahman_Mohamed_Salah@outlook.com</span>
            </a>
            <a href="tel:0109659958" className="flex items-center gap-3 text-white/70 hover:text-voguard-teal transition-colors">
              <Phone className="w-5 h-5" />
              <span>0109659958</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
