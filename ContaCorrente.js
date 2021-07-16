import { Cliente } from "./Cliente.js"; //Teve que ser importado o modulo "Cliente" devido a proteção de dados, que foi feita com o "set cliente" fazendo a verificação com "instanceof"

export class ContaCorrente{ //"export", disponibilizando exportação para outros arquivos js, para criar um modulo basta colocar "class + nome do modulo {caracteristicas dentro do bloco}"

    static numeroDeContas = 0 //"static" é uma variavél/atributo estatico que referece a class e não as objetos, pois eles são individuais e dentro do "constructor" eu faço a chamada da class.numeroDeContas++. Para que toda vez que for construido uma nova conta, o contado da +1.

    agencia;    //Caracteristicas do modulo
    _cliente;
    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields //É uma proposta que quando usar "#" O elemento se torna privado e não pode ser alterado por fora. Mas ainda não foi totalmente implementadoe aceito.
    _saldo = 0; //"_" uma indicação que o elemento é privado, mas é só de escopo, pois na verdade ainda da para altera-lo por fora, "= 0" já atribuindo um valor inicial na abertura de conta.


    //OBSERVAÇÃO PARA USAR O SET E GET PRECISA DEIXAR O ATRIBUTO PRIVADO "_ATRIBUTO".
    set cliente(novoValor){ //set(Acessor de atribuição) cliente para atribuir um valor nele, precisa passar pela verificação
        if(novoValor instanceof Cliente){ //verificação, se novoValor tiver a mesma intancia do modulo Cliente pode ser executado atribuição do valor.
            this._cliente = novoValor
        }
        
    }

    get cliente(){  //get(Acessor de pegar) para conseguir pegar o dado.
        return this._cliente //returnando o dado
    }

    get saldo(){ //usando o "get" para disponibilizar o saldo, mas como só tem um get sem um set, não é possivel atribuir um novo valor no "_saldo". Ou seja não pode ser alterado, assim protegendo os dados.
        return this._saldo
    }

    constructor(agencia, cliente){
        this.agencia = agencia
        this.cliente = cliente //Aqui ao invés de usar "_cliente" que é a caracteristica/atributo, usamos o "Acessor cliente()", pois o cliente() já esta fazendo o teste de verificação, para só aceitar uma atribuição do "intanceof Clinte". Lembrando que "Acessor" não precisa de "()".
        ContaCorrente.numeroDeContas++ //Ligado ao static, que referice diretamente com a class, dando o comando de contador.
    }




    sacar(valor){  //Metodos do modulo, são colocados dentro do proprio modulo e não precisa colocar "function" aparentemente.
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) //Uma boa prática é fazer verificação que tudo que não pode conter primeiro.
        {
            return;
        } 
        this._saldo += valor;           
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)

    }
}
