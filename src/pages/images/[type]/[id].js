import { Head, Image } from "@next";
import { useRouter } from "next/router";
import { Layout } from "components";
import logos from "images/posts";

const ImageBackground = () => {
  const router = useRouter();
  const { type, id } = router.query;

  if (!id) return `loading`;

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
};

export default ImageBackground;
