const
  url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes',
  xhrBtn = document.getElementById('xhr'),
  fetchBtn = document.getElementById('fetch'),
  jqueryBtn = document.getElementById('jquery'),
  axiosBtn = document.getElementById('axios'),
  quoteDiv = document.getElementById('quote');

xhrBtn.addEventListener('click', () => {
  quoteDiv.innerHTML = 'xhr'
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let quote = JSON.parse(xhr.responseText)[0]
      quoteDiv.innerHTML = quote
    }
  }
  xhr.open('get', url)
  xhr.send()
})
fetchBtn.onclick = () => {
  quoteDiv.innerHTML = 'fetch'
  fetch(url)
  .then(res => res.json())
  .then(json => quoteDiv.innerHTML = json[0])
  .catch(e => console.log(e))
}
jqueryBtn.onclick = () => {
  quoteDiv.innerHTML = 'jquery'
  $.getJSON(url, res => {
    quoteDiv.innerHTML = res[0]
  })
}
axiosBtn.onclick = () => {
  quoteDiv.innerHTML = 'axios'
  axios.get(url)
  .then(res => quoteDiv.innerHTML = res.data[0])
  .catch(e=>console.log(e))
}
