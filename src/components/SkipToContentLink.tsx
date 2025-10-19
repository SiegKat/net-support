const SkipToContentLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--color-card)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[color:var(--color-ink)] focus:shadow-[var(--shadow-card)]"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContentLink;
