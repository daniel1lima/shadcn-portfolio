import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Testimonials,
  Projects,
  Contact,
  Footer,
} from '@/components/sections';

import Scroller from '@/components/sections/scroller/modern/scroller';

import SmoothScroll from '@/components/smooth-scroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header loader={true} />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Scroller/>
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
}
