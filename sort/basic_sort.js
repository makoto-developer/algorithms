/*
 * a -> list
 * example -> a:[80, 50, 56, 30, 51, 70]
 */
function basic_sort(a) {
  if (!Array.isArray(a)) throw new Error("Parameter is not a list");
  const N = a.length;
  if (N < 1) throw new Error("Parameter is empty list");
  for (let i = 0; i < N; i++) {
    let mins = a[i];
    let s = i;
    for (let j = i + 1; j < N; j++) {
      if (a[j] < mins) {
        mins = a[j];
        s = j;
      }
    }
  }
  [a[i], a[s]] = [a[s], a[i]];
  return a;
}
