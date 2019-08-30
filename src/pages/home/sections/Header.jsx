import React from 'react';
import HeaderLinks from 'components/Header/HeaderLinks';

const Header = () => {
  return (
    <Header
      brand='Coliving'
      links={<HeaderLinks dropdownHoverColor='primary' />}
      fixed
      color='transparent'
      changeColorOnScroll={{
        height: 400,
        color: 'primary',
      }}
    />
  );
};

export default Header;
