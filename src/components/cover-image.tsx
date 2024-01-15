import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  path: string;
};

const CoverImage = ({ title, src, path }: Props) => {
  return (
    <div className="sm:mx-0">
      <Link as={`/posts/${path}`} href="/posts/[...slug]" aria-label={title}>
        <Image
          src={src}
          alt={`Cover Image for ${title}`}
          className="shadow-sm w-full"
          width={1300}
          height={630}
        />
      </Link>
    </div>
  );
};

export default CoverImage;
