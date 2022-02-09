import Image from 'next/image';

import ReactMarkdown, { Components } from 'react-markdown';

import { Post } from '@models/post';
import PostHeader from './PostHeader';

type Props = {
  post: Post;
};

const PostDetail = ({ post }: Props) => {
  const customComponents: Components = {
    p: ({ node, children }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const nodeFirstChild: any = node.children[0];
      if (nodeFirstChild.tagName === 'img') {
        const image = nodeFirstChild;
        return (
          <div className='post-detail__image'>
            <Image
              src={`/images/post/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{children}</p>;
    },
  };

  return (
    <article className='post-detail'>
      <PostHeader {...post} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostDetail;
