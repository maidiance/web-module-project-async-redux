import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMonster } from '../actions';

const Coffee = ({ dispatch }) => {
    useEffect(() => {
        dispatch(getMonster());
    }, []);
    return (
        <div className='container'>
            <h2>Monster Title</h2>
            {/* <img src={} alt={}/> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        monster: state.monster,
    }
}
export default connect(mapStateToProps)(Coffee);