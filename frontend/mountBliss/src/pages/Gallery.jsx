<<<<<<< HEAD





import Navbar from '../components/Navbar';
import image1 from '../assets/gallery/gallery1.jpg';
import image2 from '../assets/gallery/gallery2.jpg';
import image3 from '../assets/gallery/gallery3.jpg';
=======
<<<<<<< Updated upstream
import React from 'react'
>>>>>>> d9d4deec7addec23ffa0cff4172f15f5158cde4a

const Gallery = () => {
  
   
   

<<<<<<< HEAD
  const images = [

    {
      src:{image1},
      thumb: {image1},
=======
export default Gallery
=======
import Navbar from '../components/Navbar';
import image1 from '../assets/gallery/gallery1.jpg';
import image2 from '../assets/gallery/gallery2.jpg';
import image3 from '../assets/gallery/gallery3.jpg';

const Gallery = () => {
  const images = [
    {
      src: image1,
>>>>>>> d9d4deec7addec23ffa0cff4172f15f5158cde4a
      title: 'Mountain View',
      description: 'Serene snow-covered peaks under the Himalayan sky.',
    },
    {
<<<<<<< HEAD
      src: {image2},
      thumb: {image2},
=======
      src: image2,
>>>>>>> d9d4deec7addec23ffa0cff4172f15f5158cde4a
      title: 'Cozy Room',
      description: 'Elegant eco-luxury interior with a view.',
    },
    {
<<<<<<< HEAD
      src:{image3},
      thumb: {image3},
      title: 'Dining Area',
      description: 'Fine Himalayan cuisine served with style.',
    },
  ];



  return (
    <div>
      <Navbar />
      {/* Gallery Section */}
      <main className=" min-h-screen py-16 px-4 md:px-10 max-w-7xl mx-auto">
        <h1 style={{ textAlign: 'center' }}>Mount Bliss Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         <img src={image1} alt="image1" />
         <img src={image2} alt="image2" />
         <img src={image3} alt="image3" />


        </div>


        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a href="index.html#contact" className="inline-block bg-teal-500 text-black font-semibold px-6 py-3 rounded hover:bg-teal-400 transition shadow-lg">
=======
      src: image3,
      title: 'Dining Area',
      description: 'Fine Himalayan cuisine served with style.',
    },
    {
      src: image1,
      title: 'Another Mountain',
      description: 'Nature at its best.',
    },
    {
      src: image2,
      title: 'Comfort Room',
      description: 'Feel the luxury.',
    },
    {
      src: image3,
      title: 'Himalayan Dish',
      description: 'Taste of the mountains.',
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="pt-30 min-h-screen py-16 px-4 md:px-10 max-w-7xl mx-auto">
        <h1 className="text-white text-3xl font-bold text-center mb-10">Mount Bliss Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="w-full h-64 overflow-hidden rounded-lg shadow-md">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/" className="inline-block bg-teal-500 text-black font-semibold px-6 py-3 rounded hover:bg-teal-400 transition shadow-lg">
>>>>>>> d9d4deec7addec23ffa0cff4172f15f5158cde4a
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> d9d4deec7addec23ffa0cff4172f15f5158cde4a
