import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


// const cliente1 = new Cliente("Ricardo", 11122233309);
// // const cliente2 = new Cliente("Alice", 88822233309);


// const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// contaPoupanca.sacar(10);

// não faz sentido instânciar a própria conta, não deveria ser possível
// ao fazer essa instancia e rodar o index será mostrado a console.log definido na classe conta
// const conta = new Conta(0, cliente1, 1002);

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);

// console.log(contaSalario);
// console.log(conta);

// console.log(contaPoupanca);

// console.log(contaCorrenteRicardo);

const diretor = new Diretor("Rodrigo", 10000, 12535296789);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo", 5000, 12344321556);
gerente.cadastrarSenha("1234");

const cliente = new Cliente("Lais", 48812380988, "321");

const gerenteestaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorestaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteestaLogado = SistemaAutenticacao.login(cliente, "321");

// console.log(gerenteestaLogado, diretorestaLogado);
console.log(gerenteestaLogado, diretorestaLogado, clienteestaLogado);


