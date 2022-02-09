import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import PostDetail from '@components/post/post-detail/PostDetail';
import { getPostData, getPostFileNames } from '@helpers/post';
import { Post } from '@models/post';

type Props = {
  post: Post;
};

const PostDetailPage: NextPage<Props> = ({ post }) => {
  return <PostDetail post={post} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFileNames = getPostFileNames();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
