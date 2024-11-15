// app/home/components/HeroSection.tsx
import Gallery from "./Gallery";
import OurHotels from "./Hotels";
import Link from "next/link";
export const HeroSection = () => {
  return (
    <div>
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://www.mediafire.com/convkey/5ca5/92xvlb22qvvpoub6g.jpg')" }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-fadeInDown">Welcome to Your Dream Stay</h1>
        <p className="max-w-lg md:max-w-2xl text-base md:text-lg lg:text-xl animate-fadeInUp">Discover luxury and comfort like never before.</p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 animate-bounce"><Link href={"https://wa.me/1234567890?text=I%20want%20to%20book%20the%20Standard%20Room"}>Book Now</Link></button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 animate-bounce">Learn More</button>
        </div>
      </div>
    </div>
    <section>
      <Gallery></Gallery>
    </section>
    <section>
     <OurHotels></OurHotels>
    </section>
    </div>
  
  );
};

