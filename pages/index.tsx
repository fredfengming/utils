import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
import Post from "../interfaces/post";
import { getAllPosts } from "../lib/api";
import Nav from "../components/nav";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Nav />

        <Head>
          <title>{`Blog Example`}</title>
        </Head>
        <Container>
          {allPosts.length > 0 && (
            <section>
              <h2 className="dark mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                {allPosts.map((post) => (
                  <PostPreview
                    key={post.slug}
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                    slug={post.slug}
                    excerpt={post.excerpt}
                  />
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
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
