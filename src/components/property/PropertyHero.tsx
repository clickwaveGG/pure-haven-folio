import { motion } from "framer-motion";
import { Camera } from "lucide-react";

interface PropertyHeroProps {
  image: string;
  images?: string[];
  title: string;
  imageCount?: number;
}

const PropertyHero = ({ image, images, title, imageCount }: PropertyHeroProps) => {
  // Use the images array if provided, otherwise fall back to repeating the single image
  const displayImages = images && images.length > 0 ? images : [image];
  const totalImages = imageCount ?? displayImages.length;
  
  // For the grid, we need up to 3 images (1 main + 2 secondary)
  const mainImage = displayImages[0];
  const secondaryImages = displayImages.slice(1, 3);
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[calc(50vh+3rem)] md:min-h-[calc(65vh+3.5rem)] lg:min-h-[calc(70vh+3.5rem)] w-full pt-12 md:pt-14"
    >
      {/* Main Image Grid - Adjusted for 3 images */}
      <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
        {/* Main Image - Takes 2/3 of the space */}
        <div className="relative md:col-span-2 rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Secondary Images Column */}
        <div className="hidden md:flex flex-col gap-2">
          {secondaryImages.map((img, index) => (
            <div 
              key={index} 
              className={`relative flex-1 rounded-2xl overflow-hidden group cursor-pointer ${
                index === secondaryImages.length - 1 && totalImages > displayImages.length ? '' : ''
              }`}
            >
              <img
                src={img}
                alt={`${title} - Vista ${index + 2}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Show "more photos" overlay on the last image if there are more */}
              {index === secondaryImages.length - 1 && totalImages > 3 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-white font-medium">
                    <Camera size={18} />
                    + {totalImages - 3} Fotos
                  </span>
                </div>
              )}
            </div>
          ))}
          
          {/* If only 1 secondary image, show placeholder or repeat for balance */}
          {secondaryImages.length === 1 && (
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
              <span className="flex items-center gap-2 text-muted-foreground font-medium">
                <Camera size={18} />
                {totalImages} Fotos
              </span>
            </div>
          )}
          
          {/* If no secondary images, show photo count */}
          {secondaryImages.length === 0 && (
            <>
              <div className="relative flex-1 rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                <span className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Camera size={18} />
                  {totalImages} Foto{totalImages !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden bg-muted" />
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default PropertyHero;
