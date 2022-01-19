import React from 'react';

export const getDamageInfo = (monster, damageInfo) => {
    if(monster[damageInfo] && monster[damageInfo].length > 0){
        return (
            monster[damageInfo].map(item => {
                <p>{item}</p>
            })
        )
    } else {
        return <p>None</p>;
    }
}