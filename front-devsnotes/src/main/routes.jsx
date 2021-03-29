
import { Switch, Route } from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';

export default props =>(        
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/todos">
                <Home/>
            </Route>
            <Route path="/about" >
                <About/>
            </Route>
        </Switch>        
    )