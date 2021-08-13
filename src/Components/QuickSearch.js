import React from 'react';
import '../Styles/Home.css';
import breakfast from '../assets/breakfast.jpg';
import lunch from '../assets/lunch.jpg';
import snacks from '../assets/snacks.png';
import dinner from '../assets/dinner.png'
import drinks from '../assets/drinks.png';
import nightlife from "../assets/nightlife.png";
import QuickSearchItem from './QuickSearchItem';

class QuickSearch extends React.Component {

    render() {
        const { mealtypes } = this.props;
        return (
            <div>
                <div className="quicksearch">
                    <p className="quicksearchHeading">
                        Quick Searches
                        </p>
                    <p className="quicksearchSubHeading">
                        Discover restaurants by type of meal
                        </p>
                    <div className="container-fluid">
                        <div className="row">
                            {mealtypes.map((item) => {
                                return <QuickSearchItem id={item.meal_type} name={item.name} content={item.content} image={item.image} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickSearch;