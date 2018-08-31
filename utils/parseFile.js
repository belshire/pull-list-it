module.exports = (data) => {
    return new Promise((resolve) => {
        let lines = data.split('\n');
        let parsedDataObject = {};
        let price;

        lines = lines.map((line) => {
            return line.trim().replace(/\r?\n|\r/, '');
        }).filter((line, index) => {
          return line.length > 0 && index > 6;
        });

        let currentPublisher;
        lines.forEach((line) => {
            line = line.split(',');
            if (line.length === 1) {
                currentPublisher = line[0];
                if (!parsedDataObject.hasOwnProperty(currentPublisher)) {
                    parsedDataObject[currentPublisher] = [];
                }
            } else {
                price = line[2] === '$PI' ? 0.0 : parseFloat(line[2].replace(/\$/g, ''));
                parsedDataObject[currentPublisher].push({
                    id: line[0],
                    name: line[1],
                    price: price,
                    type: line[3],
                });
            }
        });

        console.log('File parsed');
        resolve(parsedDataObject);
    });
};