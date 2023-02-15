import { Fragment } from 'react';
import Head from 'next/head';

import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.postData.title}</title>
        <meta name="description" content={props.postData.excerpt} />
      </Head>
      <PostContent post={props.postData} />
    </Fragment>
  );
}

export default PostDetailPage;

export function getStaticProps(context) {
  const { slug } = context.params;
  const postData = getPostData(slug);

  return {
    props: {
      postData
    },
    revalidate: 600
  };
}

export function getStaticPaths() {
  const postsFilenames = getPostsFiles();
  const slugs = postsFilenames.map((fileName) => 
    fileName.replace(/\.md$/, '')
  );
  const paths = slugs.map(slug => ({ params: { slug: slug } }));

  return {
    paths: paths, 
    fallback: false
  };
}
