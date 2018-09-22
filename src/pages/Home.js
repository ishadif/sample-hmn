import React, {Component} from 'react';
import Product from '../components/ProductThumb';

class Home extends Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{maxWidth: '190px'}}>
                    <Product />
                </ div>
            </ div>
        )
    }
}

export default Home