import EventCard from '../EventCard';

export default function EventCardExample() {
  return (
    <div className="p-4">
      <EventCard
        title="Jornada de Limpieza"
        date="Sábado, 5 de Noviembre - 9:00 AM"
        location="Plaza Central"
        description="Únete a nuestra jornada de limpieza comunitaria y gana puntos extra"
      />
    </div>
  );
}
