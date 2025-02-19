import { clx } from "@medusajs/ui";
import React from "react";

export default function Button({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={clx("text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ", className)}
      {...rest}
    >
      {children}
    </button>
  );
}
