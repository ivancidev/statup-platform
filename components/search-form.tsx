import Form from "next/form";
import { ButtonReset } from "./button-reset";
import { Search } from "lucide-react";
export const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        placeholder="Search Startups"
        className="search-input"
      />
      <div className="flex gap-2">
        {query && <ButtonReset />}
        <button className="search-btn text-white" type="submit">
          <Search size={24} />
        </button>
      </div>
    </Form>
  );
};
