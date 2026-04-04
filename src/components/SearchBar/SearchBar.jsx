import "./SearchBar.css";
import searchIcon from "../../assets/icon-search.svg";

const tags = [
  "Todos",
  "Naturaleza",
  "Playa",
  "Atardecer",
  "Agua",
  "Montaña",
  "Animales",
  "Ciudad",
  "Aventura",
  "Arte",
];

function SearchBar({ activeTags, setActiveTags, searchTerm, setSearchTerm }) {

  const handleTagClick = (tag) => {
    if (tag === "Todos") {
      setActiveTags([]);
      return;
    }

    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <section className="search">
      <div className="search__container">
        <div className="search__wrapper">

          {/* SEARCH INPUT */}
          <div className="search__input">
            <img src={searchIcon} alt="search" className="search__icon" />
            <input
              type="text"
              placeholder="Buscar"
              className="search__field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* TAGS */}
          <div className="search__tags">
            {tags.map((tag) => {

              const isActive =
                tag === "Todos"
                  ? activeTags.length === 0
                  : activeTags.includes(tag);

              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`search__tag ${isActive ? "is-active" : ""}`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default SearchBar;