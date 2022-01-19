import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCoffee } from './../actions';

const Coffee = ({ dispatch }) => {
    useEffect(() => {
        dispatch(getCoffee());
    }, []);
    return (
        <div className='container'>
            <h2>Coffee Title</h2>
            {/* <img src={} alt={}/> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        coffee: state.coffee,
    }
}
export default connect(mapStateToProps)(Coffee);