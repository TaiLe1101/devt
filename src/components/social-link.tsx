"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export function SocialLink({
  href,
  src,
  alt,
}: Readonly<{
  href: string;
  src: string;
  alt: string;
}>) {
  const { theme } = useTheme();

  const adjustedSrc = theme === "dark" ? src.replace(".png", "-dark.png") : src;

  return (
    <a href={href} target="_blank">
      <Image src={adjustedSrc} alt={alt} width={28} height={28} />
    </a>
  );
}
