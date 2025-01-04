/*
 * a -> list
 * example -> a:[80, 50, 56, 30, 51, 70]
 */
function basic_sort(list) {
  if (!Array.isArray(list)) throw new Error("Parameter is not a list");
  const list_size = list.length;
  if (list_size < 1) throw new Error("Parameter is empty list");
  for (let i = 0; i < list_size; i++) {
    let minimum_value = list[i];
    let stack = i;
    for (let j = i + 1; j < list_size; j++) {
      if (list[j] >= minimum_value) continue
      minimum_value = list[j];
      stack = j;
    }
    [list[i], list[stack]] = [list[stack], list[i]];
  }
  return list;
}
