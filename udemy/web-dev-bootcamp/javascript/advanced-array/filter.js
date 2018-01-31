const filter = (arr, cb) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i ++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let arr = ['jim', 'frank', 'tim'];
let result = arr.filter((val)=>{
  return val.length <= 3;
})

console.log(result);

result = filter(arr, (val)=>{
  return val.length <= 3;
})

console.log(result);

