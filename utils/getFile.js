const https = require('https');

module.exports = (url) => {
    return new Promise((resolve, reject) => {
        let file = [];
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(res.statusCode);
            }

            res.on('data', (chunk) => {
                file.push(chunk);
            }).on('end', () => {
                console.log('File downloaded');
                resolve(file.join(''));
            })
        }).on('error', () => {
            reject(request.error);
        });
    });
};
