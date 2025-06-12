import { images } from '@/assets/index';
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { navLinks } from '@/constant';

import { CalendarDays, Car, Menu, Phone } from "lucide-react";
import { useEffect, useState } from 'react';
const heroImages = [
    images.image1,
    images.image2,
    images.image3,
];
const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); // trigger fade out
            setTimeout(() => {
                setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
                setFade(false); // trigger fade in
            }, 500); // fade duration
        }, 4000); // image change every 4 sec

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`relative min-h-screen text-white bg-fixed bg-no-repeat bg-center bg-cover transition-opacity duration-1000 ${fade ? "opacity-75" : "opacity-100"}`}
            style={{
                backgroundImage: `url(${heroImages[currentImageIndex]})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Navbar */}
            <div className="relative z-10 flex gap-40 ml-20 items-center px-6 md:px-12 py-4">
                <div className="text-2xl flex items-center gap-5 font-bold ">
                    <img src={images.logoMain} className='w-20' alt="" />
                    <p className='text-white'>DRIVE <span className='text-[#fdb813]'>UPPSALA</span></p>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6 text-[20px] font-medium">
                    {navLinks.map(({ label, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            className="relative group text-white hover:text-[#fdb813] transition-all duration-300"
                        >
                            {label}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fdb813] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger className="text-white">
                            <Menu size={28} />
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-[#111] text-white p-6 w-72">
                            {/* Sidebar Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="text-xl font-bold text-[#fdb813]">
                                    <img src={images.logo} className='w-16' alt="" />
                                </div>
                            </div>

                            {/* Sidebar Nav Links */}
                            <nav className="flex flex-col gap-5">
                                {navLinks.map(({ label, href }, i) => (
                                    <a
                                        key={i}
                                        href={href}
                                        className="text-base font-medium hover:text-[#fdb813] transition-all border-b border-gray-700 pb-2"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </nav>

                            {/* Call to Action */}
                            <div className="mt-10">
                                <button className="w-full bg-[#fdb813] hover:bg-yellow-500 text-[#111] font-semibold py-2 rounded-md transition-colors">
                                    Boka Nu
                                </button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center mt-16 px-4 pt-10 pb-28">
                <p className="text-[#fdb813] tracking-widest mb-2 text-[20px]">NJUT AV EN BEKVÄM RESA</p>
                <h1 className="text-4xl lg:text-6xl tracking-widest font-bold mb-6 ">Beställ Taxi Online</h1>

                {/* Booking Form */}
                <div className="text-white rounded-md  p-4 flex flex-wrap justify-center gap-4 max-w-4xl w-full">
                    <input type="text" placeholder="Startdestination" className="px-4 py-2 border rounded w-60 bg-white text-black placeholder:text-gray-300" />
                    <input type="text" placeholder="Slutdestination" className="px-4 py-2 border rounded w-60 bg-white text-black placeholder:text-gray-300" />
                    <div className="flex items-center border rounded w-60 px-4 py-2 gap-2 bg-white text-black">
                        <CalendarDays size={16} />
                        <input type="text" placeholder="Tid och Datum" className="w-full outline-none placeholder:text-gray-300" />
                    </div>
                    <div className="flex items-center border rounded w-60 px-4 py-2 gap-2 bg-white text-black">
                        <Car size={16} />
                        <input type="text" placeholder="Bilklass" className="w-full outline-none placeholder:text-gray-300" />
                    </div>
                    <div className="flex items-center border rounded w-60 px-4 py-2 gap-2 bg-white text-black">
                        <Phone size={16} />
                        <input type="text" placeholder="Ditt Telefonnummer" className="w-full outline-none placeholder:text-gray-300" />
                    </div>
                </div>

                {/* Consent + Button */}
                <div className="mt-4 flex flex-col items-center">
                    <label className="text-xs">
                        <input type="checkbox" className="mr-2" />
                        <span className='text-[18px]'> Jag godkänner att mina inlämnade uppgifter samlas in och lagras.</span>

                    </label>
                    <button className="mt-4 bg-[#fdb813] hover:bg-[#fdb813] text-white font-semibold px-14 text-[18px]  py-2 rounded-full cursor-pointer">
                        Boka Nu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
