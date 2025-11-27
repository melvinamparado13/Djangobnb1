const apiService = {
    get: async function (url: string): Promise<any> {
        console.log('get', url);


        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('Response:', json);
                    resolve(json);
                })
                .catch((error => {
                    reject(error);
                }))
        })
    },

    post: async function (url: string, data: any): Promise<any> {
        console.log('post', url, data);
        return new Promise((resolve, reject) => {
            const headers: any = {};
            if (typeof data === 'string') {
                headers['Content-Type'] = 'application/json';
            }
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: data,
                headers: headers
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('Response:', json);




                    resolve(json);
                })
                .catch((error => {
                    reject(error);
                }))
        })
    },
}








export default apiService;
