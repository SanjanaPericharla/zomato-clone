import React from 'react';
import '../Styles/Home.css';
import Wallpaper from './Wallpaper';
import QuickSearch from './QuickSearch';
import axios from 'axios';
import QuickSearchItem from './QuickSearchItem';


class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            locations:[],
            mealtypes: []
        }
    }
    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:6504/api//cityList',
            headers : {'Content-Type' : 'application/json'}
        }).then(res => this.setstate({locations : res.data.city}))
        .catch(err => console.log(err));

        axios({
            method: 'GET',
            url: 'http://localhost:6504/api//mealtype',
            headers : {'Content-Type' : 'application/json'}
        }).then(res => this.setstate({mealtypes : res.data.mealtype}))
        .catch(err => console.log(err));
       
    }
    
    render(){
        const {locations,mealtypes} = this.state;
        return(
            <React.Fragment>
             <Wallpaper locations = {locations}/>
             <QuickSearch mealtypes = {mealtypes}/>
             <QuickSearchItem mealtype = {mealtypes}/>
             </React.Fragment>  

        )
    }
}
export default Home;