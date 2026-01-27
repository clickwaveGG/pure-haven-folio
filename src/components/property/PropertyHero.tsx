import { motion } from "framer-motion";
import { Play, Camera } from "lucide-react";

interface PropertyHeroProps {
  image: string;
  title: string;
  imageCount?: number;
}

const PropertyHero = ({ image, title, imageCount = 18 }: PropertyHeroProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative h-[50vh] md:h-[65vh] lg:h-[70vh] w-full"
    >
      {/* Main Image Grid */}
      <div className="h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 p-2">
        {/* Main Image */}
        <div className="relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Virtual Tour Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm text-foreground text-sm font-medium rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <Play size={16} className="fill-primary text-primary" />
            Tour Virtual 3D
          </motion.button>
        </div>

        {/* Secondary Images */}
        <div className="hidden md:block relative rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={`${title} - Vista 2`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="hidden md:block relative rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={`${title} - Vista 3`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="hidden md:block relative rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={`${title} - Vista 4`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="hidden md:block relative rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src={image}
            alt={`${title} - Vista 5`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="flex items-center gap-2 text-white font-medium">
              <Camera size={18} />
              + {imageCount} Fotos
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PropertyHero;
