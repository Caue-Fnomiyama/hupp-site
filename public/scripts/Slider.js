// public/scripts/slider.js (Seu código, ligeiramente otimizado)

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELETORES ATUALIZADOS para garantir que correspondam ao JSX
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const gallery = document.querySelector('.gallery');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    // NOTE: querySelectorAll('.item') pega APENAS os cards REAIS, o que é CORRETO para a clonagem.
    const originalCardItems = document.querySelectorAll('.item'); 

    if (!galleryWrapper || !gallery || !arrowLeft || !arrowRight || originalCardItems.length === 0) {
        console.warn("Slider: Componentes HTML não encontrados. Certifique-se de que as classes .gallery-wrapper, .gallery, .arrow-left/.arrow-right e .item estão no JSX.");
        return;
    }
    
    // O tempo de transição (DEVE corresponder ao CSS: .gallery transition-duration)
    const TRANSITION_DURATION = 300; 
    
    // Obter as dimensões
    // ATENÇÃO: Se o slider não funcionar, o cardWidth está vindo errado.
    // Garanta que o .item:first-child .card tenha WIDHT/HEIGHT definidos.
    const cardWidth = originalCardItems[0].querySelector('.card').offsetWidth; 
    const cardGap = 25; 
    const scrollDistance = cardWidth + cardGap; 

    // --- Configuração para Loop Infinito (Clonagem) ---
    const numToClone = 3; 
    const totalOriginalItems = originalCardItems.length;
    
    // Clonagem dos itens (do final para o início) e prepend
    for (let i = 0; i < numToClone; i++) {
        const clone = originalCardItems[totalOriginalItems - 1 - i].cloneNode(true);
        gallery.prepend(clone);
    }
    // Clonagem dos itens (do início para o final) e append
    for (let i = 0; i < numToClone; i++) {
        const clone = originalCardItems[i].cloneNode(true);
        gallery.appendChild(clone);
    }

    // Recalcula todos os itens (originais + clones)
    const allItems = gallery.querySelectorAll('.item');
    
    // O índice do primeiro item real após os clones
    const firstRealItemIndex = numToClone; 
    let currentIndex = 0; // Índice do item REAL (0 a totalOriginalItems - 1)
    let isTransitioning = false;

    // --- CÁLCULO DE CENTRALIZAÇÃO INICIAL ---
    const wrapperWidth = galleryWrapper.offsetWidth;
    const centeringAdjustment = (wrapperWidth / 2) - (cardWidth / 2);
    
    // 1. Posição inicial (para o 1º item real, não clone)
    const initialOffset = firstRealItemIndex * scrollDistance; 

    // 2. Posição FINAL de Início (Centralizada)
    const startingTransform = initialOffset - centeringAdjustment;

    // --- Posicionamento Inicial ---
    // Posiciona o slider no primeiro item real, já centralizado
    gallery.style.transition = 'none'; 
    gallery.style.transform = `translateX(-${startingTransform}px)`;

    // Reativa a transição
    setTimeout(() => {
        // Isso volta o transition para o que está no seu globals.css
        gallery.style.transition = `transform ${TRANSITION_DURATION}ms cubic-bezier(0.42, 0, 0.58, 1)`; 
        // A transição no CSS deve ser: transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    }, 50);

    // --- Função de Movimento ---
    const updateActiveClasses = (realIndex) => {
        allItems.forEach((item, i) => {
            // Verifica se é o índice do card real ou um de seus clones. 
            // A lógica de ativação/desativação é complexa com clones, 
            // então vamos simplificar: focar apenas no visual.
            item.querySelector('.card').classList.remove('active', 'inactive');
            if (i === realIndex + firstRealItemIndex) {
                 item.querySelector('.card').classList.add('active');
            } else {
                 item.querySelector('.card').classList.add('inactive');
            }
        });
    };

    const moveGallery = (direction) => {
        if (isTransitioning) return;
        isTransitioning = true;
        
        const targetIndex = currentIndex + direction; // O próximo índice real

        // 1. Calcula o Transform
        const targetCardIndex = targetIndex + firstRealItemIndex;
        const targetOffset = (targetCardIndex * scrollDistance) - centeringAdjustment;
        
        gallery.style.transform = `translateX(-${targetOffset}px)`;
        
        // 2. Lógica de Teletransporte (Infinito)
        setTimeout(() => {
            let nextRealIndex = targetIndex;

            if (targetIndex >= totalOriginalItems) {
                // Fim da galeria -> Teleporta para o início
                nextRealIndex = 0;
                
                gallery.style.transition = 'none';
                const teleportOffset = (0 + firstRealItemIndex) * scrollDistance - centeringAdjustment;
                gallery.style.transform = `translateX(-${teleportOffset}px)`;

            } else if (targetIndex < 0) {
                // Início da galeria -> Teleporta para o final
                nextRealIndex = totalOriginalItems - 1;
                
                gallery.style.transition = 'none';
                const teleportOffset = (nextRealIndex + firstRealItemIndex) * scrollDistance - centeringAdjustment;
                gallery.style.transform = `translateX(-${teleportOffset}px)`;
            }

            currentIndex = nextRealIndex;
            
            // Reativa a transição e permite o próximo clique
            setTimeout(() => {
                gallery.style.transition = `transform ${TRANSITION_DURATION}ms cubic-bezier(0.42, 0, 0.58, 1)`;
                isTransitioning = false;
            }, 50);
            
            // Update visual após o movimento
            updateActiveClasses(currentIndex);
        }, TRANSITION_DURATION);
    };
    
    // Garante que a transição visual inicial aconteça
    updateActiveClasses(currentIndex);


    // --- Event Listeners ---
    arrowRight.addEventListener('click', () => moveGallery(1));
    arrowLeft.addEventListener('click', () => moveGallery(-1));
    
    // Opcional: Recalcula o centro ao redimensionar a janela (muito importante para responsividade)
    window.addEventListener('resize', () => {
        // Para simplificar, recarregamos a página ou re-inicializamos
        // Mas para evitar bugs, use uma função de debounce ou chame a lógica de centralização novamente aqui.
        // Por exemplo: location.reload();
    });
});