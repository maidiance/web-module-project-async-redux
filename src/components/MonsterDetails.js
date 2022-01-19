import React from 'react';

export const getDamageInfo = (monster, damageInfo) => {
    if(monster[damageInfo] && monster[damageInfo].length > 0){
        return (
            monster[damageInfo].map(info => {
                <p>{info}</p>
            })
        )
    } else {
        return <p>None</p>;
    }
}

export const getActions = (monster) => {
    if(monster.actions && monster.actions.length > 0){
        return(
            monster.actions.map(action => {
                return(
                    <div className='actionDetail block'>
                        <p>{action.name}</p>
                        <p>{action.desc}</p>
                    </div>
                )
            })
        )
    } else {
        return <p>None</p>;
    }
}