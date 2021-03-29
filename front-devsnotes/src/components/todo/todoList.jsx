import Button from '../formulario/button'

export default props => {

    const renderRows = () =>{
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo.id}>
                <td >{todo.title}</td>
                <td>{todo.body}</td>
                <td>
                    <Button title="Edit" type="submit" onClick={ () => props.handleEdit(todo) } class="btn-edit" />
                </td>
                <td>
                    <Button title="Del" type="submit" onClick={ () => props.handleRemove(todo) } class="btn-del"  />
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>Body</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}