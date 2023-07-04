import random from "random";
import fs from "fs";

//generate random number and log to console
const trivias = "trivia.json";
let parsedTrivias;

function randomTrivia() {
    return new Promise((resolve, reject) => {
        fs.readFile(trivias, (err, data) => {
            if (err) {
                console.error('Error reading file', err);
                reject(err);
                return;
            }

            parsedTrivias = JSON.parse(data);

            let randomTrivia = random.int(0, parsedTrivias.trivia.length - 1);

            resolve(parsedTrivias.trivia[randomTrivia]);
        });
    });
}

// randomTrivia()
//     .then((trivia) => {
//         console.log(trivia);
//     })
//     .catch((err) => {
//         console.error('Error retrieving random trivia', err);
//     });


export default randomTrivia;
