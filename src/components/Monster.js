import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMonster } from '../actions';

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
    .info {
        width: 90%;
        display: flex;
        justify-content: space-around;
    }
    .stats {
        width: 90%;
        display: flex;
        justify-content: space-around;
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
        width: 90%;
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
                    <p>Immunities: </p>
                    <p>Resistances: </p>
                    <p>Vulnerabilities: </p>
                </span>
                <span className='actions block'>
                    <p></p>
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