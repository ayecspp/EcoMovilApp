import { MapPin, Search, Filter } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import ContainerMarker from "@/components/ContainerMarker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const containers = [
  {
    id: "1",
    type: "Contenedor Verde",
    address: "Av. Principal 123",
    materials: ["Plástico", "Vidrio", "Papel"],
    distance: "0.5 km",
    schedule: "Lun - Vie: 7:00 AM - 6:00 PM",
  },
  {
    id: "2",
    type: "Punto Ecológico",
    address: "Plaza Central",
    materials: ["Electrónicos", "Baterías"],
    distance: "1.2 km",
    schedule: "Mar y Jue: 9:00 AM - 5:00 PM",
  },
  {
    id: "3",
    type: "Contenedor Azul",
    address: "Calle Secundaria 456",
    materials: ["Papel", "Cartón"],
    distance: "0.8 km",
    schedule: "Lun - Sáb: 8:00 AM - 8:00 PM",
  },
];

export default function Map() {
  return (
    <div className="min-h-screen pb-20">
      <AppHeader 
        title="Mapa de Contenedores"
        action={
          <Button size="icon" variant="ghost" data-testid="button-filter">
            <Filter className="w-5 h-5" />
          </Button>
        }
      />

      <div className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar por dirección..."
            className="pl-10"
            data-testid="input-search"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          <Badge variant="secondary" className="cursor-pointer hover-elevate whitespace-nowrap">
            Todos
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover-elevate whitespace-nowrap">
            Plástico
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover-elevate whitespace-nowrap">
            Vidrio
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover-elevate whitespace-nowrap">
            Papel
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover-elevate whitespace-nowrap">
            Electrónicos
          </Badge>
        </div>

        <div className="h-64 bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="w-8 h-8 text-primary animate-bounce" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Mapa interactivo</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Contenedores Cercanos</h2>
          <div className="space-y-3">
            {containers.map((container) => (
              <ContainerMarker key={container.id} {...container} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
