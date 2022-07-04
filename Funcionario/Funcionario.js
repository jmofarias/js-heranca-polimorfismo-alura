export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this.salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        // senha que vai ser cadastrada depois
        this._senha;
    }

    autenticar(senha){
        return senha == this._senha; 
    }

    // cadastrando senha do funcionário, só consigo atribuir uma senha por aqui
    cadastrarSenha(senha){
        this._senha = senha;
    }
}

// polimorfismo: propriedade dos objetos tomarem várias formas, pegar um funcionário genérico e conseguir reutilizar ele em outras classes é chamado polimorfismo; diferentes classes tratadas da mesma forma