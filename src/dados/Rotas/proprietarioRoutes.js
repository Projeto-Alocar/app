import {ROTA_API,PORT_API} from '@env'

const getById= async(id)=>{
    const res = await fetch(`http://${ROTA_API}:${PORT_API}/proprietarios/${id}`)
    .then(response => {
        if(response.status!=200){
            return null
        }
        return response.json()
    })
    .catch(error => {
        return null});
    return res
}
const getLogin=async(doc,senha)=>{
    const res = await fetch(`http://${ROTA_API}:${PORT_API}/proprietarios?Doc=${doc}&Senha=${senha}`)
    .then(response => {
        if(response.status!=200){
            return null
        }
        return response.json()
    })
    .catch(error => {return null});
    return res
}

const setRegister=async(proprietario)=>{
    const res = await fetch(`http://${ROTA_API}:${PORT_API}/proprietarios`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(proprietario),
    })
    .then(response => {
        if(response.status!=201){
            return null
        }
        return response.json()
    })
    .catch(error => {
        return null
    });
    return res;
}
module.exports={
    getById,
    getLogin,
    setRegister
}

    