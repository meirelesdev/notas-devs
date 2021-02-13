import { useEffect } from 'react'
import Header from '../header'
import Footer from '../footer'
import Form from '../formulario'
import ajax from '../../utils/api'

 const Layout = (props)=>{

    const showRetorno = (res)=>{
        let divtask = document.querySelector('#tasks')
        divtask.innerHTML = ''
        res.result.forEach(function(task){
            let p = document.createElement('p')
            let title = document.createElement('h2')
            title.innerHTML = task.title
            p.innerHTML = task.body
            divtask.append(title)
            divtask.append(p)
        })
    }

    useEffect(() => {
        ajax( '/','GET', showRetorno)
      }, [])

    return(
        <>
        <Header title="DevsNotes"/>
        <div>
            <Form/>
            <div id="tasks"></div>
        </div>
        <Footer/>
        </>
    )
}
export default Layout