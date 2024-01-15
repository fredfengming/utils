import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import ReactMarkdown from "react-markdown";
import { getPost, getPosts } from "../../app/post";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import { Post } from "../../entities/post";

export default function PostPage({ post }: { post: Post }) {
  const router = useRouter();
  const title = `${post.title}`;
  if (!router.isFallback && !post?.path) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Header />
      <Nav />
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

export async function getStaticProps(context: {
  params: {
    slug: string[];
  };
}) {
  const file = context.params.slug.join("/") + ".md";
  const post = getPost(file);
  return {
    props: {
      post,
    },
  };
}

/**
 * For NextJs static render
 * https://nextjs.org/docs/pages/api-reference/functions/get-static-paths
 */
export async function getStaticPaths() {
  const posts = getPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.path.split("/"),
        },
      };
    }),
    fallback: false,
  };
}
