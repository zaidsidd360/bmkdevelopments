import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingContact: React.FC = () => {
	return (
		<Link to="tel:0460-006-007">
			<button
				className="fixed bottom-6 right-6 z-50 bg-[#0d83ed]/80 backdrop-blur-2xl text-white rounded-full p-3 shadow-lg border border-white/20"
				aria-label="Scroll to top"
			>
				<Phone size={24} className="animate-pulse" />
			</button>
		</Link>
	);
};

export default FloatingContact;