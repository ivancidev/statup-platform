import { SearchForm } from "@components/search-form";

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = (await searchParams).query;
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
    </>
  );
}
