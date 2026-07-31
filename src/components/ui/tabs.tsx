import type { ReactNode } from "react";

type TabsProps = { children: ReactNode };

export function Tabs({ children }: TabsProps) {
  return <div className="my-6 rounded-lg border border-border">{children}</div>;
}

type TabProps = { label: string; children: ReactNode };

export function Tab({ label, children }: TabProps) {
  return (
    <details className="group [&:not(:last-child)]:border-b [&:not(:last-child)]:border-border">
      <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted/50 [&::-webkit-details-marker]:hidden">
        {label}
      </summary>
      <div className="px-4 pb-4">{children}</div>
    </details>
  );
}
