
const getLogin = async(cpf,senha)=>{
    const res = await fetch(`http://192.168.0.200:5000/usuarios?CPF=${cpf}&Senha=${senha}`)
    .then(response => {
        if(response.status!=200){
            return null
        }
        return response.json()
    })
    .catch(error => {return null});
    return res
}

const setRegister=async(usuario)=>{
    const res = await fetch(`http://192.168.0.200:5000/usuarios`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
    })
    .then(response => {
        if(response.status!=201){
            return null
        }
        return response.json()
    })
    .catch(error => { return null });
    return res;
}

module.exports={
    getLogin,
    setRegister
}

