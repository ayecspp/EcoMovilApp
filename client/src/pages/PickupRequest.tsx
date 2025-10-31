import { useState } from "react";
import { Trash2, Wine, FileText, Cpu, Package, Leaf, MapPin, Calendar } from "lucide-react";
import { useLocation } from "wouter";
import AppHeader from "@/components/AppHeader";
import MaterialCard from "@/components/MaterialCard";
import QuantitySelector from "@/components/QuantitySelector";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const materials = [
  { id: "plastic", icon: Trash2, label: "Plástico" },
  { id: "glass", icon: Wine, label: "Vidrio" },
  { id: "paper", icon: FileText, label: "Papel" },
  { id: "metal", icon: Package, label: "Metal" },
  { id: "electronics", icon: Cpu, label: "Electrónicos" },
  { id: "organic", icon: Leaf, label: "Orgánicos" },
];

export default function PickupRequest() {
  const [step, setStep] = useState(1);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [address, setAddress] = useState("");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const toggleMaterial = (id: string) => {
    setSelectedMaterials(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
    if (!quantities[id]) {
      setQuantities(prev => ({ ...prev, [id]: 1 }));
    }
  };

  const handleNext = () => {
    if (step === 1 && selectedMaterials.length === 0) {
      toast({
        title: "Selecciona al menos un material",
        description: "Debes elegir qué tipo de residuos deseas reciclar",
        variant: "destructive",
      });
      return;
    }
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = () => {
    toast({
      title: "¡Solicitud enviada!",
      description: "Te notificaremos cuando confirmemos tu retiro",
    });
    setLocation("/");
  };

  return (
    <div className="min-h-screen pb-20">
      <AppHeader title="Solicitar Retiro" showBack />

      <div className="px-4 py-6 space-y-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Selecciona los materiales</h2>
            <p className="text-sm text-muted-foreground mb-6">
              ¿Qué tipo de residuos vas a reciclar?
            </p>
            <div className="grid grid-cols-2 gap-3">
              {materials.map((material) => (
                <MaterialCard
                  key={material.id}
                  icon={material.icon}
                  label={material.label}
                  selected={selectedMaterials.includes(material.id)}
                  onClick={() => toggleMaterial(material.id)}
                />
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Cantidad estimada</h2>
            <p className="text-sm text-muted-foreground mb-6">
              ¿Cuántas bolsas de cada material tienes?
            </p>
            <Card className="p-4 space-y-4">
              {selectedMaterials.map((id) => {
                const material = materials.find(m => m.id === id);
                return (
                  <QuantitySelector
                    key={id}
                    value={quantities[id] || 1}
                    onChange={(val) => setQuantities(prev => ({ ...prev, [id]: val }))}
                    label={material?.label}
                  />
                );
              })}
            </Card>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Ubicación del retiro</h2>
            <p className="text-sm text-muted-foreground mb-6">
              ¿Dónde debemos recoger tus residuos?
            </p>
            
            <div className="space-y-4">
              <div className="h-48 bg-muted rounded-xl flex items-center justify-center">
                <MapPin className="w-12 h-12 text-muted-foreground" />
              </div>
              
              <div>
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  placeholder="Ej: Av. Principal 123, Depto 4B"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  data-testid="input-address"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="date">Fecha preferida</Label>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <Input
                    id="date"
                    type="date"
                    data-testid="input-date"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3 pt-4">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="flex-1"
              data-testid="button-back-step"
            >
              Atrás
            </Button>
          )}
          <Button
            onClick={step === 3 ? handleSubmit : handleNext}
            className="flex-1"
            data-testid={step === 3 ? "button-submit" : "button-next"}
          >
            {step === 3 ? "Confirmar Solicitud" : "Continuar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
