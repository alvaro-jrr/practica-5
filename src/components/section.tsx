import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  headerProps,
}: {
  className?: string;
  children?: React.ReactNode;
  headerProps?: React.ComponentProps<typeof Header>;
}) {
  return (
    <main className={cn("flex-1 container py-6", className)}>
      {headerProps ? <Header {...headerProps} /> : null}

      {children ?? null}
    </main>
  );
}

function Header({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold leading-tight">{title}</h1>

        {description ? (
          <p className="text-muted-foreground">{description}</p>
        ) : null}
      </div>

      {actions ? <div className="w-fit">{actions}</div> : null}
    </div>
  );
}
