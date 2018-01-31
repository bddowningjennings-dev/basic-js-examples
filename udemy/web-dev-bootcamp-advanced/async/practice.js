let hasMostFollowers = (...args) => {
  const URL = 'https://api.github.com/users/'
  let devs = args.map(dev => {
    return fetch(URL + dev).then(res => res.json())
  })
  return Promise.all(devs).then(data => {
    let max = data.sort((a, b) => a.followers < b.followers)[0]
    return `${max.login} has the most followers with ${max.followers}`
  })
}

// hasMostFollowers('elie','tigarcia','colt').then(function(data){
//   console.log(data)
// });
let fetchJSON = async (url) => {
  let res = await fetch(url)
  return res.json()
}

let thing = async (...args) => {
  const URL = 'https://api.github.com/users/'
  let data = args.map(dev => fetchJSON(URL + dev))
  let results = await Promise.all(data)
  let max = results.sort((a, b) => a.followers < b.followers)[0]
  return `${max.login} has the most followers with ${max.followers}`
}

let asyncFollowers = async (...args) => {
  const URL = 'https://api.github.com/users/'
  let urls = args.map(async dev => {
    let thing = await fetch(URL + dev)
    return thing.json()
  })
  let results = await Promise.all(urls)
  let max = results.sort((a, b) => a.followers < b.followers)[0]
  return `${max.login} has the most followers with ${max.followers}`
}

thing('elie','tigarcia','colt').then(function(data){
  console.log(data)
});

let starWarsString = (num) => {
  const URL = 'https://swapi.co/api/people/'
  return fetch(URL + num).then(res => res.json()).then(person => person.name);
}

// starWarsString(1).then(function(data){
//   console.log(data)
// })
