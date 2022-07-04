export class SistemaAutenticacao{
    // retorna se a senha do funcionario é igual a que foi cadastrada
    // método estático: não pode ser feito em uma instância da classe 
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}

// ser autenticavel significa ter o método autenticar