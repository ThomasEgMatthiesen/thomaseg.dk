import { useState } from 'react';
import Portfolio from './Portfolio';
import Bookshelf from './Bookshelf/Bookshelf';
import TitleBox from './Landing/TitleBox';
import FilmReel from './Landing/FilmReel';
import profileImage from '../assets/images/profile.jpeg';

function LandingPage() {
  const [image, setImage] = useState(profileImage);

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center py-20">
        <div className="relative flex flex-col items-center mt-10 lg:mt-0">
          <img src={image} alt="" className="w-full sm:w-96 border-2 border-black" />
          <TitleBox />
        </div>
        <FilmReel onImageHover={handleImageChange} />
      </section>
      <Portfolio />
      <Bookshelf />
    </main>
  );
}

export default LandingPage;
