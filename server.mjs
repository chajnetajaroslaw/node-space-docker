'use strict';

import randomTrivia from './randomtrivia.mjs';

import express from 'express';

const port = 3000

const app = express();

app.set('view engine', 'pug')

app.get('/', (req, res) => {

    randomTrivia().then((trivia) => {
        res.render('page', {
            question: trivia.question,
            answer: trivia.answer


        })
    })
    
})

app.listen(port, () => {
    console.log('Example app listening on port 3000! 🧑‍🚀')
    //give clickable link 
    console.log(`http://localhost:${port}`)
})