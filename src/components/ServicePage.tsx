import { motion } from "framer-motion";
import { Award, Clock, Shield, Drill } from "lucide-react";
import Gallery from "./Gallery";

interface ServicePageProps {
	mainImg: string;
	title: string;
	description: {
		para1: string;
		para2: string;
		para3: string;
	};
	tagline: string;
	gallery: string[];
}

const ServicePage = ({
	mainImg,
	title,
	description,
	tagline,
	gallery,
}: ServicePageProps) => {
	const whyChooseUsItems = [
		{
			icon: <Award className="w-6 h-6" />,
			title: "Free Quotation",
			description:
				"We provide you with a detailed, no-obligation free quote for your project",
		},
		{
			icon: <Shield className="w-6 h-6" />,
			title: "Licensed & Insured",
			description:
				"All necessary licenses, qualifications & insurances to undertake your project",
		},
		{
			icon: <Drill className="w-6 h-6" />,
			title: "Expert Team",
			description:
				"Network of qualified tradesmen with over 50 years combined experience",
		},
		{
			icon: <Clock className="w-6 h-6" />,
			title: "Project Management",
			description:
				"Comprehensive project management ensuring timely completion",
		},
	];

	return (
		<div className="mt-20 md:mt-24">
			{/* Hero Section */}
			<section className="relative">
				{/* Background Image */}
				<div className="h-[40vh] md:h-[calc(100vh-6rem)] relative">
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						src={mainImg} // Using first image as hero
						alt={title}
						className="w-full h-full object-cover"
					/>
					{/* <div className="absolute inset-0 bg-black/50" /> */}
				</div>

				{/* Content Box */}
				<div className="container mx-auto md:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="relative md:absolute md:top-1/2 md:transform md:-translate-y-1/2 bg-white/70 backdrop-blur-md rounded-b-none md:rounded-b-3xl rounded-3xl md:shadow-xl p-6 md:p-8 md:max-w-2xl mt-[-2rem] md:mt-0 border border-white/20"
					>
						<h1 className="text-3xl md:text-4xl font-bold mb-4">
							{title}
						</h1>
						<div className="space-y-4 text-gray-600">
							<p>{description.para1}</p>
							<p>{description.para2}</p>
							<p>{description.para3}</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Tagline Section */}
			<section className="bg-[#0d83ed]/5 py-16 md:py-24">
				<div className="container mx-auto px-4 md:px-8">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto"
					>
						{tagline}
					</motion.h2>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4 md:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Why Choose Us?
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							At BMK Developments, we pride ourselves on
							delivering excellence in every project.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{whyChooseUsItems.map((item, index) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<div className="bg-[#0d83ed]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
									<div className="text-[#0d83ed]">
										{item.icon}
									</div>
								</div>
								<h3 className="text-xl font-semibold mb-2">
									{item.title}
								</h3>
								<p className="text-gray-600">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<Gallery images={gallery} title={title} />
		</div>
	);
};

export default ServicePage;
