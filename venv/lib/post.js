// lib/posts.js

export function getAllPostIds() {
  const posts = [
    { id: '1', title: 'Post 1', content: 'Content of Post 1' },
    { id: '2', title: 'Post 2', content: 'Content of Post 2' },
    // Add more posts as needed
  ];

  // Returns an array like [{ params: { id: '1' } }, { params: { id: '2' } }]
  return posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
}

export function getPostById(id) {
  const posts = [
    { id: '1', title: 'Post 1', content: 'Content of Post 1' },
    { id: '2', title: 'Post 2', content: 'Content of Post 2' },
    // Add more posts as needed
  ];

  // Finds the post with the matching id
  return posts.find((post) => post.id.toString() === id);
}
