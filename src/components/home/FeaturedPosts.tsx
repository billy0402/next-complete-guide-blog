import PostGrid from '@components/post/PostGrid';
import { Post } from '@models/post';

type Props = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: Props) => {
  return (
    <section className='featured-posts'>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
