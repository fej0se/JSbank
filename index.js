import {Cliente} from "./Cliente.js"
/*import {ContaCorrente} from "./conta/ContaCorrente.js"
import { ContaPoupanca } from "./conta/ContaPoupanca.js";
import { ContaSalario } from "./conta/ContaSalario.js";

const cliente1 = new Cliente("Felipe", 12345678900);
const cliente2 = new Cliente("Francisco", 12345678900);


const contaFelipe = new ContaCorrente(cliente1, 1);
const contaFrancisco = new ContaSalario(cliente2, 1)

contaFelipe.depositar(1000)
contaFrancisco.depositar(1000)
contaFelipe.transferir(500, contaFrancisco)
contaFrancisco.sacar(50)

console.log(contaFelipe);
console.log(contaFrancisco)
console.log(ContaCorrente.numeroContasAbertas)
*/

import {Gerente} from "./funcionarios/Gerente.js"
import {Diretor} from "./funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Felipe", 20000, 12345678900)
const gerente = new Gerente("Felipe", 10000, 32145678900)
diretor.cadastrarSenha("123")
gerente.cadastrarSenha("8989")

const estaLogado = SistemaAutenticacao.login(diretor, "123456789")
const estaLogado2 = SistemaAutenticacao.login(gerente, "8989")

console.log(estaLogado, estaLogado2)
