
const API_KEY = "99EQ1ZG-SK9M3J0-NEZGPFS-KK42VJ3";

export const getBeers = async (query, limit = 10) => {
    const endpoint = "https://beerflix-api.herokuapp.com/api/v1/beers"
    const URL = query ? `${endpoint}?search=${query}&limit=${limit}` : API_URL;
    
    try {
    
      const response = await fetch(URL, {
          method: 'GET', 
          headers: {
          'X-API-KEY': API_KEY,
          },
        });

      if (!response.ok) {
        throw new Error('Error brewing your request!');
      }
    
      const data = await response.json();
      //const beers = data.map(item => item.beers);
      const {beers} = data;
      console.log(beers);
      return beers;
  
  }catch (err){
        console.log(err)
        throw error;
    }

}


export const getDetails = async id => {


}
/*
export const addLike = async id => {
  const endpoint = "https://beerflix-api.herokuapp.com/api/v1/beers"
  const URL = `${endpoint}/${id}/like`
  const like = await fetch(URL, {
    method: 'POST',
    headers: {
      'X-API-KEY': API_KEY,
      'Content-type': 'application/json',
    }
  }
}*/