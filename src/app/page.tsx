import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Features from '@/components/Features';
import ValueProp from '@/components/ValueProp';
import Impact from '@/components/Impact';
import BusinessModel from '@/components/BusinessModel';
import Roadmap from '@/components/Roadmap';
import Team from '@/components/Team';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Features />
      <ValueProp />
      <Impact />
      <BusinessModel />
      <Roadmap />
      <Team />
      <Contact />
    </>
  );
}