import axios from 'axios'

const URL = 'http://localhost/pessoal/devsnotesAPI/api'

export default props => {

    const endpoint = props.endpoint ? props.endpoint : '/'    
    if(props.method == 'POST'){        
        axios.post(URL+endpoint, {...props.body})
            .then(res => console.log(res))
    }
    if(props.method === 'GET'){
        axios.get(URL+endpoint )
    }
}