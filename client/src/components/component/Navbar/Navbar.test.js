import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navbar from './Navbar';

configure({adapter: new Adapter()});

describe('<Navbar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Navbar />)
  })

  it('Deberia renderizar cuatro <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(4);
  });
  it('El primer Link debe tener el texto "Home" y cambiar la ruta hacia "/home".', () => {
    //el orden donde declaran los Links es importante
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/home');
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(0).text()).toEqual('Home');
  });
  it('El segundo Link debe tener el texto "NewPokemon" y cambiar la ruta hacia "/newPoke"', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/newPoke');
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(1).text()).toEqual('NewPokemon');
  });
  it('El segundo Link debe tener el texto "Filter" y cambiar la ruta hacia "/home/filter"', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home/filter');
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(1).text()).toEqual('Filter');
  });
  it('El segundo Link debe tener el texto "Search" y cambiar la ruta hacia "/search"', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/search');
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(1).text()).toEqual('Search');
  });
})


