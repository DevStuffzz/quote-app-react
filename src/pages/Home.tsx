import Quote from "../components/Quote";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
        Random Quote Generator
      </h1>
      <Quote />
    </div>
  );
}

export default Home;
