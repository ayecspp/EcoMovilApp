import { Leaf, Trash2, Recycle, Package, AlertCircle, Lightbulb, BookOpen } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tips = [
  "Separa tus residuos desde el origen para facilitar el reciclaje",
  "Lava los envases antes de reciclarlos",
  "Reduce el uso de plásticos de un solo uso",
  "Reutiliza bolsas y contenedores cuando sea posible",
  "Composta tus residuos orgánicos en casa",
];

const wasteTypes = [
  {
    title: "Residuos Orgánicos",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-100",
    description: "Restos de comida, cáscaras, residuos de jardín",
    examples: ["Frutas y verduras", "Restos de café y té", "Cáscaras de huevo", "Hojas y ramas"],
  },
  {
    title: "Residuos Inorgánicos",
    icon: Package,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    description: "Plásticos, vidrio, metales, papel y cartón",
    examples: ["Botellas plásticas", "Latas de aluminio", "Papel y cartón", "Vidrio"],
  },
  {
    title: "Residuos Sanitarios",
    icon: AlertCircle,
    color: "text-red-600",
    bgColor: "bg-red-100",
    description: "Pañales, toallas sanitarias, materiales médicos",
    examples: ["Pañales desechables", "Toallas sanitarias", "Gasas y vendajes", "Mascarillas usadas"],
  },
];

const containers = [
  {
    name: "Contenedor Verde",
    materials: ["Plástico", "Vidrio", "Papel", "Cartón"],
    color: "bg-primary",
  },
  {
    name: "Contenedor Marrón",
    materials: ["Residuos orgánicos", "Restos de comida"],
    color: "bg-amber-700",
  },
  {
    name: "Contenedor Gris",
    materials: ["Residuos sanitarios", "No reciclables"],
    color: "bg-gray-600",
  },
];

const threeRs = [
  {
    title: "Reducir",
    icon: Lightbulb,
    description: "Minimiza la cantidad de residuos que generas",
    tips: [
      "Compra productos con menos empaque",
      "Evita productos desechables",
      "Planifica tus compras para evitar desperdicios",
      "Usa bolsas reutilizables",
    ],
  },
  {
    title: "Reutilizar",
    icon: Recycle,
    description: "Dale una segunda vida a los objetos",
    tips: [
      "Usa frascos de vidrio para almacenar",
      "Repara objetos en lugar de desecharlos",
      "Dona lo que ya no uses",
      "Convierte ropa vieja en trapos de limpieza",
    ],
  },
  {
    title: "Reciclar",
    icon: Trash2,
    description: "Transforma los residuos en nuevos productos",
    tips: [
      "Separa correctamente tus residuos",
      "Limpia los envases antes de reciclar",
      "Aplasta las botellas para ahorrar espacio",
      "Consulta qué materiales se reciclan en tu zona",
    ],
  },
];

const compostSteps = [
  {
    step: "1",
    title: "Elige el contenedor",
    description: "Usa un contenedor con tapa, puede ser comercial o casero, con agujeros para ventilación",
  },
  {
    step: "2",
    title: "Agrega materiales verdes",
    description: "Restos de frutas, verduras, café, té y cáscaras de huevo (ricos en nitrógeno)",
  },
  {
    step: "3",
    title: "Agrega materiales marrones",
    description: "Hojas secas, ramas pequeñas, papel sin tinta (ricos en carbono)",
  },
  {
    step: "4",
    title: "Mantén la humedad",
    description: "El compost debe estar húmedo como una esponja exprimida, no empapado",
  },
  {
    step: "5",
    title: "Mezcla regularmente",
    description: "Revuelve cada 1-2 semanas para oxigenar y acelerar la descomposición",
  },
  {
    step: "6",
    title: "Espera y cosecha",
    description: "En 2-6 meses tendrás compost listo, oscuro y con olor a tierra",
  },
];

export default function Tips() {
  return (
    <div className="min-h-screen pb-20">
      <AppHeader title="Consejos Ecológicos" showBack />

      <div className="p-4 space-y-6">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Consejos Rápidos</h2>
              <ul className="space-y-2">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <div>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Trash2 className="w-5 h-5" />
            Tipos de Residuos
          </h2>
          <div className="space-y-3">
            {wasteTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card key={type.title} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-xl ${type.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${type.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{type.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {type.examples.map((example) => (
                          <Badge key={example} variant="secondary" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Package className="w-5 h-5" />
            Tipos de Contenedores
          </h2>
          <div className="space-y-3">
            {containers.map((container) => (
              <Card key={container.name} className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${container.color} flex-shrink-0`} />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{container.name}</h3>
                    <div className="flex flex-wrap gap-1">
                      {container.materials.map((material) => (
                        <Badge key={material} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Recycle className="w-5 h-5" />
            Las 3 Rs del Reciclaje
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {threeRs.map((r, index) => {
              const Icon = r.icon;
              return (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold">{r.title}</h3>
                        <p className="text-sm text-muted-foreground">{r.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 mt-2 ml-13">
                      {r.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            Cómo Hacer Compost en Casa
          </h2>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              El compostaje es una forma natural de reciclar residuos orgánicos y crear abono rico en nutrientes para tus plantas.
            </p>
            <div className="space-y-4">
              {compostSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10">
          <div className="flex items-start gap-3">
            <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Impacto Ambiental</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Reciclar correctamente puede marcar una gran diferencia en nuestro planeta:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Reduce la contaminación del aire y agua</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Ahorra energía y recursos naturales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Disminuye los residuos en vertederos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Ayuda a combatir el cambio climático</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
