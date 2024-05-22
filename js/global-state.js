let publications = [];
export const setPublications = (newPublications) => {
publications = newPublications;
}
export const getPublications = () => {
    return publications;
};


// let publications = [];:

// publications: Это переменная (или, точнее, константа, если использовать const), представляющая массив. В данном случае, он объявлен с пустым массивом в качестве начального значения.
// export const setPublications = (newPublications) => { publications = newPublications; };:

// export: Это ключевое слово, используемое для экспорта функции setPublications, чтобы она была доступна в других модулях.
// setPublications: Это имя экспортируемой функции.
// (newPublications): Это параметр функции, предположительно, новый массив публикаций, который будет установлен в переменную publications.
// publications = newPublications;: Эта строка устанавливает переменную publications равной новому массиву, переданному в функцию. Таким образом, эта функция позволяет обновлять данные в массиве publications.
// export const getPublications = () => { return publications; };:

// export: Это ключевое слово, используемое для экспорта функции getPublications.
// getPublications: Это имя экспортируемой функции.
// () => { return publications; }: Это стрелочная функция, которая просто возвращает текущее значение массива publications. Таким образом, эта функция предоставляет интерфейс для получения текущих данных о публикациях.
// В целом, эти функции создают и обеспечивают доступ к глобальной переменной publications, что может быть полезным для управления и передачи данных между различными частями вашего приложения. Функция setPublications позволяет обновлять этот массив данных, а getPublications предоставляет способ получить текущее состояние данных.






