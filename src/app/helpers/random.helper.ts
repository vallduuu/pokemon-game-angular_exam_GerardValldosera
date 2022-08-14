export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// return random item
export function getRandomItem<T>(array: Array<T>): T {
    const index = getRandomInt(0, array.length);
    return array[index];
}

// remove random item and returned it
export function removeRandomItem<T>(array: Array<T>): T {
    const index = getRandomInt(0, array.length);
    return array.splice(index, 1)[0];
}