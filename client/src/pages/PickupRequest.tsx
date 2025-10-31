import { useState } from "react";
import { Camera, CheckCircle2, Trash2, Wine, FileText, Cpu, Package, Leaf, MapPin, Calendar, Upload } from "lucide-react";
import { useLocation } from "wouter";
import AppHeader from "@/components/AppHeader";
import MaterialCard from "@/components/MaterialCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const materials = [
  { id: "plastic", icon: Trash2, label: "Plástico" },
  { id: "glass", icon: Wine, label: "Vidrio" },
  { id: "paper", icon: FileText, label: "Papel" },
  { id: "metal", icon: Package, label: "Metal" },
  { id: "electronics", icon: Cpu, label: "Electrónicos" },
  { id: "organic", icon: Leaf, label: "Orgánicos" },
];

const containerTypes = {
  bolsas: [
    { id: "bolsa-supermercado", label: "Bolsa de supermercado" },
    { id: "bolsa-consorcio", label: "Bolsa de consorcio / basura" },
    { id: "bolsa-cocina", label: "Bolsa pequeña de cocina" },
    { id: "bolsa-alpillera", label: "Bolsa alpillera" },
    { id: "bolsa-malla", label: "Bolsa malla para jardín" },
  ],
  cajas: [
    { id: "caja-pequeña", label: "Caja pequeña" },
    { id: "caja-mediana", label: "Caja mediana" },
    { id: "caja-grande", label: "Caja grande" },
  ],
  bidones: [
    { id: "bidon-pequeño", label: "Bidón pequeño" },
    { id: "bidon-grande", label: "Bidón grande" },
  ],
  otros: [
    { id: "sueltos", label: "Residuos sueltos / a granel" },
    { id: "rollos", label: "Rollos o fardos" },
  ],
};

