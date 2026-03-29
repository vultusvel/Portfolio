import Header from "@/components/Header/Header";
import About from "@/components/sections/About/About";
import Footer from "@/components/Footer/Footer";
import Resume from "@/components/sections/Resume/Resume"

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <About />
        <Resume/>
        <Footer />
      </main>
    </div>
  );
}
