export function sortInAscendingOrder(arr: string[]) {
  const b = [...arr];

  return b.sort((a, b) =>  (a > b ? 1 : -1));
}

export function sortInDescendingOrder(arr: string[]) {
  const b = [...arr];

  return b.sort((a, b) => (a > b ? -1 : 1));
}
