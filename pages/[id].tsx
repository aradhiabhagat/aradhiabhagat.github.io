// pages/posts/[id].js

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostById, getAllPostIds } from '../venv/lib/posts.js'; // Adjust the path to your data fetching functions

const PostPage = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;

// getStaticPaths defines the dynamic routes based on the fetched data
export async function getStaticPaths() {
  const paths = getAllPostIds(); // This should return an array of objects with 'params' key

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps fetches the data for each dynamic route
export async function getStaticProps({ params }) {
  const post = getPostById(params.id); // Fetch the post data based on the id

  return {
    props: {
      post,
    },
  };
}
