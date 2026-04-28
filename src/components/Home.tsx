import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';

function Home() {
    return (
        <main className="pt-20 sm:pt-24 px-4 sm:px-6 lg:px-32 pb-12 sm:pb-16">
            <Hero />
            <Carousel />
            <Contact />
        </main>
    );
}

export default Home;
