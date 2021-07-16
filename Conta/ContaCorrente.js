import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0

    constructor(agencia, cliente){
        super(agencia, cliente, 0)
        ContaCorrente.numeroDeContas++
    }

    sacar(valor){
        const taxa = 1.1
        return this._sacar(valor, taxa)
    }

}