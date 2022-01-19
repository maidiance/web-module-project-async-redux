import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMonster } from '../actions';
import { getDamageInfo, getActions } from './MonsterDetails';

const StyledDiv = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 2%;
    .details {
        background-color: #b5927c;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        border-style: double;
        border-color: #412f24;
    }
    h2 {
        margin: 0 auto;
        background-color: #4b372a;
        color: #f8f4f2;
        width: 90%;
    }
    .block {
        margin: 0 auto;
    }
    .info {
        background-color: #e6dbd3;
        width: 90%;
        display: flex;
        justify-content: space-around;
    }
    .stats {

        width: 90%;
        display: flex;
        justify-content: space-around;
    }
    .stats p {
        padding 0 2%;
        border-style: solid;
        border-color: #36271e;
    }
    .health {
        width: 90%;
        display: flex;
        justify-content: center;
    }
    .health p {
        margin-left: 2%;
        margin-right: 2%;
    }
    .defense {
        width: 50%;
        display: flex;
        flex-flow: column wrap;
    }
    .actions {
        width: 50%;
        display: flex;
        flex-flow: column wrap;
    }
`

const Monster = ({ monster, dispatch }) => {
    useEffect(() => {
        dispatch(getMonster());
    }, []);
    return (
        <StyledDiv className='container'>
            <h2>{monster.name}</h2>
            <div className='details'>
                <span className='info block'>
                    <p>CR: {monster.challenge_rating}</p>
                    <p>XP: {monster.xp}</p>
                    <p>Size: {monster.size}</p>
                    <p>{monster.alignment}</p>
                </span>
                <span className='stats block'>
                    <p>STR {monster.strength}</p>
                    <p>DEX {monster.dexterity}</p>
                    <p>CON {monster.constitution}</p>
                    <p>INT {monster.intelligence}</p>
                    <p>WIS {monster.wisdom}</p>
                    <p>CHA {monster.charisma}</p>
                </span>
                <span className='health block'>
                    <p>AC: {monster.armor_class}</p>
                    <p>HP: {monster.hit_points}</p>
                    <p>HD: {monster.hit_dice}</p>
                </span>
                <span className='defense block'>
                    <p>Immunities: {getDamageInfo(monster, 'damage_immunities')}</p>
                    <p>Resistances: {getDamageInfo(monster, 'damage_immunities')}</p>
                    <p>Vulnerabilities: {getDamageInfo(monster, 'damage_immunities')}</p>
                </span>
                <span className='actions block'>
                    <p>Actions:</p>
                    {getActions(monster)}
                </span>
            </div>
        </StyledDiv>
    )
};

const mapStateToProps = state => {
    return {
        monster: state.mob.monster,
    };
};
export default connect(mapStateToProps)(Monster);