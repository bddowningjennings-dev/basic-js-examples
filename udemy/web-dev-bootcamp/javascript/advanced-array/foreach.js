const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i ++) {
    cb(arr[i], i, arr);
  }
}

let arr = [1, 2, 3];

arr.forEach((val) => console.log(val));

forEach(arr, (val) => console.log(val));
