type CardPropsType = {
    [key: string]: string
}

/**
 * @type {CardPropsType[]}
 * @returns {CardPropsType[]} return card`s labels
 */
export const cardLabels: CardPropsType[] = [
    { columnId: 'as12', title: 'Важные события недели' },
    { columnId: 'b23n', title: 'Задачи на неделю' },
    { columnId: 'nh5q', title: 'В работе' },
    { columnId: 'nm98', title: 'Выполнено' },
]

/**
 * @type {string[]}
 */
export const coverColor: string[] = [
    '#D69960',
    '#A960D6',
    '#D660A0',
    '#60D6BA',
    '#9BD660',
    '#9DB6D4',
]
