// Deep clone the array cos it's nested
export function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export function generateEmptyGrid(rows, cols) {
  return Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));
}
