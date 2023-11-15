import {ROTA_API,PORT_API} from '@env'

const consulta = async(cpf,dataNascimento,nomeMae) => {
    try{
        const res = await fetch(`http://${ROTA_API}:${PORT_API}/eleitor?cpf=${cpf}&dtNascimento=${dataNascimento}&mae=${nomeMae}`)
        .then(response => {
            if(response.status!=200){
                return null
            }
            return response.json()
        })
        .catch(error => {return null});
        return res
    }catch{
        return "Erro!"
    }   
}
module.exports = {
    consulta
}