
const api = {
    getData: url => {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer j2lftm0_z2sfE7PL9grf'
            }
        })
            .then(res => res.json())
            .catch(err => {
                throw new Error(err);
            })
    },
    saveData: (url, body) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer j2lftm0_z2sfE7PL9grf'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .catch(err => {
                throw new Error(err);
            })
    }
};

export default api;