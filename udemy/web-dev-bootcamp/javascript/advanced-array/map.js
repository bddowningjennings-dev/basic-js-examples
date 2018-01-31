const myMap = (arr, cb) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i ++) {
    newArr.push(cb(arr[i], i, arr));
  }
  return newArr;
}

let arr = [1,2,3];

let result = arr.map((val)=> {
  return val * 2;
});
console.log(result);

result = myMap(arr, (val)=>{
  return val * 2;
})
console.log(result);
