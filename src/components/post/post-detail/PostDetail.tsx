import { DUMMY_POST } from '@fixtures/posts';
import PostHeader from './PostHeader';

const PostDetail = () => {
  const post = DUMMY_POST;

  return (
    <article className='post-detail'>
      <PostHeader {...post} />
      {post.content}
    </article>
  );
};

export default PostDetail;
