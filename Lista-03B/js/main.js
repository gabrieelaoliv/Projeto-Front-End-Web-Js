window.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("opcoes");
    const paragrafo = document.getElementById("resultado");

    const formatarEstudantes = (estudantes) => {
        return estudantes.map(estudante => {
            const total = estudante.notaBim1 + estudante.notaBim2;
            return `${estudante.nome}: ${estudante.notaBim1.toFixed(1)} (bimestre 1) e ${estudante.notaBim2.toFixed(1)} (bimestre 2) = ${total.toFixed(1)}`;
        }).join("<br><br>");
    };

    function renderizar(resultado) {
        paragrafo.innerHTML = resultado;
    };

    function fetchEstudantes() {
        fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
            .then(response => response.json())
            .then(estudantes => {

                menu.addEventListener("change", () => {
                    const opcaoSelecionada = menu.value;

                    switch (opcaoSelecionada) {
                        case "todos":
                            renderizar(formatarEstudantes(estudantes));
                            break;

                        case "homens":
                            renderizar(formatarEstudantes(estudantes.filter(estudante => estudante.sexo === "M")));
                            break;

                        case "mulheres":
                            renderizar(formatarEstudantes(estudantes.filter(estudante => estudante.sexo === "F")));
                            break;

                        case "aprovados":
                            renderizar(formatarEstudantes(estudantes.filter(estudante => (estudante.notaBim1 + estudante.notaBim2) >= 60)));
                            break;

                        case "reprovados":
                            renderizar(formatarEstudantes(estudantes.filter(estudante => (estudante.notaBim1 + estudante.notaBim2) < 60)));
                            break;

                        case "todosAprovados":
                            const todosAprovados = estudantes.every(estudante => (estudante.notaBim1 + estudante.notaBim2) >= 60);
                            renderizar(todosAprovados ? "Sim, todos os alunos foram aprovados." : "Não, nem todos os alunos foram aprovados.");
                            break;

                        case "media":
                            const media = estudantes.reduce((total, estudante) => total + estudante.notaBim1 + estudante.notaBim2, 0) / estudantes.length;
                            renderizar(`Nota média = ${media.toFixed(2)}`);
                            break;

                        default:
                            renderizar("");
                    }

                });
            })
            .catch(err => {
                console.log('Erro ao buscar os dados:', err);
                exibirResultado("Erro ao carregar os dados.");
            });
    }

    fetchEstudantes();
});