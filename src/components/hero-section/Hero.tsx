import { images } from '@/assets/index';
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { navLinks } from '@/constant';

import { CalendarDays, Car, Menu, Phone } from "lucide-react";

const Hero = () => {
    return (
        <div
            className="relative min-h-screen text-white bg-fixed bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage: `url(${images?.heroImg})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Navbar */}
            <div className="relative z-10 flex justify-between md:justify-evenly items-center px-6 md:px-12 py-4">
                <div className="text-3xl font-bold text-[#fdb813]">
                    <img src={images.logo} className='w-16' alt="" />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6 text-[16px] font-medium">
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
                <p className="text-[#fdb813] tracking-widest mb-2">NJUT AV EN BEKVÄM RESA</p>
                <h1 className="text-4xl lg:text-5xl tracking-widest font-bold mb-6 ">Beställ Taxi Online</h1>

                {/* Booking Form */}
                <div className="text-white rounded-md  p-4 flex flex-wrap justify-center gap-4 max-w-4xl w-full">
                    <input type="text" placeholder="Startdestination" className="px-4 py-2 border rounded w-48 bg-white text-black placeholder:text-gray-300" />
                    <input type="text" placeholder="Slutdestination" className="px-4 py-2 border rounded w-48 bg-white text-black placeholder:text-gray-300" />
                    <div className="flex items-center border rounded w-48 px-4 py-2 gap-2 bg-white text-black">
                        <CalendarDays size={16} />
                        <input type="text" placeholder="Tid och Datum" className="w-full outline-none placeholder:text-gray-300" />
                    </div>
                    <div className="flex items-center border rounded w-48 px-4 py-2 gap-2 bg-white text-black">
                        <Car size={16} />
                        <input type="text" placeholder="Bilklass" className="w-full outline-none placeholder:text-gray-300" />
                    </div>
                    <div className="flex items-center border rounded w-48 px-4 py-2 gap-2 bg-white text-black">
                        <Phone size={16} />
                        <input type="text" placeholder="Ditt Telefonnummer" className="w-full outline-none placeholder:text-gray-300" />
                    </div>
                </div>

                {/* Consent + Button */}
                <div className="mt-4 flex flex-col items-center">
                    <label className="text-xs">
                        <input type="checkbox" className="mr-2" />
                        Jag godkänner att mina inlämnade uppgifter samlas in och lagras.
                    </label>
                    <button className="mt-4 bg-[#fdb813] hover:bg-[#fdb813] text-white font-semibold px-6 py-2 rounded-full cursor-pointer">
                        Boka Nu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
