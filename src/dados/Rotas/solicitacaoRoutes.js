const getByIdPoprietario = async(id)=>{
    const res = await fetch(`http://192.168.0.200:5000/solicitacoes?idProprietario=${id}`)
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
    const res = await fetch(`http://192.168.0.200:5000/solicitacoes?idUsuario=${id}`)
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

