import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import TextBox from "../../components/form/textbox";
import Checkbox from "../../components/form/checkbox";
import Textarea from "../../components/form/textarea";
import { useState } from "react";
import Navbar from "../../components/navbar";

export default function Index() {
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("latest");
  const [interactive, setInteractive] = useState(true);

  function generateCommand() {
    return "docker run -it " + image + ":" + tag;
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Docker</title>
        </Head>
        <Navbar />
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
