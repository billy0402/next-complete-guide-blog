import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import AllPosts from '@components/post/AllPosts';
import { getAllPosts } from '@helpers/post';
import { Post } from '@models/post';

type Props = {
  posts: Post[];
};

const AllPostsPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
