import { AdditionalSections } from './components/AdditionalSections';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { LocaleProvider } from './LocaleProvider';

export default function Home() {
  return <LocaleProvider><Navbar /><main><Hero /><Experience /><Projects /><Skills /><AdditionalSections /><Contact /></main><Footer /></LocaleProvider>;
}
