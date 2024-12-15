import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "assets/img/image1.jpg",
    alt: "Scholar Merchandise",
    title: "Scholar Merchandise",
    description: "Receiving scholar merchandise as part of the program"
  },
  {
    src: "assets/img/image2.jpg",
    alt: "NIIT Training",
    title: "NIIT Industrial Training Batch 2024",
    description: "Group photo with fellow trainees at NIIT"
  },
  {
    src: "assets/img/image3.jpg",
    alt: "Anti-Ragging Ceremony",
    title: "Anti-Ragging Ceremony",
    description: "Participating in the anti-ragging awareness program"
  },
  {
    src: "assets/img/image4.jpg",
    alt: "RF Scholarship",
    title: "Selection Letter of RF Scholarship",
    description: "Proud moment of receiving the Reliance Foundation Scholarship"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">Gallery</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <button
              key={item.src}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-full items-center justify-center">
                  <p className="text-lg font-medium text-white">{item.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-lg bg-white dark:bg-gray-800">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[70vh] w-full object-contain"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}