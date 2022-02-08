import { NextPage } from 'next';

import AllPosts from '@components/post/AllPosts';
import { DUMMY_POSTS } from '@fixtures/posts';

const AllPostsPage: NextPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
