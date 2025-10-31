import { Calendar as CalendarIcon, MapPin, Users } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import EventCard from "@/components/EventCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: "1",
    title: "Jornada de Limpieza",
    date: "Sábado, 5 de Noviembre - 9:00 AM",
    location: "Plaza Central",
    description: "Únete a nuestra jornada de limpieza comunitaria y gana puntos extra por participar",
    attendees: 45,
  },
  {
    id: "2",
    title: "Taller de Reciclaje",
    date: "Miércoles, 10 de Noviembre - 3:00 PM",
    location: "Centro Comunitario",
    description: "Aprende técnicas avanzadas de separación de residuos y reciclaje creativo",
    attendees: 28,
  },
  {
    id: "3",
    title: "Feria Eco-Sostenible",
    date: "Domingo, 15 de Noviembre - 10:00 AM",
    location: "Parque Municipal",
    description: "Conoce productos sustentables y participa en actividades ecológicas para toda la familia",
    attendees: 120,
  },
];

const upcomingDays = [
  { day: "Lun", date: "1", hasEvent: false },
  { day: "Mar", date: "2", hasEvent: false },
  { day: "Mié", date: "3", hasEvent: false },
  { day: "Jue", date: "4", hasEvent: false },
  { day: "Vie", date: "5", hasEvent: true },
  { day: "Sáb", date: "6", hasEvent: false },
  { day: "Dom", date: "7", hasEvent: false },
];

export default function Events() {
  return (
    <div className="min-h-screen pb-20">
      <AppHeader title="Eventos Ambientales" />

      <div className="p-4 space-y-6">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <CalendarIcon className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Noviembre 2025</h3>
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {upcomingDays.map((day) => (
              <div
                key={day.date}
                className={`text-center p-2 rounded-lg ${
                  day.hasEvent
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                <div className="text-xs font-medium mb-1">{day.day}</div>
                <div className="text-sm font-semibold">{day.date}</div>
                {day.hasEvent && (
                  <div className="w-1 h-1 rounded-full bg-primary-foreground mx-auto mt-1" />
                )}
              </div>
            ))}
          </div>
        </Card>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Próximos Eventos</h2>
            <Badge variant="secondary">{events.length} eventos</Badge>
          </div>
          
          <div className="space-y-3">
            {events.map((event) => (
              <div key={event.id}>
                <EventCard {...event} />
                <div className="flex items-center gap-1 mt-2 ml-4">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {event.attendees} personas confirmadas
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
