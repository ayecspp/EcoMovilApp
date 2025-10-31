import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface AppHeaderProps {
  title: string;
  showBack?: boolean;
  action?: React.ReactNode;
}

export default function AppHeader({ title, showBack = false, action }: AppHeaderProps) {
  const [, setLocation] = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-card border-b border-card-border">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {showBack && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setLocation("/")}
              data-testid="button-back"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          <h1 className="text-lg font-semibold truncate">{title}</h1>
        </div>
        {action && <div className="ml-2">{action}</div>}
      </div>
    </header>
  );
}
