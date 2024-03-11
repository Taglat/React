npx next lint - Установка и линтинг
ESLint - плагин VsCode

npx prettier --write . - запустить претиер
.prettierrc - файл правил
.prettierignore - файл игнора

// Техника Public API

// useState
* Если несколько состоний зависят от друг друг то лучше обьединить в один обьект состояние
* Если у нам нужно производное значение из состояние не стоит для него созавать отдельное состояние, лучше использовать функцию которая будет получать производное значение

// Для обрезки длинных имен
<div className="overflow-hidden"> // overflow-hidden
    <div className=" text-lg leading-tight truncate">{name}</div> // truncate
</div>

// useEffect - для работы с DOM, BOM, Данных с серврера
Состоит из Effect, Функция очистки, Массив зависимостей

Функция очистки
Срабатывает после первого срабатывания Effect и перед каждым следующим срабатыванием Effect

Массив зависимостей
Проверка посылочно, не стоит созавать обьект в компоненте и прокидывать в массив зависимостей
т.к. ссылка у обьекта будет обновляться и будет бесконечная перерисовка

useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000); // Effect

      return () => { // Функция очистки
        clearInterval(interval);
        setSeconds(60);
      }
    }
}, [isTimerRunning]); // Массив зависимостей