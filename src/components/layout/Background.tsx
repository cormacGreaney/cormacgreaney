export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="gradient-glow absolute inset-0" />
      <div className="grid-pattern absolute inset-0 opacity-60" />
      <div className="theme-orb-indigo absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-3xl" />
      <div className="theme-orb-violet absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl" />
    </div>
  );
}
