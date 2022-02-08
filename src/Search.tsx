import { FunctionComponent, useState } from "react";

interface SearchProps {
  searchText: string;
  onSubmit: (newSearchText: string) => void;
}

export const Search: FunctionComponent<SearchProps> = ({
  searchText,
  onSubmit,
}: SearchProps) => {
  const [search, setInput] = useState(searchText);
  

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    // updated from searchTerm to the value searched for. 
    onSubmit(search);
  };



  return (
    <form onSubmit={handleSubmit} className="search">
      <label htmlFor="search-input">
        Search by Title
        <input
          id="search-input"
          type="text"
          value={search}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
