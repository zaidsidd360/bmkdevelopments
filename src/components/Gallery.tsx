import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
	images: string[];
	title?: string;
}

const Gallery = ({ images, title }: GalleryProps) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isOpen) return;

			if (e.key === "Escape") setIsOpen(false);
			if (e.key === "ArrowLeft") handlePrevious();
			if (e.key === "ArrowRight") handleNext();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, selectedIndex]);

	const handlePrevious = (
		e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (selectedIndex === null) return;
		setSelectedIndex(
			selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
		);
		e?.stopPropagation();
	};

	const handleNext = (
		e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (selectedIndex === null) return;
		setSelectedIndex(
			selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
		);
		e?.stopPropagation();
	};

	return (
		<section className="bg-[#0d83ed]/5 py-8 sm:py-12 md:py-16 lg:py-24">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12"
				>
					{title ? `${title}` : "Our "} Gallery
				</motion.h2>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
					{images.map((image, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="relative group aspect-square rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
						>
							<img
								src={image}
								alt={`Gallery Image ${index + 1}`}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
								<button
									onClick={() => {
										setSelectedIndex(index);
										setIsOpen(true);
									}}
									className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors border border-white/10"
								>
									<Expand className="w-5 h-5 text-white" />
								</button>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Fullscreen Modal */}
			<AnimatePresence>
				{isOpen && selectedIndex !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsOpen(false)}
						className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
					>
						<motion.div
							className="relative w-full h-full flex items-center justify-center p-4"
							// onClick={(e) => e.stopPropagation()}
						>
							<div className="relative max-w-[90vw] max-h-[90vh]">
								<button
									onClick={() => setIsOpen(false)}
									className="absolute -top-12 right-0 p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors border border-white/10"
								>
									<X className="w-6 h-6 text-white" />
								</button>

								<div className="relative">
									<motion.img
										onClick={(e) => e.stopPropagation()}
										key={selectedIndex}
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										src={images[selectedIndex]}
										alt={`Gallery Image ${
											selectedIndex + 1
										}`}
										className="max-w-full max-h-[80vh] object-contain rounded-lg"
									/>

									<button
										onClick={(e) => handlePrevious(e)}
										className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors border border-white/10"
									>
										<ChevronLeft className="w-6 h-6 text-white" />
									</button>

									<button
										onClick={(e) => handleNext(e)}
										className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors border border-white/10"
									>
										<ChevronRight className="w-6 h-6 text-white" />
									</button>
								</div>

								<div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#0d83ed] backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
									<p className="text-white font-medium">
										{selectedIndex + 1} of {images.length}
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Gallery;
