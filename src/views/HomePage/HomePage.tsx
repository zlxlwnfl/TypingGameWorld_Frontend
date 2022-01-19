import React from 'react';

import Header from '../../components/Header/Header';
import MainImageLayout from '../../components/MainImageLayout/MainImageLayout'

const backgroundImage = '/img/main_image.jpg';

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <MainImageLayout sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: 'yellow',
        backgroundPosition: 'center',
      }} />
        Homepage
    </React.Fragment>
  );
}

export default HomePage;
