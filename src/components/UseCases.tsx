import { Building2, Phone, Globe, ShieldCheck } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Building2,
      title: "Banks & Financial Services",
      description: "Protect high-value transactions and account access with voice biometrics that stop fraud before losses occur.",
    },
    {
      icon: Phone,
      title: "Contact Centers",
      description: "Give agents real-time trust signals. Know if a caller is human and verified within seconds of the call starting.",
    },
    {
      icon: Globe,
      title: "Telecom & eKYC",
      description: "Embed VoGuard directly into your platform. Usage-based billing, easy API integration, instant value.",
    },
    {
      icon: ShieldCheck,
      title: "Government & Public Sector",
      description: "Compliance-grade verification for e-services. Arabic dialect support for the entire MENA region.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="use-cases">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-voguard-teal font-semibold text-sm uppercase tracking-wider">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              <span className="text-voguard-teal">/</span>Solutions for every industry that relies on voice
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              From banks to government services, VoGuard provides the security layer your voice channel needs. API-first design means easy integration with your existing systems.
            </p>

            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-voguard-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-voguard-teal/20 transition-colors">
                    <useCase.icon className="w-6 h-6 text-voguard-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-voguard-navy rounded-3xl overflow-hidden relative">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-voguard-teal/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-voguard-cyan/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8">
                <div className="voice-wave mb-8 scale-150">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Real-Time Protection</h3>
                <p className="text-white/60 text-center">Every call analyzed, every fraud stopped</p>

                {/* Floating Stats */}
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-voguard-teal font-bold">$10B+</div>
                  <div className="text-white/60 text-xs">Fraud prevented</div>
                </div>
                <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-voguard-teal font-bold">680%</div>
                  <div className="text-white/60 text-xs">Rise in deepfakes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
