import { AboutSection } from '../components/home/AboutSection';

const About = () => {
    return (
        <div className="pt-12 animate-fade-in">
            {/* Added pt-20 to account for fixed header if any, or just spacing */}
            <AboutSection />
        </div>
    );
};

export default About;
