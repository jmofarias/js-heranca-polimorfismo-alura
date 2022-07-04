// Classe abstrata: só funciona para ser herdada, não podemos instanciar
export class Conta {
    constructor(saldoInicial, cliente, agencia){
        // this.constructor: pega a classe que faz referência a esse construtor
        if(this.constructor == Conta){
            // throw: lançar; new: novo; Erro: erro
            // lança um novo erro e para a execução do programa
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // acessor que ao passar o cliente só vai aceitar quando ele for uma instância de Cliente
    // vai verificar o cliente, ver se o valor desse cliente é uma instância de Cliente
    set cliente(novoValor){
        // instanceof: verifica se o objeto é uma instância nesse caso da classe Cliente e se for atribui esse valor para o atributo privado cliente
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // bloqueando o método sacar para que ele não seja chamado diretamente
    // método abstrato: não deve ser chamado diretamente, ele é feito para ser sobrescrito
    // nao foi definido nada porque cada conta terá o seu método sacar e lá será tratado de forma específica para cada conta
    sacar(valor){
        // ao sacar de uma conta poupança não será cobrado uma taxa de 10%, apenas na conta corrente
        // let taxa = 1;
        // chamando o método sacar privado e retornando o que ele me retornar
        // return this._sacar(valor, taxa);

        // lançando um erro quando ela for chamada diretamente
        throw new Error("O método sacar da conta é abstrato");
    }

    // método privado que vai usar a lógica que estava duplicada nessa classe e na classe ContaCorrente e executar nesse método
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    teste(){
        console.log("teste na classe Conta");
    }
}