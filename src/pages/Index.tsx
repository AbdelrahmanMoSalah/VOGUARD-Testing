import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Technology from "@/components/Technology";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustLogos />
      <Problem />
      <Solution />
      <Technology />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
