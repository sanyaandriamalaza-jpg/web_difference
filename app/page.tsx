import Header from "./components/Header";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-between py-8 md:py-12">
        <Header />
        <Hero />
        <CallToAction />
        </div>
      </main>
  );
}
