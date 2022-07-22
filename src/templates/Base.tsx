import { useAddress } from '@thirdweb-dev/react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Nav } from './Nav';
import { Profile } from './Profile';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  const address = useAddress();
  if (address) {
    return (
      <div className="antialiased text-gray-600">
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Nav />
        <Profile />
        <Footer />
      </div>
    );
  }

  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Nav />
      <Hero />
      <VerticalFeatures />
      <Footer />
    </div>
  );
};

export { Base };
