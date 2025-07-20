




import Navbar from '../components/Navbar';
import image1 from '../assets/gallery/gallery1.jpg';
import image2 from '../assets/gallery/gallery2.jpg';
import image3 from '../assets/gallery/gallery3.jpg';

const Gallery = () => {
  
   
   

  const images = [

    {
      src:{image1},
      thumb: {image1},
      title: 'Mountain View',
      description: 'Serene snow-covered peaks under the Himalayan sky.',
    },
    {
      src: {image2},
      thumb: {image2},
      title: 'Cozy Room',
      description: 'Elegant eco-luxury interior with a view.',
    },
    {
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
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
