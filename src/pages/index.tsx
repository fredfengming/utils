import Head from "next/head";
import { appConfig } from "../app/app.config";
import { getPosts } from "../app/post";
import { LinkItem } from "../components/link-list";
import SidebarLayout from "../components/sidebar-layout";
import { Post } from "../entities/post";
import Image from "next/image";
import DateFormatter from "../components/date-formatter";
import Link from "next/link";

const Greeting = () => {
  return (
    <>
      <article className="prose dark:prose-invert lg:prose-xl">
        <h2>Thanks for visiting</h2>
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

const PostPreview = ({ post }: { post: Post }) => {
  return (
    <article className="prose dark:prose-invert lg:prose-xl">
      {post.coverImagePath && (
        <div className="mb-5">
          <Link
            as={`/posts/${post.path}`}
            href="/posts/[...slug]"
            aria-label={post.title}
          >
            <Image
              src={post.coverImagePath}
              alt={`Cover Image for ${post.title}`}
              className="shadow-sm w-full"
              width={1300}
              height={630}
            />
          </Link>
        </div>
      )}
      <h3>
        <Link as={`/posts/${post.path}`} href="/posts/[...slug]">
          {post.title}
        </Link>
      </h3>
      <p>
        <DateFormatter dateString={post.date} />
      </p>
      <p>{post.excerpt}</p>
    </article>
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
          <article className="prose dark:prose-invert lg:prose-xl">
            <h2>Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-8 md:gap-y-16">
              {posts.map((post) => (
                <PostPreview post={post} />
              ))}
            </div>
          </article>
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
