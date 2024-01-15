import Head from "next/head";
import { useState } from "react";
import Container from "../../components/container";
import Checkbox from "../../components/form/checkbox";
import TextBox from "../../components/form/textbox";
import Layout from "../../components/layout";

export default function Index() {
  const [namespace, setNamespace] = useState("");
  const [pod, setPod] = useState("");
  const [command, setCommand] = useState("/bin/bash");
  const [interactive, setInteractive] = useState(true);

  function generateCommand() {
    if (!pod || !command) {
      return "";
    }

    const lines: string[] = [];
    lines.push("kubectl");
    if (namespace) {
      lines.push(`-n ${namespace}`);
    }
    lines.push("exec");

    if (interactive) {
      lines.push("-it");
    }

    lines.push(pod);
    lines.push("--");
    lines.push(command);

    return lines.join(" ");
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Kubectl</title>
        </Head>
        <Container>
          <section>
            <h2 className="dark mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Posts
            </h2>
            <form>
              <TextBox title="pod" text={pod} id="pod" onChange={setPod} />

              <TextBox
                title="Command"
                text={command}
                id="tag"
                onChange={setCommand}
              />

              <TextBox
                title="namespace"
                text={namespace}
                id="image"
                onChange={setNamespace}
              />

              <Checkbox title="Interactive" id="interactive" />

              <code>{generateCommand()}</code>
            </form>
          </section>
        </Container>
      </Layout>
    </>
  );
}
