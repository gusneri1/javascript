// Defina a lista de funcionários
const funcionarios = [
  { nome: 'Funcionário 1', folgaSemanal: ['Sábado', 'Domingo'] },
  { nome: 'Funcionário 2', folgaSemanal: ['Segunda-feira', 'Terça-feira'] },
  { nome: 'Funcionário 3', folgaSemanal: ['Quarta-feira'] },
  { nome: 'Funcionário 4', folgaSemanal: ['Quinta-feira'] },
  { nome: 'Funcionário 5', folgaSemanal: ['Sexta-feira'] }
];

// Defina os dias da semana
const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

// Função para gerar uma escala de serviço
function gerarEscala() {
  // Crie um objeto para armazenar as informações da escala
  const escala = {};

  // Percorra cada dia da semana
  for (let i = 0; i < diasSemana.length; i++) {
    const dia = diasSemana[i];

    // Filtrar funcionários disponíveis para o dia
    const funcionariosDisponiveis = funcionarios.filter(funcionario => !funcionario.folgaSemanal.includes(dia));

    // Encontrar o funcionário com a maior folga disponível
    const funcionarioEscalado = funcionariosDisponiveis.reduce((anterior, atual) =>
      anterior.folgaSemanal.length > atual.folgaSemanal.length ? anterior : atual
    );

    // Atribuir o funcionário escalado à escala
    escala[dia] = funcionarioEscalado.nome;
  }

  // Retornar a escala gerada
  return escala;
}

// Exemplo de uso
const escalaServico = gerarEscala();
console.log(escalaServico);