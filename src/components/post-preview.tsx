import Link from "next/link";
import Image from "next/image";
import DateFormatter from "./date-formatter";
import { Post } from "../entities/post";

type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props) => {
  return (
    <div>
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
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${post.path}`}
          href="/posts/[...slug]"
          className="hover:underline"
        >
          {post.title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={post.date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
    </div>
  );
};

export default PostPreview;
