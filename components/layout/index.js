import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.scss";
import utilStyles from "styles/utils.module.scss";
import Link from "next/link";
import c from "classnames";

const name = "Michael Li";
export const siteTitle = "Michael's Blog";

export default function Layout({ children, home, id, logo }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/avatar.png"
              className={c(styles.headerHomeImage, utilStyles.borderCircle)}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  alt={id}
                  src={logo}
                  layout="intrinsic"
                  width={700}
                  height={475}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
