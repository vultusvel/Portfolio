import Header from "@/components/Header/Header";
import About from "@/components/sections/About/About";
import Footer from "@/components/Footer/Footer";
import Contacts from "@/components/Footer/Contacts/Contacts";
import Resume from "@/components/sections/Resume/Resume"
import Projects from "@/components/sections/Projects/Projects";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <About />
        <Resume/>
        <Projects/>
        <Contacts/>
        <Footer />
      </main>
    </div>
  );
}
