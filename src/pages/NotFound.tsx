import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--color-bg)] px-6 py-16">
      <div className="max-w-md rounded-[20px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-8 text-center shadow-[var(--shadow-card)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Page not found</p>
        <h1 className="my-4 text-5xl font-semibold text-[color:var(--color-ink)]">404</h1>
        <p className="mb-6 text-base leading-relaxed text-muted-foreground">
          We couldn’t find that page. Let’s head back to the calm starting point.
        </p>
        <a
          href="/"
          className="inline-flex min-h-[44px] items-center justify-center rounded-[12px] bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-card)] transition-colors duration-150 ease-out hover:bg-[var(--color-primary-hover)] focus-ring"
        >
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
