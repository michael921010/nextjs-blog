import { Head, Link } from "@next";
import { Date, Layout } from "components";
import { siteTitle } from "components/layout";
import styles from "styles/root.module.scss";
import { getSortedPostsData } from "lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.section}>
        <h2 className={styles.title}>Self Introduction</h2>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.item} key={id}>
              <Link href={{ pathname: "/posts/[id]", query: { id } }}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={styles.text}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
