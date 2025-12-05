export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#252529] text-gray-900 dark:text-white font-sans transition-colors duration-300">
      {children}
    </div>
  );
}