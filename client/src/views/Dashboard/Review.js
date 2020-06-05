import React from 'react';
import axios from 'axios';

export default class Review extends React.Component {
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
                {this.state.persons.map(person => <div>{person.reviews}</div>)}
            </div>
        );

    }
}