import Head from 'next/head';
import { Fragment } from 'react';

import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../helpers/posts-util';

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export default AllPostsPage;

// Using 'revalidate' here doesn't have sense, because all data is 
// in the project folder and after adding a new data or updating 
// existing md-file, it needs to redeploy anyways.
export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  };
}
