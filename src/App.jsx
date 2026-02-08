import Header from './components/Header/Header';
import CTA from './components/CTA/CTA';
import Services from './components/Services/Services';
import About from './components/About/About';
import WorkSamples from './components/WorkSamples/WorkSamples';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CTA />
        <Services />
        <About />
        <WorkSamples />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
