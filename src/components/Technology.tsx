import { Brain, Waves, FileCheck } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Deepfake & Replay Detection",
      description: "A real-time anti-spoof engine that passively distinguishes human vs. AI-generated (TTS/voice-conversion) and replayed audio under normal telephony conditions.",
      specs: [
        { label: "Validation accuracy", value: "98.82%" },
        { label: "Decision speed", value: "<300ms" },
        { label: "Attack types", value: "Deepfake + Replay" },
      ],
    },
    {
      icon: Waves,
      title: "Speaker Verification",
      description: "Text-independent speaker verification that matches a caller's voice to the account holder from a few seconds of natural speech. Optimized for Arabic dialects.",
      specs: [
        { label: "Pretraining scale", value: "316.6M params" },
        { label: "Internal validation", value: "95.49% accuracy" },
        { label: "Verification UX", value: "2-5s of speech" },
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance & Audit Trail",
      description: "Produces tamper-evident decision records for audits. Full compliance-grade logging with signed evidence certificates for enterprise clients.",
      specs: [
        { label: "Evidence format", value: "Signed certificates" },
        { label: "Deployment", value: "SaaS or On-prem" },
        { label: "Compliance add-on", value: "$0.001/min" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-voguard-teal font-semibold text-sm uppercase tracking-wider">
            Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            <span className="text-voguard-teal">/</span>Built for real-world telephony, optimized for Arabic
          </h2>
          <p className="text-muted-foreground text-lg">
            Our models evaluate multiple backbones (WavLM, HuBERT, ECAPA-TDNN) and select the best feature stack for contact-center audio.
          </p>
        </div>

        <div className="space-y-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-voguard-teal/30 transition-all duration-300 hover:shadow-card"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-voguard-teal/10 flex items-center justify-center flex-shrink-0">
                      <tech.icon className="w-7 h-7 text-voguard-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{tech.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                  {tech.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="text-center lg:text-left">
                      <div className="text-lg font-bold text-voguard-teal">{spec.value}</div>
                      <div className="text-muted-foreground text-sm">{spec.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
