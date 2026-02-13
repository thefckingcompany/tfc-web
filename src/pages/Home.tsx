
import { Hero } from '../components/home/Hero';
import { ServicesTeaser } from '../components/home/ServicesTeaser';
import { TeamTeaser } from '../components/home/TeamTeaser';
import { LocationTeaser } from '../components/home/LocationTeaser';

const Home = () => {
    return (
        <div className="animate-fade-in">
            <Hero />
            <ServicesTeaser />
            <TeamTeaser />
            <LocationTeaser />
        </div>
    );
};

export default Home;
