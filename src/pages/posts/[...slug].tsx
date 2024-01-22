import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { appConfig } from "../../app/app.config";
import { getPost, getPosts } from "../../app/post";
import { LinkItem } from "../../components/link-list";
import SidebarLayout from "../../components/sidebar-layout";
import { Post } from "../../entities/post";

type Props = {
  post: Post;
  recentPostLinks: LinkItem[];
  utilLinks: LinkItem[];
};

export default function PostPage({ post, utilLinks, recentPostLinks }: Props) {
  const router = useRouter();
  const title = `${post.title}`;
  if (!router.isFallback && !post?.path) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>
          {title} - {appConfig.siteName}
        </title>
      </Head>

      <SidebarLayout recentPostLinks={recentPostLinks} utilLinks={utilLinks}>
        <article className="prose dark:prose-invert lg:prose-xl">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
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
      </SidebarLayout>
    </>
  );
}

type Context = {
  params: {
    slug: string[];
  };
};
export async function getStaticProps({
  params,
}: Context): Promise<{ props: Props }> {
  const posts = getPosts();

  const recentPostLinks = posts.slice(0, 10).map((item) => {
    return {
      text: item.title,
      href: `/posts/${item.path}`,
    };
  });

  const utilLinks = [
    { text: "Docker Command Builder", href: "/tools/docker" },
    { text: "Kubectl Command Builder", href: "/tools/kubectl" },
  ];

  const file = params.slug.join("/") + ".md";
  const post = getPost(file);
  return {
    props: {
      post,
      recentPostLinks,
      utilLinks,
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
