// import 'src/sons/luna-rise-part-one.mp3';

const html = document.querySelector('html')
const optionSelected = document.querySelectorAll('.type-option')
const description = document.querySelector('.description')
const banner = document.querySelector('.banner-toggle')
const musicCheck = document.querySelector('.music-check')

// const music = new Audio('./src/sons/luna-rise-part-one.mp3');
// music.loop = true

// musicCheck.addEventListener('change', () => {
//     if(music.paused) {
//         music.play()
//     } else {
//         music.pause()
//     }
// })

optionSelected.forEach(type => {
    type.addEventListener('click', (event) => {
        optionSelected.forEach((option) => {
            option.classList.remove('type-selected')
        })

        event.target.classList.add('type-selected')

        let typeSelected = event.target.classList[1]
        console.log(typeSelected);
        

        toggleContext({ context: typeSelected })
    })
})

function toggleContext({ context }) {
    html.setAttribute('data-context', context)
    banner.setAttribute('src', `src/assets/${context}.png`)

    switch (context) {
        case 'focus':
            description.innerHTML = `Otimize sua produtividade, <strong>mergulhe no que importa</strong>`
            break
        case 'short-rest':
            description.innerHTML = `Que tal dar uma respirada? <strong>Faça uma pausa curta!</strong>`
            break
        case 'long-rest':
            description.innerHTML = `Hora de voltar à superfície. <strong>Faça uma pausa longa.</strong>`
            break
        default:
            break
    }
}



