
const getLogin=async(doc,senha)=>{
    const res = await fetch(`http://192.168.0.200:5000/proprietarios?Doc=${doc}&Senha=${senha}`)
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
    const res = await fetch(`http://192.168.0.200:5000/proprietarios`, {
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
    getLogin,
    setRegister
}

    