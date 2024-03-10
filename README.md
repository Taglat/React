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