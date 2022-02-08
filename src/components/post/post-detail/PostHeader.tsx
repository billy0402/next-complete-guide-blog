import Image from 'next/image';

import { Post } from '@models/post';

type Props = Pick<Post, 'title' | 'image' | 'slug'>;

const PostHeader = ({ title, image, slug }: Props) => {
  return (
    <header className='post-header'>
      <h1>{title}</h1>
      <Image
        src={`/images/post/${slug}/${image}`}
        alt={title}
        width={200}
        height={150}
      />
    </header>
  );
};

export default PostHeader;
