import RewardCard from '../RewardCard';

export default function RewardCardExample() {
  return (
    <div className="p-4">
      <RewardCard
        title="20% de descuento"
        description="En tu próxima compra"
        pointsRequired={500}
        merchant="EcoTienda Verde"
      />
    </div>
  );
}
