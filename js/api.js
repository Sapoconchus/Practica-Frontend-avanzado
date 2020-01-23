import storage from './storage.js';

const {setItem, getItem} = storage();

const API_KEY = "99EQ1ZG-SK9M3J0-NEZGPFS-KK42VJ3";
const endpoint = "https://beerflix-api.herokuapp.com/api/v1"

export const getBeers = async (query, limit = 10) => {
  //  const endpoint = "https://beerflix-api.herokuapp.com/api/v1/beers"
    const URL = query ? `${endpoint}/beers?search=${query}&limit=${limit}` : API_URL;
    
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
      return beers;
  
  }catch (err){
        console.log(err)
        throw error;
    }

}


export const getDetails = async id => {
 // const endpoint = "https://beerflix-api.herokuapp.com/api/v1"
  const URL = `${endpoint}${id}`

  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY
      },
    });

    const data = await response.json();
    const {beer} = data;
    return beer;

  } catch (err) {
    console.log(err);
    throw error
  }

}

export const addLike = async id => {
 // const endpoint = "https://beerflix-api.herokuapp.com/api/v1"
  const URL = `${endpoint}${id}/like`
 try { const like = await fetch(URL, {
    method: 'POST',
    headers: {
      'X-API-KEY': API_KEY,
      'Content-type': 'application/json',
    }
  });
  setItem(id, "liked")
} catch (err) {
  console.log(err);
  throw error
};

}

export const postComment = async (id, comment) => {
//  const endpoint = "https://beerflix-api.herokuapp.com/api/v1"
  const URL = `${endpoint}${id}/comment`;
 try { const postComment = await fetch(URL, {
    method: 'POST',
    headers: {
      'X-API-KEY': API_KEY,
      'content-type': 'application/json',

    },
    body: JSON.stringify({
      'comment': comment,
    })
  })
} catch (err) {
  console.log(err);
  throw error;
};

};

export const userRegister = async (name, email) => {
  const URL = `${endpoint}/user/register`;
  try{
    const user = await fetch(URL, {
      method: 'POST',
      headers: {
        'X-API-KEY': API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name.
        email,
      })
    })

  } catch (err) {
    console.log(err);
    throw error;
  }
};

export const getUser = async email => {
  const URL = `${endpoint}/user/login`;
  try {
    const user = await fetch(URL, {
      method: 'POST',
      headers: {
        'X-API-KEY': API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
      })
    })

  } catch (err) {
    console.log(err);
    throw error;
  }
}

