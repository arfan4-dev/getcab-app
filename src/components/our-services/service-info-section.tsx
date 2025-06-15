import { serviceItems } from "@/constant";
import { ArrowRight } from "lucide-react";

const ServicesInfoSection = () => {
    return (
        <section id="services" className="pt-16 pb-20 px-4 text-left max-w-7xl mx-auto ">
            <p className="uppercase text-[16px] tracking-widest text-[#1A1919] mb-1">Våra Tjänster</p>
            <h2 className="text-[40px] lg:text-[57px] font-medium text-[#1A1919] mb-8 leading-snug">
                Smidiga och hållbara transporter i och runt Uppsala
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
                {serviceItems.map((item, i) => (
                    <div
                        key={i}
                        className="group space-y-4 p-6 text-[18px] hover:bg-[#fdb813] text-[#1A1919] hover:text-white transition-all duration-500 cursor-pointer"
                    >
                        <h3 className="font-medium text-[24px] leading-snug group-hover:text-white">
                            {item.title}
                        </h3>
                        <p className="text-[16px] leading-relaxed text-gray-700 group-hover:text-white">
                            {item.desc}
                        </p>

                        {/* CTA with sliding Book Now text */}
                        <div className="group flex items-center w-[120px] overflow-hidden">
                            <ArrowRight
                                className="text-[#1A1919] group-hover:text-white transition-colors duration-300 shrink-0"
                                size={16}
                            />
                            <span
                                className="ml-2 transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[16px] text-white whitespace-nowrap"
                            >
                                Boka Nu
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16">
                <p className="uppercase text-[16px] tracking-widest text-[#1A1919] mb-1">Vad våra kunder säger</p>
                <h3 className="text-[32px] lg:text-[40px] font-medium text-[#1A1919] mb-6 leading-snug">
                    Vad våra kunder tycker
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 border-l-4 border-[#fdb813] shadow-md">
                        <p className="text-gray-700 text-[16px] italic mb-4">
                            “Pålitliga och trevliga förare. Jag använder Drive Uppsala regelbundet för att ta mig till Arlanda – alltid i tid och bra priser!”
                        </p>
                        <p className="text-[#1A1919] font-semibold">– Johan, Björklinge</p>
                    </div>

                    <div className="bg-white p-6 border-l-4 border-[#fdb813] shadow-md">
                        <p className="text-gray-700 text-[16px] italic mb-4">
                            “Äntligen en taxitjänst för oss utanför stan. Superenkel bokning och trygga resor.”
                        </p>
                        <p className="text-[#1A1919] font-semibold">– Sara, Storvreta</p>
                    </div>

                    <div className="bg-white p-6 border-l-4 border-[#fdb813] shadow-md">
                        <p className="text-gray-700 text-[16px] italic mb-4">
                            “Fantastisk upplevelse! Professionella förare och alltid punktliga. Rekommenderas varmt.”
                        </p>
                        <p className="text-[#1A1919] font-semibold">– Erik, Bälinge</p>
                    </div>

                    <div className="bg-white p-6 border-l-4 border-[#fdb813] shadow-md">
                        <p className="text-gray-700 text-[16px] italic mb-4">
                            “Jag bokade en taxi mitt i natten – kom i tid och chauffören var väldigt hjälpsam.”
                        </p>
                        <p className="text-[#1A1919] font-semibold">– Lina, Vaksala</p>
                    </div>

                    <div className="bg-white p-6 border-l-4 border-[#fdb813] shadow-md">
                        <p className="text-gray-700 text-[16px] italic mb-4">
                            “Trevlig kundtjänst och lättanvänd bokningssida. Kommer definitivt använda igen.”
                        </p>
                        <p className="text-[#1A1919] font-semibold">– Markus, Luthagen</p>
                    </div>

                    <div className="bg-white p-6 border-l-4 border-[#fdb813] shadow-md">
                        <p className="text-gray-700 text-[16px] italic mb-4">
                            “Vi reste med barn – fick barnstol utan problem. Rekommenderar för familjer.”
                        </p>
                        <p className="text-[#1A1919] font-semibold">– Emma, Flogsta</p>
                    </div>

                    <div className="bg-white p-6 border-l-4 border-[#fdb813] shadow-md">
                        <p className="text-gray-700 text-[16px] italic mb-4">
                            “Alltid rena bilar och trevliga förare. Känns tryggt att resa med Drive Uppsala.”
                        </p>
                        <p className="text-[#1A1919] font-semibold">– David, Gottsunda</p>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default ServicesInfoSection;
