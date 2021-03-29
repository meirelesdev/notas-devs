import Button from './button'
import './style.css'

export default props => (
        <form >
            <div>
                <label htmlFor="title">Titulo</label>
                <input type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Titulo da tarefa" 
                        value={props.title}
                        onChange={props.handleChange}
                        />
                <label htmlFor="task">Descrição</label>
                <input type="text" 
                        id="task" 
                        name="body" 
                        placeholder="Descrição da tarefa" 
                        value={props.body}
                        onChange={props.handleChange}
                        />
            </div>
            <Button hide={false} title="Add" type="submit" class="btn-add" onClick={props.handleAdd} />
        </form>
    )
