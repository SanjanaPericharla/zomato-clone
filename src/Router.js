import {BrowserRouter,Route} from 'react-router-dom';
import react from 'react';
import Home from './Components/Home';
import Filter from './Components/Filter';
import Details from './Components/Details';
import Header from './Components/Header';

const Router = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/filter" component = {Filter}/>
            <Route path = "/details" component = {Details}/>
        </BrowserRouter>
    )
}
export default Router;