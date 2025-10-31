import AppHeader from '../AppHeader';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

export default function AppHeaderExample() {
  return (
    <div>
      <AppHeader 
        title="Mi Perfil" 
        showBack 
        action={
          <Button size="icon" variant="ghost">
            <Settings className="w-5 h-5" />
          </Button>
        }
      />
    </div>
  );
}
