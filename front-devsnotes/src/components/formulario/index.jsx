import Button from './button'
import style from './style.css'

const Form = (props)=>{


    const submitForm = (event)=>{
        event.preventDefault()
        let tarefa = document.querySelector('#task')
        console.log(tarefa.value)

    }

    return(
        <form >
            <input type="text" id="task" name="tarefa" placeholder="testando input"/>
            <Button title="Add" type="submit" class="btn-add" onClick={submitForm}/>
            <Button title="Del" type="submit" class="btn-del" onClick={submitForm}/>
            <Button title="Edit" type="submit" class="btn-edit" onClick={submitForm}/>
        </form>
    )
}


export default Form