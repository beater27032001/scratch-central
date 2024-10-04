import GameList from "@/components/GameList";
import Header from "@/components/Header";
import games from "../../data/games.json";

export default function Home() {
  return (
    <div>
      <Header />
      <GameList games={games} />
    </div>
  );
}
