document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slides');
    const controlButtons = document.querySelectorAll('.control-btn');

    let counter = 0;
    const totalSlides = slides.length;
    const intervalTime = 10000; // Tempo de intervalo em milissegundos (10 segundos)

    // Atualiza a classe ativa do botão de controle manual
    function updateControlButtons() {
        controlButtons.forEach(button => button.classList.remove('active'));
        controlButtons[counter].classList.add('active');
    }

    // Move o slider para o slide especificado
    function goToSlide(index) {
        const slideWidth = slides[0].clientWidth;
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
        counter = index;
        updateControlButtons();
    }

    // Funções de controle manual
    controlButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Slider automático
    setInterval(() => {
        counter++;

        if (counter === totalSlides) {
            counter = 0;
        }

        goToSlide(counter);
    }, intervalTime);
});


/*jogadores*/
document.addEventListener("DOMContentLoaded", function() {
    const categorias = document.querySelectorAll('.categoria');

    categorias.forEach(function(categoria) {
        categoria.addEventListener('click', function(event) {
            event.preventDefault();

            const categoriaSelecionada = categoria.getAttribute('data-categoria');

            const jogadores = document.querySelectorAll('.prof-jog');

            jogadores.forEach(function(jogador) {
                if (categoriaSelecionada === 'todos') {
                    jogador.style.display = 'flex'; // Altera para 'flex' para exibir horizontalmente
                } else {
                    if (jogador.classList.contains(categoriaSelecionada)) {
                        jogador.style.display = 'flex'; // Altera para 'flex' para exibir horizontalmente
                    } else {
                        jogador.style.display = 'none';
                    }
                }
            });
        });

        // Lógica para exibir todos os jogadores quando o botão "Todos" é clicado
        const botaoTodos = document.querySelector('.categoria[data-categoria="todos"]');
        botaoTodos.addEventListener('click', function(event) {
            const jogadores = document.querySelectorAll('.prof-jog');
            jogadores.forEach(function(jogador) {
                jogador.style.display = 'flex'; // Altera para 'flex' para exibir horizontalmente
            });
        });
    });
});





/******************************************** */

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});
