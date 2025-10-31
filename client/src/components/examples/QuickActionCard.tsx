import QuickActionCard from '../QuickActionCard';
import { Truck } from 'lucide-react';

export default function QuickActionCardExample() {
  return (
    <div className="p-4">
      <QuickActionCard
        icon={Truck}
        title="Solicitar Retiro"
        description="Programa la recolección de tus residuos"
        onClick={() => console.log('Solicitar retiro clicked')}
      />
    </div>
  );
}
