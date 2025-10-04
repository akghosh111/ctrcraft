import React from "react";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandDiscord,
} from "@tabler/icons-react";

export function Footer() {
  return (
  <footer className="mt-auto w-full border-t border-neutral-200">
  <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center justify-between gap-y-3 sm:flex-row">
      <div className="flex items-center gap-x-3">
        <img
          src="https://ik.imagekit.io/akghosh111/erasebg-transformed%20(1).png?updatedAt=1757783310032"
          alt="CTRCraft Logo"
          className="h-12 w-auto" 
        />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} CTRcraft. All rights reserved.
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="#" aria-label="GitHub Repository">
          <IconBrandGithub className="h-5 w-5 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white" />
        </Link>
        <Link href="#" aria-label="Twitter">
          <IconBrandTwitter className="h-5 w-5 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white" />
        </Link>
        <Link href="#" aria-label="LinkedIn">
          <IconBrandLinkedin className="h-5 w-5 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white" />
        </Link>
        <Link href="#" aria-label="Discord">
          <IconBrandDiscord className="h-5 w-5 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white" />
        </Link>
      </div>
    </div>
  </div>
</footer>

  );
}