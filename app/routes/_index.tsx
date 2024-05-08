import type { MetaFunction } from "@remix-run/cloudflare";
import { Layout } from "~/components/layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Index" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
            rel="noreferrer"
            className="hover:underline">
            Cloudflare Pages Docs - Remix guide
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
            className="hover:underline">
            Remix Docs
          </a>
        </li>
      </ul>
    </Layout>
  );
}
