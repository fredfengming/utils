import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { Post } from "../interfaces/post";

type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props) => {
  return (
    <div>
      {/* <div className="mb-5">
        <CoverImage slug={slug[0]} title={title} src={coverImage} />
      </div> */}
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
      <p className="text-lg leading-relaxed mb-4">{post.title}</p>
    </div>
  );
};

export default PostPreview;
