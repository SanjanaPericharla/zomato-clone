import React from 'react';
import {Tab, Tabs, TabList,TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 import homepage from"../assets/homepageimg.png";
 import '../Styles/Details.css';
 import axios from 'axios';
 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



class Details extends React.Component{
    constructor(){
        super();
        this.state = {
            restaurants: {}

        }
    }
    componentDidMount(){
        const restaurantId = this.props.location.search;
        axios({
            method: 'GET',
            url: 'http://localhost:6504/api//getResById/' + restaurantId,
            headers: {'Content-Type': 'application/json'}
        }).then(res => this.setState({restaurants: res.data.restaurant}))
        .catch(err => console.log(err));

    }
    render(){
        const{restaurants} = this.props;
        return (
        <div>
            <div>
            
            </div>
            
               <Tabs>
                   <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Contacts</Tab>
                    </TabList>
    
                     <TabPanel>
                        <h1>About this place</h1>
                        
                        <h2>Average Cost</h2>
                        <h3>{restaurants.cost}</h3>
                    </TabPanel>
                     <TabPanel>
                     <h1>Phone Number</h1>
                         <h3>{restaurants.contact_number}</h3>
                        <h1></h1>
                            <h3></h3>
                    </TabPanel>
                </Tabs> 
            </div>
        )
    }
}
export default Details;
        