import { Calendar, Clock, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UpcomingCollectionProps {
  date: string;
  time: string;
  materials: string[];
  daysUntil: number;
}

export default function UpcomingCollection({ date, time, materials, daysUntil }: UpcomingCollectionProps) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-base mb-1">Próxima Recolección</h3>
          <p className="text-sm text-muted-foreground">
            {daysUntil === 0 ? "Hoy" : daysUntil === 1 ? "Mañana" : `En ${daysUntil} días`}
          </p>
        </div>
        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
          <Trash2 className="w-5 h-5 text-secondary" />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground">{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground">{time}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-3">
        {materials.map((material) => (
          <Badge key={material} variant="secondary" className="text-xs">
            {material}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
