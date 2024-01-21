import Head from "next/head";
import { appConfig } from "../app/app.config";
import { getPosts } from "../app/post";
import Container from "../components/container";
import Greeting from "../components/greeting";
import Header from "../components/header";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
import { Post } from "../entities/post";
import LinkList from "../components/link-list";

export default function Index({
  posts,
  recentPostLinks,
  utilLinks,
}: {
  posts: Post[];
  recentPostLinks: {
    text: string;
    href: string;
  }[];
  utilLinks: {
    text: string;
    href: string;
  }[];
}) {
  const utils = [{ title: "hi", path: "/utils/docker" }];

  return (
    <>
      <Head>
        <title>{appConfig.siteName}</title>
      </Head>

      <Layout>
        <Header />

        <Container>
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-5 md:col-span-4">
              <Greeting />

              {posts.length > 0 && (
                <section>
                  <h2 className="dark mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                    Posts
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    {posts.map((post) => (
                      <PostPreview post={post} />
                    ))}
                  </div>
                </section>
              )}
            </div>
            <div className="hidden md:col-span-1 md:block">
              <LinkList listName="Utilities" items={utilLinks} />
              <LinkList listName="Recent Posts" items={recentPostLinks} />
            </div>
          </div>
        </Container>
      </Layout>
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
