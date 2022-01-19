import React from 'react';

export const immunities = (monster) => {
    if(monster.damage_immunities && monster.damage_immunities.length > 0){
        return (
            monster.damage_immunities.map(item => {
                <p>{item}</p>
            })
        )
    } else {
        return <p>None</p>;
    }
}

export const resistances = (monster) => {
    if(monster.damage_resistances && monster.damage_resistances.length > 0){
        return (
            monster.damage_resistances.map(item => {
                <p>{item}</p>
            })
        )
    } else {
        return <p>None</p>;
    }
}

export const vulnerabilities = (monster) => {
    if(monster.damage_vulnerabilities && monster.damage_vulnerabilities.length > 0){
        return (
            monster.damage_vulnerabilities.map(item => {
                <p>{item}</p>
            })
        )
    } else {
        return <p>None</p>;
    }
}