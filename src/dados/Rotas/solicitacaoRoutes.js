import {ROTA_API,PORT_API} from '@env'

const getByIdPoprietario = async(id)=>{
    const res = await fetch(`http://${ROTA_API}:${PORT_API}/solicitacoes?idProprietario=${id}`)
    .then(response => {
        if(response.status!=200){
            return null
        }
        return response.json()
    })
    .catch(error => {return null});
    return res
}
const getByIdUsuario = async(id)=>{
    const res = await fetch(`http://${ROTA_API}:${PORT_API}/solicitacoes?idUsuario=${id}`)
    .then(response => {
        if(response.status!=200){
            return null
        }
        return response.json()
    })
    .catch(error => {return null});
    return res
}

module.exports={
    getByIdPoprietario,
    getByIdUsuario
}

