import Image from 'next/image';

import ReactMarkdown, { Components } from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import { Post } from '@models/post';
import PostHeader from './PostHeader';

SyntaxHighlighter.registerLanguage('js', js);

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
    code: ({ className, children }) => {
      const language = (className as string).replace('language-', '');
      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {children}
        </SyntaxHighlighter>
      );
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
