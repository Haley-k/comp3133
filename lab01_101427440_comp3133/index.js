const csv = require('csv-parser')
const fs = require('fs')

const deleteFile = (file) => {
    if (fs.existsSync(file)) {
        fs.unlink(file, (err) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('File deleted')
        })
    }
}

deleteFile('canada.txt')
deleteFile('usa.txt')

fs.writeFileSync('canada.txt', 'country,year,population\n')
fs.writeFileSync('usa.txt', 'country,year,population\n')

fs.createReadStream('input_countries.csv')
.pipe(csv())
.on('data', (row) => {
    if (row.country.toLowerCase() === 'canada') {
        fs.appendFileSync('canada.txt', `${row.country},${row.year},${row.population}\n`)
    } else if (row.country.toLowerCase() === 'united states') {
        fs.appendFileSync('usa.txt', `${row.country},${row.year},${row.population}\n`)
    }
})
.on('end', () => {
    console.log('CSV file successfully processed')
})
.on('error', (err) => {
    console.log('Error: ', err)
})