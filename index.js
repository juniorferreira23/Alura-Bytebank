import {Cliente} from "./Cliente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {SistemaAutentificacao} from "./SistemaAutentificacao.js"

const diretor = new Diretor("João", 70080090070, 10000)
diretor.cadastrarSenha('12345678')
const gerente = new Gerente("Lucas", 70080090080, 5000)
gerente.cadastrarSenha('123')
const cliente = new Cliente('Larissa', 70080090341, '456')

const diretorEstaLogado = SistemaAutentificacao.login(diretor, '12345678')
const gerenteEstaLogado = SistemaAutentificacao.login(gerente, '123')
const clienteEstaLogado = SistemaAutentificacao.login(cliente, '456')

console.log(diretorEstaLogado, gerenteEstaLogado)
console.log(clienteEstaLogado)