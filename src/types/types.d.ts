interface Post {
    excerpt: string
    timeToRead: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
    }
    fields: {
      slug: string;
    }
  }
