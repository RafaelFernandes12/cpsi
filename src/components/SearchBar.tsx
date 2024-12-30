import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router";

export function SearchBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = window.location.pathname;

  const params = new URLSearchParams(location.search);
  function handleSearch(searchTerm: string) {
    if (searchTerm) params.set("name", searchTerm);
    else params.delete("name");
    navigate(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex items-center w-full my-5">
      <button type="button" className="absolute ml-2">
        <SearchIcon />
      </button>
      <input
        placeholder="Procurar por nome"
        value={params.get("name") || ""}
        className="w-full border-2 border-black rounded-xl p-2 pl-10 bg-white"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
