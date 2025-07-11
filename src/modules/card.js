import { setCountdown } from "./timer.js"

const html = document.querySelector('html')
const optionSelected = document.querySelectorAll('.type-option')
const description = document.querySelector('.description')
const banner = document.querySelector('.banner-toggle')

optionSelected.forEach(type => {
    type.addEventListener('click', (event) => {
        optionSelected.forEach((option) => {
            option.classList.remove('type-selected')
        })

        event.target.classList.add('type-selected')

        let typeSelected = event.target.classList[1]

        toggleContext({ context: typeSelected })
    })
})

function toggleContext({ context }) {
    html.setAttribute('data-context', context)
    banner.setAttribute('src', `src/assets/${context}.png`)

    switch (context) {
        case 'focus':
            description.innerHTML = `Otimize sua produtividade, <strong>mergulhe no que importa</strong>`
            setCountdown(1500)
            break
        case 'short-rest':
            description.innerHTML = `Que tal dar uma respirada? <strong>Faça uma pausa curta!</strong>`
            setCountdown(300)
            break
        case 'long-rest':
            description.innerHTML = `Hora de voltar à superfície. <strong>Faça uma pausa longa.</strong>`
            setCountdown(900)
            break
        default:
            break
    }
}



