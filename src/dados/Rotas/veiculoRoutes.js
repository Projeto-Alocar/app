
const getByCidade = async(cidade)=>{
    const res = await fetch(`http://192.168.0.200:5000/veiculos?cidade=${cidade}`)
    .then(response => {
        if(response.status!=200){
            return null
        }
        return response.json()
    })
    .catch(error => {return null});
    return res
}
const getByDono = async(id)=>{
    const res = await fetch(`http://192.168.0.200:5000/veiculos?idDono=${id}`)
    .then(response => {
        if(response.status!=200){
            return null
        }
        return response.json()
    })
    .catch(error => {return null});
    return res
}
const setVehicle = async(veiculo)=>{
    const res = await  fetch(`http://192.168.0.200:5000/veiculos`,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(veiculo),
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
const UpdateVehicle = async(id,veiculo)=>{
    var res = false
    res = await  fetch(`http://192.168.0.200:5000/veiculos/${id}`,{
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(veiculo),
    })
    .then(response => {
        if(response.ok){
            return true
        }else{
            return false
        }
    })
    .catch(error => { return false });
    return res;
}
const deleteVehicle = async(id)=>{
    var res = false
    await  fetch(`http://192.168.0.200:5000/veiculos/${id}`,{
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if(response.ok){
            res = true
        }else{
            res = false
        }
    })
    return res
}

module.exports={
    getByCidade,
    getByDono,
    setVehicle,
    deleteVehicle,
    UpdateVehicle
}

