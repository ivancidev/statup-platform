import { SearchForm } from "@components/search-form";
import { StartupCard } from "@components/startup-card";

const posts = [
  {
    _id: 1,
    title: "Startup 1",
    views: 55,
    _createAt: new Date(),
    author: { _id: 1, name: "John Doe" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nullam in purus nec nulla lacinia sollicitudin. Nullam in purus nec nulla lacinia sollicitudin.",
    category: { _id: 1, name: "Technology" },
    image:
      "https://th.bing.com/th/id/OIP.adWM0bAA_fOk5xUyFu-CGgHaFj?rs=1&pid=ImgDetMain",
  },
];
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
