import projects from "../../../lib/projects.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface Params {
  params: { slug: string };
}

export default function ProjectPage({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <section className="py-20 bg-[#0a0a0f] code-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 uppercase">// {project.title}</h1>
        <p className="text-gray-400 mb-8">{project.details}</p>
        {/* Add images, tech stack, etc. here */}
      </div>
    </section>
  );
}