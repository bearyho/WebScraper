//WebScraper App
//https://www.youtube.com/watch?v=-3lqUHeZs_0&ab_channel=CodewithAniaKub%C3%B3w


const PORT = 1000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()


const url = 'https://www.theguardian.com/uk'

//const url = 'https://snyk.io/vuln?type=npm'
//const url = 'https://www.irishjobs.ie'


axios(url)
    .then(response => {
        const html = response.data
        //console.log(html)
        const $ = cheerio.load(html)
        const articles = []


        $('.fc-item__title', html).each(function() { 
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
        //console.log ($)
    
    }).catch(err => console.log(err))


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

