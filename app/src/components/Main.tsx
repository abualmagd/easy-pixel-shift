export function GlobalMain({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full max-w-3xl gap-10 flex-col items-center justify-between py-32 lg:px-16 px-4 bg-white dark:bg-black sm:items-start">
      {children}
    </div>
  );
}
