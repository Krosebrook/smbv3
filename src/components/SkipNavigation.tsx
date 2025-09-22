const SkipNavigation = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-[100] focus:outline-none focus:ring-2 focus:ring-primary-foreground"
    >
      Skip to main content
    </a>
  );
};

export default SkipNavigation;