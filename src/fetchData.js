export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f8741d66dmshfdc62c9f56606afp1092e8jsnb1ecaa075b40',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};
/* fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); */
  
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}