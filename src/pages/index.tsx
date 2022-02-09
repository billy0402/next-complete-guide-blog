import type { GetStaticProps, NextPage } from 'next';

import FeaturedPosts from '@components/home/FeaturedPosts';
import Hero from '@components/home/Hero';
import { getFeaturedPosts } from '@helpers/post';
import { Post } from '@models/post';

type Props = {
  posts: Post[];
};

const HomePage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
