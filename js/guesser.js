const guesser = (() => {
    return {
        guessLetter: (e) => {
            let picture = document.querySelector('.picture')

            console.log(e.target)
            guess = e.path[0]


            if (guess.className === 'letter') {
                let newLetter = document.querySelectorAll(`#${guess.id}1`);
                let usedLetter = document.getElementById(`${guess.id}`)
                if (guess.id === 'h' || guess.id === 'a' || guess.id === 'n' || guess.id === 'g' || guess.id === 'm') {

                    newLetter.forEach(element => {
                        element.src = `./static/pic/chalk-alphabet/${guess.id}.png`
                    })

                    usedLetter.src = `./static/pic/chalk-alphabet/blank.png`


                    check = check - 1
                    console.log(check)

                    if (check === 0) {
                        const bravo = document.querySelector('.select');
                        bravo.firstElementChild.innerHTML = "You Win !"
                        bravo.className = 'btn select bg-success col-6'
                        const restart = document.querySelector('.restart');
                        restart.className = 'btn bg-info restart col-6'
                    }
                } else {

                    picture.src = `./static/pic/hangman${num}.jpg`
                    usedLetter.src = `./static/pic/chalk-alphabet/blank.png`


                    if (num < 10) {
                        return num = num + 1
                    } else {
                        const bravo = document.querySelector('.select');
                        bravo.firstElementChild.innerHTML = "You Lost"
                        bravo.className = 'btn select bg-danger col-6'
                        const restart = document.querySelector('.restart');
                        restart.className = 'btn bg-info restart col-6'
                        return num = 10
                    }
                }
            }
            else if (guess.innerHTML === 'Restart') {
                picture.src = `./static/pic/hangman${1}.jpg`;
                num = 2;
                check = 5;
                let all = document.querySelectorAll('.password')
                all.forEach(element => {
                    element.src = './static/pic/chalk-alphabet/blank.png'
                });
                let letter = document.querySelectorAll('.letter')
                letter.forEach(element => {
                    element.src = `./static/pic/chalk-alphabet/${element.id}.png`
                })
                let btn = document.querySelectorAll(".btn")
                btn.forEach(element => {
                    element.classList.add('invisible')
                })

            }
        }
    }
}
)()

