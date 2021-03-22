import { Cliente } from "../Cliente.js";

export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Ação não permitida")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this.conta = this.geraconta()
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }


    geraconta() {
        return Math.floor(Math.random() * (9999 - 1000) + 1000)
    }

    sacar(valor) {
        //método abstrato
        throw new Error("O método sacar não foi implementado")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado
        }
        return 0
    }

    depositar(valor) {
        if (valor > 0){
           this._saldo += valor
        } 
        return
    }

    transferir(valor, conta) {
        if (valor < this._saldo){
            this._transferencia(valor)
            conta.depositar(valor)
        }
    }
    
    _transferencia(valor){
        const taxa = 1
        this._sacar(valor, taxa)
    }

}