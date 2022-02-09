import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { Post, PostTag } from '@models/post';

const postDirectory = path.join(process.cwd(), 'src/fixtures/post');

const toPostData = (fileName: string) => {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // remove the filename extension
  const postSlug = fileName.replace(/\.md$/, '');

  const postData: Post = {
    ...(data as PostTag),
    content,
    slug: postSlug,
    id: Math.random().toString(),
  };

  return postData;
};

const getAllPosts = () => {
  const postFiles = fs.readdirSync(postDirectory);
  const allPosts = postFiles.map((postFile) => toPostData(postFile));
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );
  return sortedPosts;
};

const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};

export { getAllPosts, getFeaturedPosts };
