import Head from "next/head";
import { useState } from "react";
import { getPosts } from "../../app/post";
import Checkbox from "../../components/form/checkbox";
import TextBox from "../../components/form/textbox";
import { LinkItem } from "../../components/link-list";
import SidebarLayout from "../../components/sidebar-layout";

type Props = {
  recentPostLinks: LinkItem[];
  utilLinks: LinkItem[];
};

export default function Index({ utilLinks, recentPostLinks }: Props) {
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("latest");
  const [command, setCommand] = useState("");

  const [interactive, setInteractive] = useState(true);

  function generateCommand() {
    if (!image || !command) {
      return "";
    }

    const lines: string[] = [];
    lines.push("docker");
    lines.push(command);
    lines.push("-it");
    lines.push(`${image}:${tag}`);
    return lines.join(" ");
  }

  return (
    <>
      <Head>
        <title>GUI Docker Command Builder</title>
      </Head>

      <SidebarLayout recentPostLinks={recentPostLinks} utilLinks={utilLinks}>
        <article className="prose dark:prose-invert lg:prose-xl">
          <h3>GUI Docker Command Builder</h3>
          <div>
            <p>Simplify docker commands building with GUI</p>
          </div>
        </article>

        <div>
          <form>
            <TextBox
              title="Image"
              text={image}
              id="image"
              onChange={setImage}
            />

            <TextBox title="Tag" text={tag} id="tag" onChange={setTag} />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Command:
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
              >
                <option value="">select one command</option>
                <option value="run">run</option>
                <option value="exec">exec</option>
              </select>
            </label>

            <Checkbox title="Interactive" id="interactive" />

            <article className="prose dark:prose-invert">
              <pre>
                <code className="language-shell">{generateCommand()}</code>
              </pre>
            </article>
          </form>
        </div>
      </SidebarLayout>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
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
    props: {
      recentPostLinks,
      utilLinks,
    },
  };
}
