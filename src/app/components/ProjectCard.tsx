"use client"; // Client for interactions

import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ slug, title, description, image }: ProjectProps) {
  return (
    <Link href={`/projects/${slug}`} className="block bg-[#0a0a0f] rounded-lg shadow-lg transform rotate-3 hover:scale-105 transition-transform" aria-label={`View ${title} case study`}>
      <Image src={image} alt={title} width={600} height={400} className="rounded-t-lg object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  );
}