import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

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
      <Head>
        <title>Billy&apos;s Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
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
