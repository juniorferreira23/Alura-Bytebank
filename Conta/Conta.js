import {Cliente} from "../Cliente.js"

export class Conta{
    constructor(agencia, cliente, saldoInicial){
        if(this.constructor == Conta){
            throw new Error('Você não deveria instaciar um objeto dessa Class diretamente, pois ele é uma Class abstrata')
        }
        this._agencia = agencia
        this._cliente = cliente
        this._saldo = saldoInicial
        
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){
       throw new Error('O metodo sacar da conta é abstrato')
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor
        if(valorSacado <= this._saldo){
            this._saldo -= valorSacado
            return valorSacado
        }
    }

    depositar(valor){
        if(valor <= 0){
            return
        }
        this._saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}