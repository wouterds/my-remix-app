import type { ActionFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { Form, json, useActionData } from '@remix-run/react';
import clsx from "clsx";
import { Layout } from "~/components/layout";
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const meta: MetaFunction = () => {
  return [
    { title: "Contact" },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const data = Object.fromEntries(form) as Schema;

  try {
    schema.parse(data);
  } catch {
    return json({ success: false, data  }, { status: 400 });
  }

  console.log({ data })

  return json({ success: true, data });
}

export default function Contact() {
  const data = useActionData<typeof action>();
  const {
    register, handleSubmit, formState: { errors, isValid },
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  if (data?.success === true) {
    return (
      <Layout>
        <p className="text-emerald-600">Form submitted successfully!</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Form
        className="flex flex-col gap-4"
        action="/contact"
        method="post"
        onSubmit={isValid ? undefined : handleSubmit(() => {})}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="font-medium block mb-1.5">
              First name *
            </label>
            <input
              type="text"
              id="fullName"
              {...register('fullName')}
              className={clsx(
                "block w-full px-2 py-1.5 text-gray-900 border border-gray-300 bg-gray-50 rounded-sm text-xs focus:border-blue-500",
                { "border-red-600": !!errors.fullName?.message }
              )}
            />
            {errors.fullName?.message && (
              <p className="text-red-600 mt-1.5">
                {errors.fullName?.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="font-medium block mb-1.5">
              Email *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={clsx(
                "block w-full px-2 py-1.5 text-gray-900 border border-gray-300 bg-gray-50 rounded-sm text-xs focus:border-blue-500",
                { "border-red-600": !!errors.email?.message }
              )}
            />
            {errors.email?.message && (
              <p className="text-red-600 mt-1.5">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="message" className="font-medium block mb-1.5">
            Message *
          </label>
          <textarea
            id="message"
            {...register('message')}
            className={clsx(
              "block w-full px-2 py-1.5 min-h-32 text-gray-900 border border-gray-300 bg-gray-50 rounded-sm text-xs focus:border-blue-500",
              { "border-red-600": !!errors.message?.message }
            )}
          />
          {errors.message?.message && (
            <p className="text-red-600 mt-1.5">
              {errors.message?.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="px-3 py-1.5 text-white font-medium bg-blue-600 rounded-sm hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </Form>
    </Layout>
  );
}

const schema = z.object({
  fullName: z.string().min(4, { message: 'Please enter first name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(48, { message: 'Oops, it seems your message is rather short.' }),
});

type Schema = z.infer<typeof schema>;
