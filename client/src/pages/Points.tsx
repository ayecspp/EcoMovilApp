import { Award, TrendingUp, History } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import PointsCard from "@/components/PointsCard";
import RewardCard from "@/components/RewardCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const rewards = [
  {
    id: "1",
    title: "20% de descuento",
    description: "En tu próxima compra en productos ecológicos",
    pointsRequired: 500,
    merchant: "EcoTienda Verde",
  },
  {
    id: "2",
    title: "Café gratis",
    description: "Una bebida de tu elección",
    pointsRequired: 300,
    merchant: "Café Sustentable",
  },
  {
    id: "3",
    title: "Bolsa reutilizable",
    description: "Bolsa ecológica premium de tela orgánica",
    pointsRequired: 800,
    merchant: "EcoResiduos Store",
  },
];

const history = [
  { date: "28 Oct", action: "Retiro completado", points: "+50" },
  { date: "25 Oct", action: "Evento asistido", points: "+100" },
  { date: "22 Oct", action: "Retiro completado", points: "+50" },
  { date: "20 Oct", action: "Bono semanal", points: "+25" },
];

export default function Points() {
  return (
    <div className="min-h-screen pb-20">
      <AppHeader 
        title="Mis Puntos"
        action={
          <button className="text-sm text-primary font-medium" data-testid="button-history">
            Historial
          </button>
        }
      />

      <div className="p-4 space-y-6">
        <PointsCard points={1250} change={85} />

        <Card className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold">Nivel: Eco Warrior</h3>
              <p className="text-sm text-muted-foreground">750 puntos para el siguiente nivel</p>
            </div>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-secondary rounded-full" style={{ width: '62%' }} />
          </div>
        </Card>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Recompensas Disponibles</h2>
            <Badge variant="secondary">
              <Award className="w-3 h-3 mr-1" />
              {rewards.length}
            </Badge>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {rewards.map((reward) => (
              <RewardCard key={reward.id} {...reward} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <History className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Actividad Reciente</h2>
          </div>
          <Card className="divide-y divide-border">
            {history.map((item, index) => (
              <div key={index} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{item.action}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
                <span className="text-sm font-semibold text-secondary">{item.points}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
