import type { GetStaticProps, NextPage } from 'next';

import AllPosts from '@components/post/AllPosts';
import { getAllPosts } from '@helpers/post';
import { Post } from '@models/post';

type Props = {
  posts: Post[];
};

const AllPostsPage: NextPage<Props> = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
