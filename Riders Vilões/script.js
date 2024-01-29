const riders = [
    {
        id: 1,
        nome: 'Cronus',
        altura: 2,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci repellat repudiandae eos, placeat minima vel, ullam, architecto at modi eligendi officia inventore similique perferendis et ducimus nesciunt atque eaque.',
        foto: 'imagens/cronus.jpg'
    }
]

const secao = document.querySelector('.riders')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

const todosOsRiders = riders.map((rider) => {
    return `<div>
        <p>Nome: ${rider.nome}</p>
        <p>Altura: ${rider.altura}</p>
        <img src="${rider.foto}">
        <p class="habilidades">Habilidades: ${rider.habilidades}</p>
    </div>`
})

secao.innerHTML = todosOsRiders