import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
}

export default function QuantitySelector({ value, onChange, min = 1, max = 100, label }: QuantitySelectorProps) {
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {label && <span className="text-sm font-medium flex-1">{label}</span>}
      <div className="flex items-center gap-3">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecrement}
          disabled={value <= min}
          data-testid="button-decrement"
        >
          <Minus className="w-4 h-4" />
        </Button>
        <span className="text-2xl font-semibold w-12 text-center" data-testid="text-quantity">
          {value}
        </span>
        <Button
          size="icon"
          variant="outline"
          onClick={handleIncrement}
          disabled={value >= max}
          data-testid="button-increment"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
