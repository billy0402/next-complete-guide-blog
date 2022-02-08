import { Post } from '@models/post';

const DUMMY_POST: Post = {
  id: 'd1',
  title: 'Getting Started with NextJS',
  content: '# This is a first post',
  excerpt:
    'Next.js is the React Framework for Production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
  image: 'getting-started-with-nextjs.png',
  date: '2022-02-10',
  slug: 'getting-started-with-nextjs',
};

const DUMMY_POSTS: Post[] = new Array(4)
  .fill(DUMMY_POST)
  .map((post, index) => ({
    ...post,
    id: `d${index}`,
  }));

export { DUMMY_POST, DUMMY_POSTS };
