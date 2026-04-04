const images = import.meta.glob(
  "/src/assets/images/gallery/**/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

export default images;