import Hero from "../components/Hero/Hero";
import wave from "../assets/wave.svg"


const Home = () => {
    return (
        <div className="relative">
          
           <Hero></Hero>
            <img src={wave} alt="wave" className="absolute bottom-0 w-full"/>
        </div>
    );
};

export default Home;