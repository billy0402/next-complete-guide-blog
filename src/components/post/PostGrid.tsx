import { Post } from '@models/post';
import PostItem from './PostItem';

type Props = {
  posts: Post[];
};

const PostGrid = ({ posts }: Props) => {
  return (
    <ul className='post-grid'>
      {posts.map((post) => (
        <PostItem key={post.id} />
      ))}
    </ul>
  );
};

export default PostGrid;
