import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@models/post';

type Props = Post;

const PostItem = ({ title, excerpt, image, date, slug }: Props) => {
  const formatDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className='post-item'>
      <Link href={`/post/${slug}`}>
        <a>
          <div className='post-item__image'>
            <Image
              src={`/images/post/${slug}/${image}`}
              alt={title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className='post-item__content'>
            <h3>{title}</h3>
            <time>{formatDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
