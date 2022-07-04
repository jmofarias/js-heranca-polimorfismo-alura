import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
    constructor(nome, salario, cpf, bonificacao){
        super(nome, salario, cpf, bonificacao);
        this._bonificacao = 1.1;
    }
}