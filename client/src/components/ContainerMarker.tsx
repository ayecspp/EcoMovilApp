import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ContainerMarkerProps {
  type: string;
  address: string;
  materials: string[];
  distance?: string;
  schedule?: string;
}

export default function ContainerMarker({ type, address, materials, distance, schedule }: ContainerMarkerProps) {
  return (
    <Card className="p-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <MapPin className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base mb-1">{type}</h3>
          <p className="text-sm text-muted-foreground mb-2">{address}</p>
          
          {distance && (
            <p className="text-xs text-muted-foreground mb-2">{distance}</p>
          )}
          
          <div className="flex flex-wrap gap-1 mb-2">
            {materials.map((material) => (
              <Badge key={material} variant="secondary" className="text-xs">
                {material}
              </Badge>
            ))}
          </div>
          
          {schedule && (
            <p className="text-xs text-muted-foreground">{schedule}</p>
          )}
        </div>
      </div>
    </Card>
  );
}
