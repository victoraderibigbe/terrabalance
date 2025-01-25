"use client";

import { capitalize } from "@/utils/utils";
import { Breadcrumb } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";

export default function MyBreadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link href="/">Home</Link>
      </Breadcrumb.Item>
      {pathNames.map((name, index) => (
        <Breadcrumb.Item key={index}>
          {index === pathNames.length - 1 ? (
            name
          ) : (
            <Link href={`/${pathNames.slice(0, index + 1).join("/")}`}>
              {capitalize(name)}
            </Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
