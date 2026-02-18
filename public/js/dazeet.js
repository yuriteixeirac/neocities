const fs = require('fs');
const path = require('path');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const currentDate = new Date();
const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

//
// javascript e a coisa
// mais estupida que eu
// ja tive que mexer ate 
// hoje puta que pariu
//

rl.question("Título do dazeet: ", (titulo) => {
    rl.question("Conteúdo do dazeet: ", (corpo) => {
        if (titulo.length > 50 || corpo.length > 280) {
            throw new Error("Título ou corpo excedeu limite de caracteres.")
        }

        const dazeet = {
            titulo: titulo,
            corpo: corpo
        };

        const newDazeet = `
        <section class="dazeet">
            <div class="dazeet-info">
                <h2 class="dazeet-title">
                    ${dazeet.titulo}
                </h2>
                <p class="dazeet-date">${formattedDate}</p>
            </div>
            
            <p class="dazeet-body">${dazeet.corpo}</p>
        </section>
        `

        const filePath = path.join('../html/dazeets.html')
        fs.readFile(filePath, (err, data) => {
            if (err) throw err;

            const openingContainer = '<main id="dazeets">';
            const insertingPosition = data.indexOf(openingContainer) + openingContainer.length;

            const updatedData = data.subarray(0, insertingPosition) + '\n' + newDazeet + data.subarray(insertingPosition);

            fs.writeFile(filePath, updatedData, 'utf-8', (err) => {
                if (err) throw err;
                console.log("real shit.");
            });
        });
    });
});
