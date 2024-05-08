import type { MetaFunction } from "@remix-run/cloudflare";
import clsx from "clsx";
import { Layout } from "~/components/layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact" },
  ];
};

export default function Contact() {
  return (
    <Layout>
      <p className="text-emerald-600">Form submitted successfully!</p>

      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="font-medium block mb-1.5">
              First name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={clsx(
                "block w-full px-2 py-1.5 text-gray-900 border border-gray-300 bg-gray-50 rounded-sm text-xs focus:border-blue-500",
                { "border-red-600": true }
              )}
            />
            <p className="text-red-600 mt-1.5">
              error
            </p>
          </div>
          <div>
            <label htmlFor="email" className="font-medium block mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={clsx(
                "block w-full px-2 py-1.5 text-gray-900 border border-gray-300 bg-gray-50 rounded-sm text-xs focus:border-blue-500",
                { "border-red-600": true }
              )}
            />
            <p className="text-red-600 mt-1.5">
              error
            </p>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="font-medium block mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={clsx(
              "block w-full px-2 py-1.5 min-h-32 text-gray-900 border border-gray-300 bg-gray-50 rounded-sm text-xs focus:border-blue-500",
              { "border-red-600": true },
            )}
          />
          <p className="text-red-600 mt-1.5">
            error
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="px-3 py-1.5 text-white font-medium bg-blue-600 rounded-sm hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
}
