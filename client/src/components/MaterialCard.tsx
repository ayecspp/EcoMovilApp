import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MaterialCardProps {
  icon: LucideIcon;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function MaterialCard({ icon: Icon, label, selected, onClick }: MaterialCardProps) {
  return (
    <Card
      onClick={onClick}
      className={`p-4 flex flex-col items-center justify-center gap-3 cursor-pointer hover-elevate active-elevate-2 transition-all ${
        selected ? "ring-2 ring-primary bg-accent" : ""
      }`}
      data-testid={`material-${label.toLowerCase()}`}
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
        selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
      }`}>
        <Icon className="w-8 h-8" />
      </div>
      <span className={`text-sm font-medium text-center ${
        selected ? "text-primary" : "text-foreground"
      }`}>
        {label}
      </span>
    </Card>
  );
}
