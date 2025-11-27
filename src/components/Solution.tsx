import { Mic, ShieldCheck, Zap } from "lucide-react";

const Solution = () => {
  const features = [
    {
      icon: Mic,
      title: "Who's Speaking?",
      description: "Passive speaker match from just a few seconds of natural speech. No awkward prompts.",
      stat: "95.49%",
      statLabel: "Match Accuracy",
    },
    {
      icon: ShieldCheck,
      title: "Is It Real?",
      description: "Deepfake and replay detection under real telephony conditions. Catches TTS, voice conversion, and replays.",
      stat: "98.82%",
      statLabel: "Detection Rate",
    },
    {
      icon: Zap,
      title: "What Happens Now?",
      description: "Policy engine triggers allow, step-up, or block decisions. Real-time call flow control.",
      stat: "<300ms",
      statLabel: "Decision Time",
    },
  ];

  return (
    <section className="py-20 bg-voguard-navy" id="technology">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-voguard-teal font-semibold text-sm uppercase tracking-wider">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            <span className="text-voguard-teal">/</span>VoGuard makes the voice channel trustworthy in real time
          </h2>
          <p className="text-white/70 text-lg">
            We analyze the live stream and return a decision fast enough to change the call flow. No more guessing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-voguard-teal/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-voguard-gradient flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed mb-6">{feature.description}</p>
              <div className="pt-6 border-t border-white/10">
                <div className="text-3xl font-bold text-voguard-teal">{feature.stat}</div>
                <div className="text-white/50 text-sm">{feature.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
