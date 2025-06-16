import { Phone } from 'lucide-react';

const Header = () => {
    const whatsappNumber = "46735735005"; // Swedish number in international format (without + or spaces)

    return (
        <div className="bg-[#fdb813] w-full h-12 text-white text-sm">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-end gap-6">
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-black hover:text-green-700 transition"
                >
                    <Phone size={16} strokeWidth={2} />
                    <span className='text-[22px]'>+0735 735 005</span>
                </a>
            </div>
        </div>
    );
};

export default Header;
