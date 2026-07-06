import MainLayout from "../layouts/MainLayout";

function MLB() {
  return (
    <MainLayout>
      <section style={{ padding: "60px" }}>
        <h1>⚾ Major League Baseball</h1>

        <p style={{ marginTop: "20px" }}>
          Aquí mostraremos los partidos de hoy, resultados en vivo,
          estadísticas, equipos, jugadores y pronósticos.
        </p>
      </section>
    </MainLayout>
  );
}

export default MLB;