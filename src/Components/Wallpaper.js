import React from 'react';
import '../Styles/Home.css';
import img from '../assets/homepageimg.png';
import breakfast from '../assets/breakfast.jpg';
import lunch from '../assets/lunch.jpg';
import snacks from '../assets/snacks.png';
import dinner from '../assets/dinner.png'
import drinks from '../assets/drinks.png';
import nightlife from "../assets/nightlife.png";

class Wallpaper extends React.Component{

    render(){
        const {locations} = this.props;
        return(
            <div>
                <img src= {img} style={{width:'100%',height:'450px',margin:'auto'}}/>
                    <div>
                    <div className="logo">
                    <p>e!</p>
                </div>
                <div className="headings">
                    Find the best restaurants, cafes, bars
                </div>
                <div className="locationSelector">
                    <select className="locationDropdown">
                        <option value="0" selected disabled>Please select a city</option>
                        {locations.map((item,index) => {
                                return <option key = {index} value = {item.name}>{item.name}</option>
                            })}
                    </select>
                <div>
                <input className="restaurantsinput" type="text" placeholder="Please Enter Restaurant Name"/>
                <span className="glyphicon glyphicon-search search"></span>
            </div>
        </div>
    </div>
    </div>
        )
    }
}
export default Wallpaper;