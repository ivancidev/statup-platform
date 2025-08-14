import { SearchForm } from "@components/search-form";
import { StartupCard } from "@components/startup-card";
import { posts } from "app/data/posts";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect with Investors
        </h1>
        <p className="sub-heading !max-w-3xl">
          Here you can present your innovative ideas and capture the attention
          of potential investors.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-3xl font-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post) => <StartupCard key={post?._id} post={post} />)
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
