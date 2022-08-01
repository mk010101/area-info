const sol = '123456789';

function testArr(arr) {
  
  if (arr.includes(0)) return false;
  const str = arr.concat().sort((a, b) => a - b).join('');
  
  return sol === str;
  
}

function getSegment(arr, row, col) {
  const a = arr[row].slice(col, col + 3);
  const b = arr[row + 1].slice(col, col + 3);
  const c = arr[row + 2].slice(col, col + 3);
  return [...a, ...b, ...c];
}

function sud(arr) {
  for (let i = 0; i < 9; i++) {
    const row = arr[i];
    const col = [];
    
    if (!testArr(row)) return false;
    for (let j = 0; j < 9; j++) {
      col.push(arr[j][i]);
    }
    if (!testArr(col)) return false;
    
  }
  
  let rc = 0;
  let cc = 0;
  for (let i = 0; i < 9; i++) {
    const slice = getSegment(arr, rc, cc);
    if (!testArr(slice)) return false;
    rc+=3;
    if (rc >= 9) {
      rc = 0;
      cc += 3;
    }
  }
  
  
  return true;
  
}



console.log(sud([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
])); // => true

//*
console.log(sud([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
])); // => false

 //*/