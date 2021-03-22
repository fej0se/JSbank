import { Conta } from "./Conta.js";


export class ContaCorrente extends Conta{

    static numeroContasAbertas = 0

    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.numeroContasAbertas++
    }

    sacar(valor){
        const taxa = 1.1
        this._sacar(valor, taxa)
    }
}

