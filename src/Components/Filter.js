import React from 'react';
import '../Styles/Search.css';
import breakfast from '../assets/breakfast.jpg';
import axios from 'axios';

class Filter extends React.Component{
    constructor () {
        super();
        this.state = {
            restaurantList : [],
            pageCount : [],
            location_id : undefined,
            cuisine_id : undefined,
            mealtype_id : undefined,
            hcost : undefined,
            lcost : undefined,
            page: undefined,
            sort : 1

        }
    }
    /*handleClick = () => {
        const Id = '610a7fd7c0154002bceb950b';
        this.props.history.push(`/details/${Id}`);
    }*/
    componentDidMount() {
        
        const params = this.props.location.search;

        const filterObj = {
            "mealtype_id" : 2
            
        }
        axios({
            method: 'POST',
            url: 'http://localhost:6504/api/restaurantfilter',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj

        })
        .then(res => this.setState({restaurantList : res.data.restaurant,pageCount : res.data.pageCount}))
            .catch(err=> console.log(err))
    }

   handlecuisineChange = (cuisineId) => {
    const filterObj = {
        "cuisine_id" : Number(cuisineId)
    }
    axios({
        method: 'POST',
        url: 'http://localhost:6504/api/restaurantfilter',
        headers: { 'Content-Type': 'application/json' },
        data: filterObj

    })
    .then(res => this.setState({restaurantList : res.data.restaurant,pageCount : res.data.pageCount}))
        .catch(err=> console.log(err))

   }
   onsortChange = (Id) => {
    const filterObj = {
        "mealtype_id" : 2,
        "sort" : Number(Id)
        
        
    }
    axios({
        method: 'POST',
        url: 'http://localhost:6504/api/restaurantfilter',
        headers: { 'Content-Type': 'application/json' },
        data: filterObj

    })
    .then(res => this.setState({restaurantList : res.data.restaurant,pageCount : res.data.pageCount}))
        .catch(err=> console.log(err))


   }
 
    render(){
        const{restaurantList,pageCount} = this.state;
        return(
            <div>
                <div>
        <div id="myId" className="heading">Breakfast Places in Mumbai</div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4 filter-options">
                    <span className="glyphicon glyphicon-th-list toggle-span" data-toggle="collapse"
                        data-target="#demo"></span>
                    <div id="demo" className="collapse show">
                        <div className="filter-heading">Filters</div>
                        <div className="Select-Location">Select Location</div>
                        <select className="Rectangle-2236">
                            <option>Select</option>
                            <option>Delhi</option>
                        </select>
                        <div className="Cuisine">Cuisine</div>
                        <div style={{display: 'block'}}>
                            <input type="checkbox" value = "1" onChange = {() => this. handlecuisineChange('1')} />
                            <span className="checkbox-items">North Indian</span>
                        </div>
                        <div style={{display: 'block'}}>
                            <input type="checkbox" value = "2" onChange = {() => this. handlecuisineChange('2')}/>
                            <span className="checkbox-items">South Indian</span>
                        </div>
                        <div style={{display: 'block'}}>
                            <input type="checkbox" value = "3" onChange = {() => this. handlecuisineChange('3')}/>
                            <span className="checkbox-items">Chineese</span>
                        </div>
                        <div style={{display: 'block'}}>
                            <input type="checkbox"value = "4" onChange = {() => this. handlecuisineChange('4')} />
                            <span className="checkbox-items">Fast Food</span>
                        </div>
                        <div style={{display: 'block'}}>
                            <input type="checkbox"value = "5" onChange = {() => this. handlecuisineChange('5')} />
                            <span className="checkbox-items">Street Food</span>
                        </div>
                        <div className="Cuisine">Cost For Two</div>
                        <div style={{display: 'block'}}>
                            <input type="radio" />
                            <span className="checkbox-items">Less than ₹500</span>
                        </div>
                        <div style={{display: 'block'}}>
                            <input type="radio" />
                            <span className="checkbox-items">₹500 to ₹1000</span>
                        </div>
                        <div style={{display: 'block'}}>
                            <input type="radio" />
                            <span className="checkbox-items">₹1000 to ₹1500</span>
                        </div>
                        <div style={{display: 'block'}}>
                            <input type="radio" />
                            <span className="checkbox-items">₹1500 to ₹2000</span>
                        </div>
                        <div style={{display: 'block'}}>
                            <input type="radio" />
                            <span className="checkbox-items">₹2000 +</span>
                        </div>
                        <div className="Cuisine">Sort</div>
                        <div style={{display: 'block'}}>
                            <input type="radio" name = "sort" onChange = {() => this.onsortChange(1)}/>
                            <span className="checkbox-items">Price low to high</span>
                        </div>
                        <div style={{display: 'block'}}>
                            <input type="radio" name = "sort" onChange = {() => this.onsortChange(-1)}/>
                            <span className="checkbox-items">Price high to low</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                    {restaurantList.length > 0 ? restaurantList.map((item) => {
                           return <div className="Item">
                            <div className="row pl-1">
                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <img className="img" src={breakfast} />
                                </div>
                                <div className="col-sm-8 col-md-8 col-lg-8">
                                    <div className="rest-name">{item.name}</div>
                                    <div className="res-location">{item.location}</div>
                                    <div className="rest-address">{item.address}</div>
                                </div>
                            </div>
                            <hr />
                            <div className="row padding-left">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="rest-address">CUISINES : Bakery</div>
                                    <div className="rest-address">COST FOR TWO : {item.cost} </div>
                                </div>
                            </div>
                        </div> 
                     }) : <div class = "nodata"> No Data Found </div>}
                    
                    <div className="pagination">
                        <a href="#">&laquo;</a>
                        {pageCount.map((item) => {
                            return <a href="#">{item+1}</a>
                        })}
                        <a href="#">&laquo;</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}
export default Filter;