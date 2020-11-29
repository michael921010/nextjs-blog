import { Head, Image } from "@next";
import { Layout } from "components";
import logos from "images/posts";

export default function ImageBackground({ id, type }) {
  return (
    <Layout>
      <Head>
        <title>{id.toUpperCase()}</title>
      </Head>
      <Image
        alt={id}
        src={logos[id]}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </Layout>
  );
}

ImageBackground.getInitialProps = (ctx) => {
  return { id: ctx.query?.id, type: ctx.query?.type };
};
