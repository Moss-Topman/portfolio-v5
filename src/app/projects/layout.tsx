export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1A191D] text-gray-900 dark:text-white font-sans transition-colors duration-300">
      {children}
    </div>
  );
}