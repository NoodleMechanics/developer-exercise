import React, { Component } from 'react';
import './../App.css';

class Todos extends Component {
    render() {
        return this.props.revenueArray.map((revenueComp) => (
                <h6 className="text-center" key={revenueComp.name}>{revenueComp.name}</h6>
            ));
    }
}

export default Todos;