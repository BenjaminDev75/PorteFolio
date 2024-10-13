import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar2";
import AboutSection from "./components/AboutSection";
import Langage from "./components/Langage/Langage";
import ProjectsSection from "./components//Projet/ProjectsSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import BTS from './components/BTS';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar />
            <div className="container mt-24 mx-auto px-12 py-4">
                <HeroSection />
                <AchievementsSection />
                <AboutSection />
                <BTS/>
                <Langage/>
                <ProjectsSection />
            </div>
            <Footer />
        </main>
    );
}