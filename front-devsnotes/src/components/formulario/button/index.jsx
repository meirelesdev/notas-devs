import style from './style.css'
import If from '../../if/if'


export default props => (
    <If test={!props.hide}>
        <button 
            onClick={props.onClick} 
            className={props.class} 
            type={props.type}>
                {props.title}
        </button> 
    </If>
)
 
    