import SearchIcon from "../Icons/SearchIcon";

const SearchField = (props) => {
  const { value, onInputChange, onProductSearch } = props;

  return (
    <div className="search-field w-25 d-flex align-items-stretch justify-content-between mb-5">
      <input
        type="text"
        id="search-field"
        value={value}
        onChange={onInputChange}
        placeholder="Search products..."
        className="w-100 py-3 px-4"
      />

      <button
        onClick={onProductSearch}
        className="search-icon-container d-flex align-items-center justify-content-center p-3"
      >
        <SearchIcon className="search-icon" />
      </button>
    </div>
  );
};

export default SearchField;
