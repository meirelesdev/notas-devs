import style from './style.css'

const Button = (props)=> <button onClick={props.onClick} className={props.class} type={props.type}>{props.title}</button>


export default Button