/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getVideoSearch } from '../actions';
import '../assets/styles/components/search/_search.scss';

function Search(props) {

  const { isHome, getVideoSearch } = props;

  const inputStyle = classNames('input', {
    isHome,
  });

  const handleInput = (event) => {
    getVideoSearch(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder='Buscar...'
        onKeyUp={handleInput}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
  };
};

const mapDispatchToProps = {
  getVideoSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
