import { Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PointsCardProps {
  points: number;
  change?: number;
}

export default function PointsCard({ points, change }: PointsCardProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-primary to-primary/80">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-primary-foreground/80">Puntos Ecológicos</p>
          <p className="text-4xl font-bold text-primary-foreground mt-1" data-testid="text-points">
            {points.toLocaleString()}
          </p>
          {change !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-4 h-4 text-primary-foreground/80" />
              <span className="text-sm text-primary-foreground/80">
                +{change} esta semana
              </span>
            </div>
          )}
        </div>
        <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
          <Award className="w-8 h-8 text-primary-foreground" />
        </div>
      </div>
    </Card>
  );
}
