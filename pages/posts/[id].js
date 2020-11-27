import { Head } from "@next";
import { Layout, Date } from "components";
import { getAllPostIds, getPostData } from "lib/posts";
import styles from "styles/post.module.scss";
import logos from "public/images/posts";

export default function Post({ postData }) {
  return (
    <Layout
      logo={logos[postData.id]}
      id={postData}
      href={{
        pathname: "/images/[type]/[id]",
        query: { type: "posts", id: postData.id },
      }}
    >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={styles.title}>{postData.title}</h1>
        <div className={styles.text}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
