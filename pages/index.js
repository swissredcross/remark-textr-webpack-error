import fs from "fs";
import { join } from "path";
import { Markdown } from "../components/Markdown";

const Index = ({ exampleMarkdown }) => {
  return <Markdown {...{ source: exampleMarkdown }} />;
};

export default Index;

export async function getStaticProps() {
  const postsDirectory = join(process.cwd(), "_posts");

  const postPath = join(postsDirectory, `example.md`);
  const exampleMarkdown = fs.readFileSync(postPath, "utf8");

  return {
    props: { exampleMarkdown },
  };
}
