const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/\.[^/.]+$/, "") // quita extensión (.png)
    .replace(/^ph-/, "") // quita prefijo "ph-"
    .replace(/_/g, "-") // _ → -
    .replace(/\s+/g, "-") // espacios → -
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita tildes
};