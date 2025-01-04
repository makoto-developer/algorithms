const a = [80, 50, 56, 30, 51, 70];
const N = a.length; // データ数
for (let i = 0; i < N - 1; i++) {
  let mins = a[i];
  let s = i;
  for (let j = i + 1; j < N; j++) {
    if (a[j] < mins) {
      mins = a[j];
      s = j;
    }
  }
}
[a[i], a[s]] = [a[s], a[i]]; // a[i]とa[s]の交換
console.log(a);