export default function PickupRequest() {
  const [step, setStep] = useState(1);
  const [scanMethod, setScanMethod] = useState<"scan" | "manual" | null>(null);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedContainer, setSelectedContainer] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [address, setAddress] = useState("");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const toggleMaterial = (id: string) => {
    setSelectedMaterials(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    setIsAnalyzing(true);
    
    // Simulación de análisis con OpenAI Vision
    setTimeout(() => {
      setSelectedMaterials(["plastic", "paper", "metal"]);
      setIsAnalyzing(false);
      toast({
        title: "Análisis completado",
        description: "Hemos identificado los materiales en tu imagen",
      });
    }, 2000);
  };

  const handleNext = () => {
    if (step === 1 && selectedMaterials.length === 0) {
      toast({
        title: "Selecciona al menos un material",
        description: "Debes elegir qué tipo de residuos deseas reciclar o escanear una imagen",
        variant: "destructive",
      });
      return;
    }
    if (step === 2 && !selectedContainer) {
      toast({
        title: "Selecciona un tipo de envase",
        description: "Debes elegir en qué tipo de contenedor se encuentran tus residuos",
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
            <h2 className="text-xl font-semibold mb-2">Reconocimiento de materiales</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Escanea tus residuos o selecciónalos manualmente
            </p>

            {!scanMethod && (
              <div className="grid grid-cols-1 gap-3 mb-6">
                <Card
                  className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-all"
                  onClick={() => setScanMethod("scan")}
                  data-testid="card-scan-option"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Camera className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Escanear con cámara</h3>
                      <p className="text-sm text-muted-foreground">
                        Usa IA para identificar automáticamente tus materiales
                      </p>
                    </div>
                  </div>
                </Card>

                <Card
                  className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-all"
                  onClick={() => setScanMethod("manual")}
                  data-testid="card-manual-option"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Selección manual</h3>
                      <p className="text-sm text-muted-foreground">
                        Elige tú mismo los tipos de materiales
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {scanMethod === "scan" && (
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="space-y-4">
                    {!imagePreview ? (
                      <label
                        htmlFor="image-upload"
                        className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
                        data-testid="label-upload-image"
                      >
                        <Upload className="w-12 h-12 text-muted-foreground mb-2" />
                        <span className="text-sm text-muted-foreground">
                          Toca para tomar foto o subir imagen
                        </span>
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          capture="environment"
                          className="hidden"
                          onChange={handleImageUpload}
                          data-testid="input-image-upload"
                        />
                      </label>
                    ) : (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        {isAnalyzing && (
                          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                            <div className="text-white text-center">
                              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                              <p className="text-sm">Analizando materiales...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {selectedMaterials.length > 0 && !isAnalyzing && (
                      <div>
                        <p className="text-sm font-medium mb-2">Materiales identificados:</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedMaterials.map((id) => {
                            const material = materials.find(m => m.id === id);
                            return (
                              <Badge key={id} variant="secondary">
                                {material?.label}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>

                <Button
                  variant="outline"
                  onClick={() => {
                    setScanMethod(null);
                    setImagePreview(null);
                    setSelectedMaterials([]);
                  }}
                  className="w-full"
                  data-testid="button-change-method"
                >
                  Cambiar método
                </Button>
              </div>
            )}

            {scanMethod === "manual" && (
              <div className="space-y-4">
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

                <Button
                  variant="outline"
                  onClick={() => {
                    setScanMethod(null);
                    setSelectedMaterials([]);
                  }}
                  className="w-full"
                  data-testid="button-change-method"
                >
                  Cambiar método
                </Button>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Tipo de envase</h2>
            <p className="text-sm text-muted-foreground mb-6">
              ¿En qué tipo de contenedor están tus residuos?
            </p>

            <RadioGroup value={selectedContainer} onValueChange={setSelectedContainer}>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Bolsas
                  </h3>
                  <div className="space-y-2">
                    {containerTypes.bolsas.map((container) => (
                      <Card
                        key={container.id}
                        className={`p-4 cursor-pointer transition-all ${
                          selectedContainer === container.id
                            ? "border-primary bg-primary/5"
                            : "hover-elevate"
                        }`}
                        onClick={() => setSelectedContainer(container.id)}
                        data-testid={`card-container-${container.id}`}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={container.id} id={container.id} />
                          <Label htmlFor={container.id} className="flex-1 cursor-pointer">
                            {container.label}
                          </Label>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Cajas o contenedores
                  </h3>
                  <div className="space-y-2">
                    {containerTypes.cajas.map((container) => (
                      <Card
                        key={container.id}
                        className={`p-4 cursor-pointer transition-all ${
                          selectedContainer === container.id
                            ? "border-primary bg-primary/5"
                            : "hover-elevate"
                        }`}
                        onClick={() => setSelectedContainer(container.id)}
                        data-testid={`card-container-${container.id}`}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={container.id} id={container.id} />
                          <Label htmlFor={container.id} className="flex-1 cursor-pointer">
                            {container.label}
                          </Label>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Contenedores rígidos / bidones
                  </h3>
                  <div className="space-y-2">
                    {containerTypes.bidones.map((container) => (
                      <Card
                        key={container.id}
                        className={`p-4 cursor-pointer transition-all ${
                          selectedContainer === container.id
                            ? "border-primary bg-primary/5"
                            : "hover-elevate"
                        }`}
                        onClick={() => setSelectedContainer(container.id)}
                        data-testid={`card-container-${container.id}`}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={container.id} id={container.id} />
                          <Label htmlFor={container.id} className="flex-1 cursor-pointer">
                            {container.label}
                          </Label>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Otros
                  </h3>
                  <div className="space-y-2">
                    {containerTypes.otros.map((container) => (
                      <Card
                        key={container.id}
                        className={`p-4 cursor-pointer transition-all ${
                          selectedContainer === container.id
                            ? "border-primary bg-primary/5"
                            : "hover-elevate"
                        }`}
                        onClick={() => setSelectedContainer(container.id)}
                        data-testid={`card-container-${container.id}`}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={container.id} id={container.id} />
                          <Label htmlFor={container.id} className="flex-1 cursor-pointer">
                            {container.label}
                          </Label>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Confirmar retiro</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Verifica los detalles y confirma tu solicitud
            </p>
            
            <div className="space-y-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Resumen</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Materiales: </span>
                    <span className="font-medium">
                      {selectedMaterials.map(id => 
                        materials.find(m => m.id === id)?.label
                      ).join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Envase: </span>
                    <span className="font-medium">
                      {Object.values(containerTypes)
                        .flat()
                        .find(c => c.id === selectedContainer)?.label}
                    </span>
                  </div>
                </div>
              </Card>

              <div className="h-48 bg-muted rounded-xl flex items-center justify-center">
                <MapPin className="w-12 h-12 text-muted-foreground" />
              </div>
              
              <div>
                <Label htmlFor="address">Dirección de retiro</Label>
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
            disabled={step === 1 && !scanMethod}
            data-testid={step === 3 ? "button-submit" : "button-next"}
          >
            {step === 3 ? "Confirmar Solicitud" : "Continuar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
