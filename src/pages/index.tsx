import Head from "next/head";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Nav from "../components/nav";
import PostPreview from "../components/post-preview";
import { Post } from "../interfaces/post";
import { getPosts } from "../lib/api";

export default function Index({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>{`Blog Example`}</title>
      </Head>

      <Layout>
        <Header />
        <Nav />

        <article className="prose dark:prose-invert lg:prose-xl mx-auto md:max-w-3xl lg:max-w-4xl">
          <h1>Thanks for visiting </h1>
          <div>
            <p>This is a WordPress based site for personal wiki usage only. </p>

            <p>
              You are welcome to use any resources provided by this site however
              please understand it is not guerenteed that services are stable.{" "}
            </p>

            <p>Have fun!</p>
          </div>
        </article>

        <Container>
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
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getPosts();

  return {
    props: { posts },
  };
};
