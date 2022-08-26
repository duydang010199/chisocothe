// Selection Sort
/*let A = [3, 5, 6, 1, 2, 9, 10];
let swap;
for (i = 0; i < A.length - 1; i++) {
  let min = i;
  for (j = i + 1; j < A.length; j++) {
    if (A[j] < A[min]) {
      min = j;
    }
  }
  swap = A[min];
  A[min] = A[i];
  A[i] = swap;
}*/

// Insertion Sort
/* let A = [0, 2, 7, 5, 4, 11];
for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < i; j++) {
    number = A[j];
    while (number < A[j]) {
      
    }
  }
} */

//Bubble Sort
let A = [5, 4, 6, 1, 2, 9];
for (var i = 0; i < A.length - 1; i++) {
  let j = i + 1;
  let number = A[j];
  while (number < A[j - 1]) {
    A[i] = A[j - 1];
    j--;
  }
  document.write(A);
}
