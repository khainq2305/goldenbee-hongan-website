// src/app/dev/button-demo/page.tsx
import { Button } from "@/components/ui/button";

export default function ButtonDemoPage() {
  return (
    <div className="p-6 space-y-4">
      <Button>Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="full">Full Width</Button>
      <Button variant="filter">Filter</Button>
      <Button variant="small">Small</Button>
    </div>
  );
}
