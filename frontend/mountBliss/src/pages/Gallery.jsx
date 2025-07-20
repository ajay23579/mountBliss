import { useEffect } from 'react';

import AOS from 'aos';
import GLightbox from 'glightbox';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';

const Gallery = () => {
  
   
   

  const images = [

    {
      src: '../assets/gallery/gallery1.jpg',
      thumb: '../assets/gallery/gallery1-thumb.jpg',
      title: 'Mountain View',
      description: 'Serene snow-covered peaks under the Himalayan sky.',
    },
    {
      src: '../assets/gallery/gallery2.jpg',
      thumb: '../assets/gallery/gallery2-thumb.jpg',
      title: 'Cozy Room',
      description: 'Elegant eco-luxury interior with a view.',
    },
    {
      src: '../assets/gallery/gallery3.jpg',
      thumb: '../assets/gallery/gallery3-thumb.jpg',
      title: 'Dining Area',
      description: 'Fine Himalayan cuisine served with style.',
    },
  ];



  return (
    <div>
      
      {/* Gallery Section */}
      <main className="mt-20 min-h-screen py-16 px-4 md:px-10 max-w-7xl mx-auto">
        <h1 style={{ textAlign: 'center' }}>Mount Bliss Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <a
              key={i}
              href={img.src}
              className="glightbox"
              data-glightbox={`title: ${img.title}; description: ${img.description}`}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <img
                src={img.thumb}
                alt={img.title}
                className="rounded-xl shadow-lg hover:scale-105 transition duration-300 object-cover w-full h-64"
              />
            </a>
          ))}
        </div>


        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a href="index.html#contact" className="inline-block bg-teal-500 text-black font-semibold px-6 py-3 rounded hover:bg-teal-400 transition shadow-lg">
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
