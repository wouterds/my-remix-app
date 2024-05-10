import type { MetaFunction } from "@remix-run/cloudflare";
import { Layout } from "~/components/layout";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
  ];
};

export default function About() {
  return (
    <Layout>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </Layout>
  );
}
