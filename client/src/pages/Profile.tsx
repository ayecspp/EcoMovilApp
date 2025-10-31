import { User, MapPin, Bell, HelpCircle, LogOut, ChevronRight, Award, Leaf } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  { icon: MapPin, label: "Mi Ubicación", description: "Av. Principal 123" },
  { icon: Bell, label: "Notificaciones", description: "Activas" },
  { icon: HelpCircle, label: "Ayuda y Soporte", description: "Centro de ayuda" },
];

const stats = [
  { label: "Retiros", value: "12", icon: Leaf },
  { label: "Eventos", value: "5", icon: Award },
  { label: "Kg Reciclados", value: "48", icon: Leaf },
];

export default function Profile() {
  return (
    <div className="min-h-screen pb-20">
      <AppHeader title="Mi Perfil" />

      <div className="p-4 space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                U
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">Usuario EcoResiduos</h2>
              <p className="text-sm text-muted-foreground mb-2">usuario@email.com</p>
              <Badge variant="secondary" className="gap-1">
                <Award className="w-3 h-3" />
                Eco Warrior
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </Card>

        <div>
          <h3 className="text-lg font-semibold mb-3">Configuración</h3>
          <Card className="divide-y divide-border">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="w-full p-4 flex items-center gap-3 hover-elevate active-elevate-2 text-left"
                  onClick={() => console.log(`Navigate to ${item.label}`)}
                  data-testid={`button-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              );
            })}
          </Card>
        </div>

        <Button
          variant="outline"
          className="w-full gap-2"
          data-testid="button-logout"
        >
          <LogOut className="w-4 h-4" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}
