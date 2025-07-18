import { images } from '@/assets/index';
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { navLinks } from '@/constant';
import { formatTo12Hour } from '@/utils/dateTimeConvert';
import { CalendarDays, Menu, Phone } from "lucide-react";
import { useEffect, useState } from 'react';

const heroImages = [
    images.image1,
    images.image2,
    images.image8,
    images.image9,
    images.image10,
    images.image11,


];
import { toast } from 'sonner';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    // const [carClass, setCarClass] = useState("");
    const [phone, setPhone] = useState("");
    const [agreed, setAgreed] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
                setFade(false);
            }, 500);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleBookNow = () => {
        if (!start || !end || !selectedDate || !selectedTime || !phone) {
            toast.error("Vänligen fyll i alla fält.");
            return;
        }

        if (!agreed) {
            toast.error("Du måste godkänna att dina uppgifter sparas.");
            return;
        }

        const formattedTime = formatTo12Hour(selectedTime);
        const formattedDateTime = `${selectedDate} ${formattedTime}`;

        const message = `Hej! 🚖 *Ny Taxibokning*\n\n📍 Start: ${start}\n📍 Slut: ${end}\n🕒 Tid: ${formattedDateTime}\n 📞 Telefon: ${phone}`;
        const encodedMessage = encodeURIComponent(message);
        const smsNumber = "+46735735005";

        // window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
        window.location.href = `sms:${smsNumber}?body=${encodedMessage}`;

        toast.success("Du kommer att omdirigeras till SMS-appen för att slutföra bokningen.");
        setStart("")
        setEnd("")
        setSelectedDate("")
        setSelectedTime("")
        setPhone("")
        setAgreed(false)

    };



    return (
        <div
            className={`relative min-h-screen text-white bg-fixed bg-no-repeat bg-center bg-cover transition-opacity duration-1000 ${fade ? "opacity-75" : "opacity-100"}`}
            style={{
                backgroundImage: `url(${heroImages[currentImageIndex]})`,
            }}
        >
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Navbar */}
            <div className="relative z-10 flex justify-between xl:justify-start md:gap-40 lg:ml-20 items-center px-6 md:px-12 py-4">
                <div className=" flex  items-center gap-1 md:gap-5 font-bold ">
                    <img src={images.logo} className='w-12 md:w-14 xl:w-20' alt="" />
                    <p className='text-white md:text-2xl '>DRIVE <span className='text-[#fdb813]'>UPPSALA</span></p>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6 text-[16px] xl:text-[20px] font-medium">
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
                            <div className="flex items-center justify-between mb-8">
                                <div className="text-xl font-bold text-[#fdb813]">
                                    <img src={images.logo} className='w-16' alt="" />
                                </div>
                            </div>
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
            <div className="relative z-10 flex flex-col items-center justify-center text-center mt-7 md:mt-16 px-4 pt-10 pb-28">
                <p className="text-[#fdb813] tracking-widest mb-2 text-[20px]">NJUT AV EN BEKVÄM RESA</p>
                <h1 className="text-4xl lg:text-6xl tracking-widest font-bold mb-6">Beställ Taxi Online</h1>

                {/* Booking Form */}
                <div className="text-white rounded-md p-4 flex flex-wrap justify-center gap-4 max-w-4xl w-full">
                    <input
                        type="text"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        placeholder="Startdestination"
                        className="px-4 py-2 border rounded w-60 bg-white text-black placeholder:text-gray-300"
                    />
                    <input
                        type="text"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        placeholder="Slutdestination"
                        className="px-4 py-2 border rounded w-60 bg-white text-black placeholder:text-gray-300"
                    />
                    <div className="flex items-center border rounded w-60 px-4 py-2 gap-2 bg-white text-black">
                        <CalendarDays size={16} />
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full outline-none placeholder:text-gray-300"
                        />
                    </div>
                    <div className="flex items-center border rounded w-60 px-4 py-2 gap-2 bg-white text-black">
                        🕒
                        <input
                            type="time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full outline-none placeholder:text-gray-300"
                        />
                    </div>
                    {/* <div className="flex items-center border rounded w-60 px-4 py-2 gap-2 bg-white text-black">
                        <Car size={16} />
                        <input
                            type="text"
                            value={carClass}
                            onChange={(e) => setCarClass(e.target.value)}
                            placeholder="Bilklass"
                            className="w-full outline-none placeholder:text-gray-300"
                        />
                    </div> */}
                    <div className="flex items-center border rounded w-60 px-4 py-2 gap-2 bg-white text-black">
                        <Phone size={16} />
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Ditt Telefonnummer"
                            className="w-full outline-none placeholder:text-gray-300"
                        />
                    </div>
                </div>

                {/* Consent + Button */}
                <div className="mt-4 flex flex-col items-center">
                    <label className="text-xs flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <span className='md:text-[18px]'>Jag godkänner att mina inlämnade uppgifter samlas in och lagras.</span>
                    </label>
                    <button
                        onClick={handleBookNow}
                        className="mt-4 bg-[#fdb813] hover:bg-[#fdb813] text-white font-semibold px-14 text-[18px] py-2 rounded-full cursor-pointer"
                    >
                        Boka Nu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
