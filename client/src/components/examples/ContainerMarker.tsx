import ContainerMarker from '../ContainerMarker';

export default function ContainerMarkerExample() {
  return (
    <div className="p-4">
      <ContainerMarker
        type="Contenedor Verde"
        address="Av. Principal 123"
        materials={["Plástico", "Vidrio", "Papel"]}
        distance="0.5 km de tu ubicación"
        schedule="Lun - Vie: 7:00 AM - 6:00 PM"
      />
    </div>
  );
}
