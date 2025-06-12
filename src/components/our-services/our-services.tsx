import { images } from "@/assets";
import { services } from "@/constant";

const ServicesSection = () => {


    return (
        <section id="about" className="py-40 bg-white text-center px-4 text-[#1A1919]">
            <p className="text-[#fdb813] font-semibold uppercase mb-2 text-[18px] tracking-widest">Vad Vi Erbjuder</p>
            <h2 className="text-[40px] lg:text-[57px] font-bold mb-4">Välkommen till oss</h2>
            <p className="text-[14px] lg:text-[18px] max-w-2xl mx-auto mb-10">
                <span className="font-bold">Drive Uppsala</span> är ett lokalt taxibolag med ett enkelt uppdrag – att erbjuda
                <span className="font-bold"> prisvärda, säkra och pålitliga transporter</span> för människor som bor i småstäder runt Uppsala.
                <br />
                Vi förstår att boende utanför staden ofta har begränsad tillgång till bekväma resealternativ. Det är därför vi startade Drive Uppsala – för att göra resandet enklare och mer tillgängligt för alla, oavsett var du bor.
                <br />
                Med en <span className="font-bold">flotta av väl underhållna fordon</span> erbjuder vi taxitjänster till och från Uppsala, Arlanda flygplats och närliggande områden.
                Vårt <span className="font-bold">fokus ligger på kundnöjdhet, punktlighet och komfort – till ett rimligt pris</span>.
                <br />
                Oavsett om du bor i Vänge, Björklinge, Storvreta, Lindbacken, Knivsta eller i närheten.
                <br />
                <span className="font-bold"> Drive Uppsala – din lokala taxi, alltid nära dig.</span>
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
                        <h3 className="text-[30px] font-semibold">{service.title}</h3>
                        <p className="text-[16px]">{service.desc}</p>
                    </div>
                ))}
            </div>
            <div
                className="relative h-[1000px] mt-32 text-white bg-fixed bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: `url(${images?.image4})` }}
            ></div>


        </section>
    );
};

export default ServicesSection;
