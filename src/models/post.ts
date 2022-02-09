type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  slug: string;
  isFeatured: boolean;
};

type PostTag = Pick<
  Post,
  'title' | 'excerpt' | 'image' | 'date' | 'isFeatured'
>;

export type { Post, PostTag };
