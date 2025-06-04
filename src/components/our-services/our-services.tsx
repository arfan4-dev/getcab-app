import { MapPin, Plane, Map, CarTaxiFront } from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            icon: <MapPin size={70} className="text-[#fdb813]" />,
            title: "Adresshämtning",
            desc: "Vi hämtar alltid våra kunder i tid. Tillgänglig 24/7.",
        },
        {
            icon: <Plane size={70} className="text-[#fdb813]" />,
            title: "Flygplatstransfer",
            desc: "GetCab är specialiserat på flygplatstransfer dygnet runt.",
        },
        {
            icon: <Map size={70} className="text-[#fdb813]" />,
            title: "Långdistansresor",
            desc: "Vi erbjuder långdistansresor till valfri destination.",
        },
        {
            icon: <CarTaxiFront size={70} className="text-[#fdb813]" />,
            title: "Taxiturer",
            desc: "Vi erbjuder taxiturer av olika längd och komplexitet.",
        },
    ];

    return (
        <section id="about" className="py-40 bg-white text-center px-4 text-[#1A1919]">
            <p className="text-[#fdb813] font-semibold uppercase mb-2 tracking-widest">Vad Vi Erbjuder</p>
            <h2 className="text-[40px] lg:text-[57px] font-bold mb-4">Välkommen till oss</h2>
            <p className="text-[14px] lg:text-[16px] max-w-2xl mx-auto mb-10">
                Vi skapade vår taxitjänst för att hjälpa dig hitta de mest pålitliga och högkvalitativa taxitjänsterna, när som helst och var som helst. Alla våra förare är uniformerade och fullt licensierade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="flex flex-col items-center text-center space-y-3"
                    >
                        {service.icon}
                        <h3 className="text-[22px] font-semibold">{service.title}</h3>
                        <p className="text-[16px]">{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
