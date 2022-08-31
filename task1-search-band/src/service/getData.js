export function getData(band) {
   return fetch('https://itunes.apple.com/search?term='+band)
    .then((response) => response.json())
    .then((data) => [... new Set(data.results.map(item=>item.collectionName))].sort().slice(0,5)); 
}
