import { useState } from "react";
import {
  GameInfo,
  GameTitle,
  GameField,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";
import { GameSymbol } from "../components/game/game-symbol";
import { UiModal } from "../components/uikit/ui-modal";
import { UiButton } from "../components/uikit/ui-button";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <HomePageLayout header={<Header />}>
      <GameTitle playersCount={playersCount} />
      <GameInfo
        className="mt-4 "
        playersCount={playersCount}
        currentMove={currentMove}
        isWinner={!!winnerSymbol}
        onPlayerTimeOver={handlePlayerTimeOver}
      />
      {winnerSymbol && (
        <div className="my-4">
          <GameSymbol symbol={winnerSymbol} />
        </div>
      )}
      <UiModal
        width="md"
        isOpen={winnerSymbol}
        onClose={() => {
          console.log("CLOSE");
        }}
      >
        <UiModal.Header>Игра завершена!</UiModal.Header>
        <UiModal.Body>
          <div className="text-sm">
            Победитель: <span className="text-teal-600">ttokayev7</span>
          </div>
        </UiModal.Body>
        <UiModal.Footer>
          <UiButton size="md" variant="outline">
            Вернуться
          </UiButton>
          <UiButton size="md" variant="primary">
            Играть снова
          </UiButton>
        </UiModal.Footer>
      </UiModal>
      <GameField
        className="mt-6"
        playersCount={playersCount}
        cells={cells}
        currentMove={currentMove}
        nextMove={nextMove}
        handleCellClick={handleCellClick}
        winnerSequence={winnerSequence}
        winnerSymbol={winnerSymbol}
      />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
