
import { Hero } from '../components/home/Hero';
import { ServicesTeaser } from '../components/home/ServicesTeaser';
import { TeamTeaser } from '../components/home/TeamTeaser';
import { LocationTeaser } from '../components/home/LocationTeaser';
import { AboutSection } from '../components/home/AboutSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <ServicesTeaser />
            <TeamTeaser />
            <LocationTeaser />
            <AboutSection />
        </div>
    );
};

export default Home;
