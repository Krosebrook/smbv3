import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-muted-foreground">
      <a
        href="/"
        className="flex items-center hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1 py-0.5"
        aria-label="Go to homepage"
      >
        <Home className="w-4 h-4" />
      </a>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1 py-0.5"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-foreground font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;