import Link from "next/link";

interface Game {
  name: string;
  link: string;
}

interface GameListProps {
  games: Game[];
}

export default function GameList({ games }: GameListProps) {
  return (
    <main className="flex items-center justify-center pb-8">
      <ul className="flex flex-col items-center justify-center mt-8 gap-8">
        {games.map((game, index) => (
          <li className="text-lg" key={index}>
            <Link target="_blank" href={game.link} rel="noopener noreferrer">
              {game.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
