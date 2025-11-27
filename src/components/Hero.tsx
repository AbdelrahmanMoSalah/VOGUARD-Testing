import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Mic } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-voguard-teal/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-voguard-cyan/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-voguard-teal" />
              <span className="text-white/90 text-sm font-medium">
                98.82% Deepfake Detection Accuracy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-voguard-teal">/</span>The Voice Security Platform that delivers{" "}
              <span className="text-gradient">fraud-free calls,</span>{" "}
              <span className="text-white/90">not false promises</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl">
              Real-time deepfake detection and speaker verification for contact centers. 
              Stop voice fraud before it happens with AI that decides in under 300ms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-voguard-teal">98.82%</div>
                <div className="text-white/60 text-sm mt-1">Detection Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-voguard-teal">&lt;300ms</div>
                <div className="text-white/60 text-sm mt-1">Decision Speed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-voguard-teal">400M+</div>
                <div className="text-white/60 text-sm mt-1">Arabic Speakers</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-72 h-[580px] bg-voguard-navy-light rounded-[3rem] border-4 border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
                
                {/* Screen Content */}
                <div className="p-6 pt-16 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="text-white/60 text-sm">Voice Verification</div>
                    <div className="text-white font-semibold mt-1">Analyzing call...</div>
                  </div>

                  {/* Voice Wave Animation */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="voice-wave">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  {/* Verification Status */}
                  <div className="bg-voguard-teal/20 rounded-2xl p-4 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-voguard-gradient flex items-center justify-center">
                        <Mic className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-voguard-teal font-semibold">Human Verified</div>
                        <div className="text-white/60 text-sm">No deepfake detected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-16 top-1/4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg animate-pulse-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Speaker Match</div>
                    <div className="text-green-400 text-xs">95.49% Confidence</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/3 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg">
                <div className="text-voguard-teal text-2xl font-bold">Real-time</div>
                <div className="text-white/60 text-sm">Voice Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
