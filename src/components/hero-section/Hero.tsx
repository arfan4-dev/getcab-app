import { CalendarDays, Car, Phone, Menu } from "lucide-react";
import { images } from '@/assets/index';
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";

const navLinks = ["HOME", "ABOUT US", "GET A CAB", "CONTACT US"];

const Hero = () => {
    return (
        <div
            className="relative h-full bg-center bg-no-repeat bg-cover bg-fixed text-white"
            style={{ backgroundImage: `url(${images?.heroImg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Navbar */}
            <div className="relative z-10 flex justify-between md:justify-evenly items-center px-6 md:px-12 py-4">
                <div className="text-3xl font-bold text-[#fdb813]">
                    <span className="text-white">Get</span>Cab
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6 text-[16px] font-medium">
                    {navLinks.map((label, i) => (
                        <a
                            key={i}
                            href="#"
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
                                    <span className="text-white">Get</span>Cab
                                </div>
                                {/* <SheetTrigger className="text-white text-2xl font-bold">&times;</SheetTrigger> */}
                            </div>

                            {/* Sidebar Nav Links */}
                            <nav className="flex flex-col gap-5">
                                {navLinks.map((label, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="text-base font-medium hover:text-[#fdb813] transition-all border-b border-gray-700 pb-2"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </nav>

                            {/* Call to Action */}
                            <div className="mt-10">
                                <button className="w-full bg-[#fdb813] hover:bg-yellow-500 text-[#111] font-semibold py-2 rounded-md transition-colors">
                                    Book Now
                                </button>
                            </div>
                        </SheetContent>

                    </Sheet>
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center mt-16 px-4 pt-10 pb-28">
                <p className="text-[#fdb813] tracking-widest mb-2">ENJOY COMFORTABLE TRIP</p>
                <h1 className="text-4xl lg:text-5xl tracking-widest font-bold mb-6 ">Order Taxi Online</h1>

                {/* Booking Form */}
                <div className="text-white rounded-md shadow-md p-4 flex flex-wrap justify-center gap-4 max-w-4xl w-full">
                    <input type="text" placeholder="Start Destination" className="px-4 py-2 border rounded w-48 bg-white text-black placeholder:text-gray-300" />
                    <input type="text" placeholder="End Destination" className="px-4 py-2 border rounded w-48 bg-white text-black placeholder:text-gray-300" />
                    <div className="flex items-center border rounded w-48 px-4 py-2 gap-2 bg-white text-black">
                        <CalendarDays size={16} />
                        <input type="text" placeholder="Time and Date" className="w-full outline-none placeholder:text-gray-300" />
                    </div>
                    <div className="flex items-center border rounded w-48 px-4 py-2 gap-2 bg-white text-black">
                        <Car size={16} />
                        <input type="text" placeholder="Car Class" className="w-full outline-none placeholder:text-gray-300" />
                    </div>
                    <div className="flex items-center border rounded w-48 px-4 py-2 gap-2 bg-white text-black">
                        <Phone size={16} />
                        <input type="text" placeholder="Your Phone" className="w-full outline-none placeholder:text-gray-300" />
                    </div>
                </div>

                {/* Consent + Button */}
                <div className="mt-4 flex flex-col items-center">
                    <label className="text-xs">
                        <input type="checkbox" className="mr-2" />
                        I agree that my submitted data is being collected and stored.
                    </label>
                    <button className="mt-4 bg-[#fdb813] hover:bg-[#fdb813] text-white font-semibold px-6 py-2 rounded-full cursor-pointer">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
