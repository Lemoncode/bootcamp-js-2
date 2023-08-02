const TarjetaHotel = (hotel) => {
  return (
    <div class="card">
      <div class="card-header">{hotel.nombre}</div>
      <div class="card-body">
        <p>Descripción del hotel {hotel.id}</p>
      </div>
      <div class="card-actions">
        <button class="action-button">Acción 1</button>
        <button class="action-button">Acción 2</button>
      </div>
    </div>
  );
};

export const App = () => {
  const hoteles = [
    { id: 1, nombre: "Hotel 1" },
    { id: 2, nombre: "Hotel 2" },
    { id: 3, nombre: "Hotel 3" },
  ];
  return (
    <>
      {hoteles.map((hotel) => (
        <TarjetaHotel {...hotel} />
      ))}
    </>
  );
};
