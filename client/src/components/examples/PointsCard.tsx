import PointsCard from '../PointsCard';

export default function PointsCardExample() {
  return (
    <div className="p-4">
      <PointsCard points={1250} change={85} />
    </div>
  );
}
