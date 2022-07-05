export class SistemaAutenticacao{
    // retorna se a senha do funcionario é igual a que foi cadastrada
    // método estático: não pode ser feito em uma instância da classe, eu não preciso de uma instância para chamar ele, posso chamar ele direto pela classe
    static login(autenticavel, senha){
        // verificando se no meu sistema de autenticação tiver um método ehAutenticavel e ele recebendo o objeto autenticavel e se for verdadeiro eu entro; verificando se o método existe
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }

        return false;
    }

    // verificando se existe um método/função autenticar dentro desse objeto
    static ehAutenticavel(autenticavel){
        // verificando se a chave autenticar existe dentro do objeto autenticavel e se o meu autenticavel.autenticar é do tipo função
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}

// ser autenticavel significa ter o método autenticar
// duck type: se ele tem a propriedade que eu quero usar eu vou usar ele, não importa o resto