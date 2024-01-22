import Head from "next/head";
import { appConfig } from "../app/app.config";
import { getPosts } from "../app/post";
import { LinkItem } from "../components/link-list";
import PostPreview from "../components/post-preview";
import SidebarLayout from "../components/sidebar-layout";
import { Post } from "../entities/post";

const Greeting = () => {
  return (
    <>
      <article className="prose dark:prose-invert lg:prose-xl">
        <h1>Thanks for visiting</h1>
        <div>
          <p>
            This wiki site is a collection of my personal learning notes and
            some utility tools. It is under slow construction but you are
            welcome to check out existing resources.
          </p>

          <p>I hope this helps!</p>
        </div>
      </article>
    </>
  );
};

export default function Index({
  posts,
  recentPostLinks,
  utilLinks,
}: {
  posts: Post[];
  recentPostLinks: LinkItem[];
  utilLinks: LinkItem[];
}) {
  return (
    <>
      <Head>
        <title>{appConfig.siteName}</title>
      </Head>

      <SidebarLayout recentPostLinks={recentPostLinks} utilLinks={utilLinks}>
        <Greeting />

        {posts.length > 0 && (
          <section>
            <h1 className="mb-8 text-5xl font-bold">Recent Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              {posts.map((post) => (
                <PostPreview post={post} />
              ))}
            </div>
          </section>
        )}
      </SidebarLayout>
    </>
  );
}

export const getStaticProps = async () => {
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

  return {
    props: { posts, recentPostLinks, utilLinks },
  };
};
