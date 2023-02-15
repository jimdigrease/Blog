import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import styles from './PostContent.module.css';
import PostHeader from './PostHeader';

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  // Custom renderers here is for <ReactMarkdown> to not load usual image-element, 
  // but instead <Image /> that can prepare image in .md to lazy-loading and styling.
  // Using renderers in <ReactMarkdown> is broken until 6.0.0 version. Could rename 
  // customRenderers to customComponents... In older version also used 'image'-method.
  // Also could replace paragraph with a div to not placing image and styled <span>
  // into <p> but in <div> instead
  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image 
    //       src={`/images/posts/${post.slug}/${image.src}`} 
    //       alt={image.alt} 
    //       width={600} 
    //       height={300}
    //     />
    //   )
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    }
  };

  // Here is the variant for older version of React-Markdown, where is a trick to 
  // avoid warnings that some divs placed into paragraphs. To solve it, comment or 
  // delete image()-method and replace it with paragraph-method. In newest version 
  // no such problem probably because it was fixed and image appears not in some 
  // styled-divs but in styled-spans and this warning is gone. Also above newest 
  // version of this replacing paragraph on div.
  /* const customRenderers = {
    // image(image) {
    //   return (
    //     <Image 
    //       src={`/images/posts/${post.slug}/${image.src}`} 
    //       alt={image.alt} 
    //       width={600} 
    //       height={300}
    //     />
    //   )
    // }
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { language, children } = code;
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    }
  };*/

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
