import { PLAYERS } from "./constants";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";

export function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      title={<GameTitle />}
      gameInfo={
        <GameInfo playersCount={4} isRatingGame timeMode="1 мин. на ход" />
      }
      playersList={PLAYERS.map((player, index) => {
        return (
          <PlayerInfo
            key={player.id}
            name={player.name}
            avatar={player.avatar}
            rating={player.rating}
            symbol={player.symbol}
            isRight={index % 2 === 1}
            seconds={60}
          />
        );
      })}
    />
  );
}
