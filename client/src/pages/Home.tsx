import { Truck, QrCode, MapPin, Leaf } from "lucide-react";
import { useLocation } from "wouter";
import PointsCard from "@/components/PointsCard";
import QuickActionCard from "@/components/QuickActionCard";
import UpcomingCollection from "@/components/UpcomingCollection";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="pb-20">
      <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground px-4 pt-6 pb-8">
        <h1 className="text-2xl font-bold mb-2">¡Hola, Usuario!</h1>
        <p className="text-sm text-primary-foreground/80">
          Juntos hacemos un planeta más verde
        </p>
      </div>

      <div className="px-4 -mt-4 space-y-6">
        <PointsCard points={1250} change={85} />

        <div>
          <h2 className="text-lg font-semibold mb-3">Acciones Rápidas</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            <QuickActionCard
              icon={Truck}
              title="Solicitar Retiro"
              description="Programa la recolección de tus residuos"
              onClick={() => setLocation("/pickup")}
            />
            <QuickActionCard
              icon={QrCode}
              title="Escanear QR"
              description="Valida tu entrega y suma puntos"
              onClick={() => console.log('Escanear QR')}
            />
            <QuickActionCard
              icon={MapPin}
              title="Contenedores"
              description="Encuentra el más cercano"
              onClick={() => setLocation("/map")}
            />
            <QuickActionCard
              icon={Leaf}
              title="Consejos"
              description="Aprende a reciclar mejor"
              onClick={() => console.log('Consejos')}
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Próxima Recolección</h2>
          <UpcomingCollection
            date="Viernes, 1 de Noviembre"
            time="8:00 AM - 12:00 PM"
            materials={["Plástico", "Vidrio", "Papel"]}
            daysUntil={1}
          />
        </div>
      </div>
    </div>
  );
}
