import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Media, searchByGenreAndYear } from "../api";
import Button from "../components/button";
import Card from "../components/card";
import Input from "../components/input";
import MagGlass from "../components/mag-glass";
import Nav from "../components/nav";
import { useAuth } from "../context";

const Search = () => {
  const { apiKey } = useAuth();
  const [loading, setLoading] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [results, setResults] = useState<Media[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchCriteria(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      const { results } = await searchByGenreAndYear(apiKey, searchCriteria);
      setResults(results);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-4 w-full lg:max-w-screen-lg mx-auto">
      <Nav />

      <h1 className="sr-only">Search Page</h1>

      <form onSubmit={handleSubmit} className="mt-6">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700"
        >
          Search for any movie, tv show or genre
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagGlass className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <Input
            type="search"
            name="search"
            id="search"
            className="pl-10"
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>

      <div className="mt-10 space-y-4">
        {loading && <div>loading...</div>}
        {results.map((media) => (
          <Card media={media} key={media?.id} />
        ))}
      </div>
    </main>
  );
};

export default Search;
