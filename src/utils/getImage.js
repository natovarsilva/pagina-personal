import images from "./imageLoader";

export default function getImage(path) {
  return images[`/src/assets/images/gallery/${path}`];
}