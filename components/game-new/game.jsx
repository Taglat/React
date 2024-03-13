import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameTitle } from "./ui/game-title";

export function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      title={<GameTitle />}
      gameInfo={<GameInfo playersCount={4} isRatingGame timeMode="1 мин. на ход" />}
    />
  );
}
