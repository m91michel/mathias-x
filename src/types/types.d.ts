// types.d.ts
interface Post {
    excerpt: string
    timeToRead?: string;
    id?: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
    }
    fields: {
      slug: string;
    }
  }
