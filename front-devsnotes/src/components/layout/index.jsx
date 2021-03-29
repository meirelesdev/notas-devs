
import Header from '../header/Header'
import Footer from '../footer'


 export default props => {
    return(
        <>
            <Header title="Daniel Meireles"/>
                {props.children}
                <div>
                    <div id="tasks"></div>
                </div>
            <Footer/>
        </>
    )
}