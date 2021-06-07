export const Capitalize = (str) => {
    return str.replace(/\b\w/g, l => l.toUpperCase())
}

export const getWeather = (weatherURL) => {
    return fetch(weatherURL)
            .then(res => {
                if(res.ok) {
                    return res;
                } else {
                    var err = new Error('Error ' + res.status + ': ' + res.statusText);
                    err.response = res;
                    throw err;
                }
            },
                err => {
                    var errmess = new Error(err.message);
                    throw errmess;
                })
            .catch(err => alert(err.message))
}


