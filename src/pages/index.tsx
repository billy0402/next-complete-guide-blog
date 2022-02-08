import type { NextPage } from 'next';

import FeaturedPosts from '@components/home/FeaturedPosts';
import Hero from '@components/home/Hero';

const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
};

export default HomePage;
