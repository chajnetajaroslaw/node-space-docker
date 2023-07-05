'use strict';

// setup // // // // // // // 

import randomTrivia from './randomtrivia.mjs';

import express from 'express';

const port = 3000

const app = express();

// stats // // // // // //   

let hits = 0;


app.set('view engine', 'pug')

app.get('/', (req, res) => {

    const uptimeInSeconds = process.uptime();
    const formattedUptime = new Date(uptimeInSeconds * 1000).toISOString().substr(11, 8);

    randomTrivia().then((trivia) => {
        hits += 1
        res.render('page', {
            question: trivia.question,
            answer: trivia.answer,
            hits: hits,
            uptime: formattedUptime


        })
    })
    
})

app.listen(port, () => {
    console.log('Example app listening on port 3000! 🧑‍🚀')
    //give clickable link 
    console.log(`http://localhost:${port}`)
})