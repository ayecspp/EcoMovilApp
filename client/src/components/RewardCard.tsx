import { Award, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RewardCardProps {
  title: string;
  description: string;
  pointsRequired: number;
  merchant: string;
  imageUrl?: string;
}

export default function RewardCard({ title, description, pointsRequired, merchant, imageUrl }: RewardCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-32 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <Gift className="w-12 h-12 text-secondary" />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-base flex-1">{title}</h3>
          <Badge variant="secondary" className="ml-2">
            <Award className="w-3 h-3 mr-1" />
            {pointsRequired}
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <p className="text-xs text-muted-foreground mb-3">{merchant}</p>
        
        <Button className="w-full" variant="outline" data-testid="button-redeem">
          Canjear
        </Button>
      </div>
    </Card>
  );
}
