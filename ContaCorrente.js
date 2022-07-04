import { Conta } from "./Conta.js";

// a classe conta corrente extende/herda/fazendo uma herança da classe conta, pega tudo que foi definido lá para usar aqui, assim a classe Conta será a classe mãe
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        // super: chama o construtor da classe pai
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    teste(){
        // chama o método teste que está na classe Conta
        super.teste();
        console.log("teste na classe ContaCorrente");
    }

    // esse método sacar está sobreescrevendo o comportamento de sacar da classe mãe Conta
    sacar(valor){
        // ao sacar de uma conta corrente será cobrado uma taxa de 10%
        let taxa = 1.1;
        // posso usar o método privado sacar por conta que herdo a classe Conta 
        return this._sacar(valor, taxa);
    }
}
