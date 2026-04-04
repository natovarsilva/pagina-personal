import loaderVideo from "../../assets/lottie-loader.webm"; // 👈 asegúrate nombre correcto
import "./Loader.css";

export default function Loader() {
  return (
    <div className="gallery__loader">
      <video
        src={loaderVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: 120 }}
      />
      <p>Cargando más fotos...</p>
    </div>
  );
}