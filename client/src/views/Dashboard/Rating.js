import React from 'react';
import axios from 'axios';

export default class Rating extends React.Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        axios.get('/api').then(res => {
            console.log(res);
            this.setState({persons: res.data});
        });
    }

    render() {
        return (
            <div>
                {this.state.persons.map(person => <div>{person.rating}</div>)}
            </div>
        );

    }
}