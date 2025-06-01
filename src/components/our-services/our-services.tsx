import { MapPin, Plane, Map, CarTaxiFront } from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            icon: <MapPin size={70} className="text-[#fdb813]" />,
            title: "Address Pickup",
            desc: "We always pick up our clients on time. 24/7 availability.",
        },
        {
            icon: <Plane size={70} className="text-[#fdb813]" />,
            title: "Airport Transfer",
            desc: "GetCab specialized in 24 hours airport transfer service.",
        },
        {
            icon: <Map size={70} className="text-[#fdb813]" />,
            title: "Long Distance",
            desc: "We offer you a long distance taxi service to anywhere.",
        },
        {
            icon: <CarTaxiFront size={70} className="text-[#fdb813]" />,
            title: "Taxi Tours",
            desc: "We offer taxi tours of various durations and complexity.",
        },
    ];

    return (
        <section className="py-40 bg-white text-center px-4 text-[#1A1919]">
            <p className="text-[#fdb813] font-semibold uppercase mb-2 tracking-widest">What We Offer</p>
            <h2 className="text-[40px] lg:text-[57px] font-bold mb-4">Welcome To Us</h2>
            <p className="text-[14px] lg:text-[16px] max-w-2xl mx-auto mb-10">
                We created our taxi to help you find the most dependable and highest quality taxi services, anytime and anywhere. All our drivers are uniformed and fully licensed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center space-y-3">
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
