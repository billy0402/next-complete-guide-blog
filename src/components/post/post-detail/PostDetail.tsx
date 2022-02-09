import ReactMarkdown from 'react-markdown';

import { Post } from '@models/post';
import PostHeader from './PostHeader';

type Props = {
  post: Post;
};

const PostDetail = ({ post }: Props) => {
  return (
    <article className='post-detail'>
      <PostHeader {...post} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostDetail;
