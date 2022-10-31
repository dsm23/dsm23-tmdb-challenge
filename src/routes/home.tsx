import { useEffect, useState } from "react";
import { getTrending, Media } from "../api";
import Card from "../components/card";
import Nav from "../components/nav";
import { useAuth } from "../context";

const Root = () => {
  const { apiKey, isLoggedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [trendingTvShows, setTrending] = useState<Media[]>([]);

  const fetchFn = async (apiKey: string) => {
    try {
      setLoading(true);
      const res = await getTrending(apiKey);
      setTrending(res.results);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchFn(apiKey);
  }, [apiKey, isLoggedIn]);

  return (
    <main className="p-4 w-full lg:max-w-screen-lg mx-auto space-y-4">
      <Nav />

      <h1 className="sr-only">Trending page</h1>

      {trendingTvShows.length > 0 && (
        <>
          <h2 className="text-3xl font-bold">Trending</h2>

          {loading && <div>loading...</div>}
          {trendingTvShows.map((media) => (
            <Card media={media} key={media?.id} />
          ))}
        </>
      )}
    </main>
  );
};

export default Root;
