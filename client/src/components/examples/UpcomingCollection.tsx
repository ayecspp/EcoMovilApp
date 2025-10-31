import UpcomingCollection from '../UpcomingCollection';

export default function UpcomingCollectionExample() {
  return (
    <div className="p-4">
      <UpcomingCollection
        date="Viernes, 1 de Noviembre"
        time="8:00 AM - 12:00 PM"
        materials={["Plástico", "Vidrio", "Papel"]}
        daysUntil={1}
      />
    </div>
  );
}
