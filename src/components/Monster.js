import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMonster } from '../actions';

const Monster = ({ monster, dispatch }) => {
    useEffect(() => {
        dispatch(getMonster());
    }, []);
    return (
        <div className='container'>
            <h2>{monster.name}</h2>
            <div className='details'>
                <span className='info block'>
                    <p>CR: {monster.challenge_rating}</p>
                    <p>XP: {monster.xp}</p>
                    <p>Size: {monster.size}</p>
                    <p>Speed:</p>
                    <p>Senses:</p>
                </span>
                <span className='stats block'>
                    <p>STR: {monster.strength}</p>
                    <p>DEX: {monster.dexterity}</p>
                    <p>CON: {monster.constitution}</p>
                    <p>INT: {monster.intelligence}</p>
                    <p>WIS: {monster.wisdom}</p>
                    <p>CHA: {monster.charisma}</p>
                </span>
                <span className='health block'>
                    <p>HP: {monster.hit_points}</p>
                    <p>HD: {monster.hit_dice}</p>
                </span>
                <span className='defense block'>
                    <p>AC: {monster.armor_class}</p>
                    <p>Immunities: </p>
                    <p>Resistances: </p>
                    <p>Vulnerabilities: </p>
                </span>
                <span className='offence block'>
                    <p></p>
                </span>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        monster: state.mob.monster,
    };
};
export default connect(mapStateToProps)(Monster);