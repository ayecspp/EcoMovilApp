import MaterialCard from '../MaterialCard';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function MaterialCardExample() {
  const [selected, setSelected] = useState(false);
  
  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      <MaterialCard
        icon={Trash2}
        label="Plástico"
        selected={selected}
        onClick={() => setSelected(!selected)}
      />
      <MaterialCard
        icon={Trash2}
        label="Vidrio"
        selected={false}
        onClick={() => console.log('Clicked')}
      />
    </div>
  );
}
