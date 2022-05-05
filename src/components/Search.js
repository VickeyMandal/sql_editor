import { BiSearch } from "react-icons/bi";
const Search = ({ filter, setFilter }) => {
  return (
    <div className="my-1 h-9">
      <div className="h-full w-max flex flex-row rounded-md ">
        <div className="h-full w-10 flex border-y-2 border-l-2 bg-gray-300 rounded-l-md items-center justify-center">
          <BiSearch size="1.4rem" color="#9CA3AF" />
        </div>
        <input
          className="h-full pl-3 focus:outline-none border-y-2 border-r-2 border-gray-200 w-52 rounded-r-md text-sm"
          type="text"
          name="search"
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
