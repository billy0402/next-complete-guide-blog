import type { NextPage } from 'next';

import FeaturedPosts from '@components/home/FeaturedPosts';
import Hero from '@components/home/Hero';
import { DUMMY_POSTS } from '@fixtures/posts';

const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
