import { Fragment } from 'react';
import Head from 'next/head';

// <Hero /> is slang word of a welcome section, where presents main 
// product or Person in the case of blog
import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/FeauturedPosts';
import { getFeaturedPosts } from '../helpers/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Jim's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts} />
    </Fragment>
  );
}

export default HomePage;

// Using 'revalidate' here doesn't have sense, because all data is 
// in the project folder and after adding a new data or updating 
// existing md-file, it needs to redeploy anyways.
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts
    }
  };
}
