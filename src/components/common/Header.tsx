import { Phone } from 'lucide-react';

const Header = () => {
    return (
        <div className="bg-[#222222] w-full h-10 text-white text-sm">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-end gap-6">
                <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>+0735 735 005</span>
                </div>
                {/* <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>+46 73 123 45 67</span>
                </div> */}
            </div>
        </div>
    );
};

export default Header;
