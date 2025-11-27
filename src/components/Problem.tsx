import { AlertTriangle, Ban, ShieldX } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Deepfake Voice Fraud",
      description: "Voice cloning has moved from hype to hard losses—a deepfake stole $25M from a global firm. Deepfake activity in contact centers jumped 680% in 2024.",
    },
    {
      icon: Ban,
      title: "Legacy Tools Fail",
      description: "NIST says not to use legacy voice checks, yet most tools still rely on brittle prompts that miss real callers—especially in Arabic dialects.",
    },
    {
      icon: ShieldX,
      title: "Market Blind Spot",
      description: "400M+ Arabic speakers across 22 countries need low-friction, accurate verification. The MENA market is huge—so are the stakes.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="solutions">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-voguard-teal font-semibold text-sm uppercase tracking-wider">
            Why Others Fail
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            <span className="text-voguard-teal">/</span>Voice is being weaponized. Most defenses weren't built for this.
          </h2>
          <p className="text-muted-foreground text-lg">
            Contact-center fraud and deepfakes are spiking. Consumers reported $10B+ in fraud losses. The voice channel is now materially risky.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-destructive/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
