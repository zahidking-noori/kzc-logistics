import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SiteLayout from '@/components/layout/SiteLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import OurStory from '@/pages/OurStory';
import Team from '@/pages/Team';
import Leadership from '@/pages/Leadership';
import Services from '@/pages/Services';
import Industries from '@/pages/Industries';
import Fleet from '@/pages/Fleet';
import Projects from '@/pages/Projects';
import Testimonials from '@/pages/Testimonials';
import Careers from '@/pages/Careers';
import Gallery from '@/pages/Gallery';
import Blog from '@/pages/Blog';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';
import Quote from '@/pages/Quote';
import Tracking from '@/pages/Tracking';
import Privacy from '@/pages/Privacy';
import PageNotFound from './lib/PageNotFound';

const App = () => {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/team" element={<Team />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/privacy" element={<Privacy />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function AppWrapper() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default AppWrapper;