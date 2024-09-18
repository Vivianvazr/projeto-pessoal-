alert("Este projeto é sobre o esporte Handebol e serve para você saber de algumas coisas sobre o esporte.");
let continueProgram = 'sim';  // Inicialmente definir para 'sim' para que entre no loop 'while'
while (continueProgram.toLowerCase() === 'sim') {  // Estrutura de repetição While que verifica se o usuário deseja continuar
    do {
        // Estrutura de repetição Do-While: garante que o menu seja exibido ao menos uma vez
        const option = prompt("Selecione uma opção:\n1. Regras do Handebol\n2. Movimentos do Handebol\n3. História da criação do Handebol");
        // Estrutura Condicional If-Else para verificar a entrada do usuário
        if (option === '1') {
            // Estrutura Switch para lidar com a opção 1: Regras do Handebol
            switch (option) {
                case '1':
                    alert("Você selecionou Regras do Handebol. Aqui estão algumas regras básicas:");
                    // Estrutura de repetição For para exibir uma lista de regras
                    const regras = ["Duração do jogo: 60 minutos", "Cada equipe tem 7 jogadores", "Objetivo: Marcar gols"];
                    for (let i = 0; i < regras.length; i++) {
                        alert(regras[i]);
                    }
                    break;
            }
        } else if (option === '2') {
            // Estrutura Switch para lidar com a opção 2: Movimentos do Handebol
            switch (option) {
                case '2':
                    alert("Você selecionou Movimentos do Handebol. Aqui estão alguns movimentos:");
                    // Estrutura de repetição For para exibir uma lista de movimentos
                    const movimentos = ["Drible", "Passe", "Arremesso"];
                    for (let i = 0; i < movimentos.length; i++) {
                        alert(movimentos[i]);
                    }
                    break;
            }
        } else if (option === '3') {
            // Estrutura Switch para lidar com a opção 3: História do Handebol
            switch (option) {
                case '3':
                    alert("Você selecionou História da criação do Handebol.");
                    alert("O Handebol foi criado por Karl Schelenz, em 1919, na Alemanha. O esporte se espalhou pela Europa e se tornou popular.");
                    break;
            }
        } else {
            // Caso o usuário insira uma opção inválida
            alert("Opção inválida. Por favor, selecione 1, 2 ou 3.");
        }
        // Estrutura de repetição Do-While: continua até que uma opção válida seja selecionada
    } while (option !== '1' && option !== '2' && option !== '3');
    // Perguntar se o usuário quer continuar
    continueProgram = prompt("Deseja selecionar outra opção? (sim/não)");
}
