const API_URL = "https://beerflix-api.herokuapp.com/api/v1/beers";
const API_KEY = "99EQ1ZG-SK9M3J0-NEZGPFS-KK42VJ3";

export const getBeers = async (query, limit = 10) => {
    const URL = query ? `${API_URL}?search=${query}&limit=${limit}` : API_URL;
    try {
    const response = await fetch(URL, 
        {
          method: 'GET', headers: {
          'X-API-KEY': API_KEY,},
        });
    } catch (err){
        console.log(err)
        throw error;
    }
    if (!response.ok) {
        throw new Error('Error brewing your request!');
      }
      const data = await response.json();
    console.log(data)
}

getBeers();

export const getDetails = async id => {


}
