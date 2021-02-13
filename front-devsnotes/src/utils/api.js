

const  ajax = (endpont = '', method = 'GET', callback )=>{
    
    const config = {
        api: "http://localhost/pessoal/devsnotesAPI/api"
    }
    
    const myInit = { 
        method: method,
        headers: {},
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(config.api+endpont, myInit)
        .then( res =>{
            if(res.status == 200){
                return res.json()
            }
        } )
        .then(response => {
            callback(response)
        })
        .catch(err => console.log("Erro: "+err))

}

export default ajax