
const localStore = {
    setItem: (key, value) => localStorage.setItem(key, value),
    getItem: key => localStorage.getItem(key)
};

const cookieStore = {
    setItem: (key, value) => cookies.set(key, value),
    getItem: key => cookies.get(key)
};

const sessionStore = {
    setItem: (key, value) => sessionStorage.setItem(key, value),
    getItem: key => sessionStorage.getItem(key)
};


const storage = (type = "localStore") => {
    const types = {
        localStore,
        sessionStore,
        cookieStore
    };
    return types[type];
}

export default storage;