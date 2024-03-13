import { UiButton } from "../uikit/ui-button";
import { UiModal } from "../uikit/ui-modal";

export function GameOverModal() {
  return (
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
  );
}
