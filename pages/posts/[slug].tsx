import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../../components/container";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import type PostType from "../../interfaces/post";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import ReactMarkdown from "react-markdown";
import Script from "next/script";
import Navbar from "../../components/navbar";

type Props = {
  post: PostType;
  morePosts: PostType[];
};

export default function Post({ post }: Props) {
  const router = useRouter();
  const title = `${post.title}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Navbar />
      <Container>
        <>
          <Head>
            <title>{title}</title>
          </Head>

          <article className="prose dark:prose-invert lg:prose-xl mx-auto md:max-w-3xl lg:max-w-4xl">
            <ReactMarkdown>{post.content}</ReactMarkdown>
            <Script
              type="module"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                import mermaid from "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs";
                mermaid.initialize({startOnLoad: false, theme: 'dark'});
                      await mermaid.run({
                        querySelector: '.language-mermaid',
                        
                      });
                    `,
              }}
            />
          </article>
        </>
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  // const content = (
  //   await remark()
  //     .use(html)
  //     .process(post.content || "")
  // ).toString();

  return {
    props: {
      post: {
        ...post,
        //content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
