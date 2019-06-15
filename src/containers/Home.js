import React, { Component } from 'react';
import MyList from '../components/MyList';

class Home extends Component {
    render() {
        return (
        <div>
            <h1>HOME!</h1>
            <MyList />
        </div>);
    }
}

export default Home;