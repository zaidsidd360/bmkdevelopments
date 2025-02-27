import { Link } from "react-router-dom";
import WhatsApp from "../assets/whatsapp-color.svg";

const FloatingWhatsapp: React.FC = () => {
	const phoneNumber = "+61404442562";
  
	// Construct the WhatsApp chat URL
	const whatsappLink = `https://wa.me/${phoneNumber}`;

	return (
		<Link to={whatsappLink}>
			<button
				className="fixed w-12 h-12 grid place-items-center bottom-6 left-6 z-50 bg-gray-900/90 backdrop-blur-2xl text-white rounded-full p-2 shadow-lg border border-white/20"
				aria-label="Scroll to top"
			>
				<img src={WhatsApp} className="w-6 h-6" alt="Whatsapp" />
			</button>
		</Link>
	);
};

export default FloatingWhatsapp;