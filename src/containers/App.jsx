/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable array-callback-return */
import React from 'react';

import '../assets/styles/App.scss';
import '../assets/styles/Media.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarousuelItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h1> Loading... </h1> : (
    <>
      <Header />
      <Search />
      {
        Object.keys(initialState).map((category) => {
          if (initialState[category].length) {
            return (
              <Categories key={category} title={category}>
                <Carousel>
                  {initialState[category].map((item) => <CarouselItem key={item.id} {...item} />)}
                </Carousel>
              </Categories>
            );
          }
        })
      }
      <Footer />
    </>
  );
};

export default App;
