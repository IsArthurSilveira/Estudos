// Declarando variáveis
var nome = "Arthur";
let idade = 25;
const cidade = "São Paulo";

// Exibindo valores das variáveis
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cidade:", cidade);

// Explicando a diferença entre var, let e const
let explicacaoVar = "A variável 'var' é funcionalmente escopada e pode ser redeclarada e atualizada.";
let explicacaoLet = "A variável 'let' é de escopo de bloco e pode ser atualizada, mas não redeclarada no mesmo escopo.";
let explicacaoConst = "A variável 'const' é de escopo de bloco e não pode ser atualizada nem redeclarada.";

console.log(explicacaoVar); console.log(explicacaoLet); console.log(explicacaoConst);

// Diferença entre string, number e boolean
let exemploString = "Isto é uma string"; // Texto
let exemploNumber = 123; // Número
let exemploBoolean = true; // Booleano (verdadeiro ou falso)

console.log("String:", exemploString);
console.log("Number:", exemploNumber);
console.log("Boolean:", exemploBoolean);

// Exemplos práticos de string
let saudacao = "Olá, mundo!";
let nomeCompleto = nome + " Silva";
let mensagem = `Meu nome é ${nome} e eu moro em ${cidade}.`;

console.log(saudacao); console.log(nomeCompleto); console.log(mensagem);

// Exemplos práticos de number
let soma = 10 + 15;
let subtracao = 30 - 5;
let multiplicacao = 4 * 7;
let divisao = 20 / 4;

console.log("Soma:", soma); console.log("Subtração:", subtracao); console.log("Multiplicação:", multiplicacao); console.log("Divisão:", divisao);

// Exemplos práticos de boolean
let maiorDeIdade = idade >= 18;
let menorDeIdade = idade < 18;
let podeDirigir = idade >= 18 && cidade === "São Paulo";

console.log("Maior de idade:", maiorDeIdade); console.log("Menor de idade:", menorDeIdade); console.log("Pode dirigir:", podeDirigir);