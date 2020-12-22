/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';

import '../assets/styles/App.scss';
import '../assets/styles/Media.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarousuelItem';
import Footer from '../components/Footer';

const App = () => {

  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header />
      <Search />
      <Categories title='Mi lista'>
        <Carousel>
          {videos.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Tendencias'>
        <Carousel>
          {videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Oriiginales de PLatzifix'>
        <Carousel>
          {videos.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Footer />
    </>
  );
};

export default App;
