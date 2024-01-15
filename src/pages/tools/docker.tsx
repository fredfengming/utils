import Head from "next/head";
import { useState } from "react";
import Container from "../../components/container";
import Checkbox from "../../components/form/checkbox";
import TextBox from "../../components/form/textbox";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Nav from "../../components/nav";

export default function Index() {
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
      <Layout>
        <Head>
          <title>Docker</title>
        </Head>
        <Header />
        <Nav />
        <Container>
          <section className="lg:prose-xl mx-auto md:max-w-3xl lg:max-w-4xl">
            <h2 className="dark mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Docker command builder
            </h2>
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
          </section>
        </Container>
      </Layout>
    </>
  );
}
