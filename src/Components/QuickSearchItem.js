import React from 'react';
import QuickSearch from './QuickSearch';
import breakfast from "../assets/breakfast.jpg";
import '../Styles/Home.css';
import {withRouter} from'react-router-dom';

class QuickSearchItem extends React.Component{
    handleclick = (Id) => {
        this.props.history.push(`/filter/?mealtype_id = ${Id}`);
    }
    render(){
        const{id,content, name} = this.props;
        return(
                <div className="col-sm-12 col-md-12 col-lg-4" onClick = {() => this.handleclick(id)}>
                   <div className="tileContainer">
                       <div className="tileComponent1">
                           <img src= {breakfast} height="150" width="140" />
                       </div>
                       <div className="tileComponent2">
                           <div className="componentHeading">
                               {name}
                           </div>
                           <div className="componentSubHeading">
                               {content}
                           </div>
                       </div>
                   </div>
               </div>
        )

        
    }
}
export default  withRouter(QuickSearchItem);