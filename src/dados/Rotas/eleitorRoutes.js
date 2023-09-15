const consulta = async(cpf,dataNascimento,nomeMae)=>{
    const res = await fetch(`http://192.168.0.200:5000/eleitor?cpf=${cpf}&dtNascimento=${dataNascimento}&mae=${nomeMae}`)
    .then(response => {
        if(response.status!=200){
            return null
        }
        return response.json()
    })
    .catch(error => {return null});
    return res
}
module.exports = {
    consulta
}