import { clsx } from "clsx";
import { useState } from "react";

export default function HomePage() {
  const cells = [null, null, null, null, null, null, null, null, null];
  const [isRed, setIsRed] = useState(false);
  
  return (
    <>
      <div>Hello World!</div>
      {/* </><div className="grid pt-px pl-px grid-cols-game-field grid-rows-game-field"> game-field - это класс который мы создали в tailwind.config */}
      <div className="grid pt-px pl-px gap-1 grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {/* Arbitrary values - Алтернативный более удобный метод */}
        {cells.map((cell, index) => {
          return (
            <button
              className={clsx("px-3 py-3 border-2", isRed && "bg-red-400")}
              key={index}
            >
              {cell}
            </button>
          );
        })}
      </div>
      <button className="px-3 py-1 mt-2 border-solid border-slate-950 border-2" onClick={() => setIsRed((val) => !val)}>Toggle</button>
    </>
  );
}
