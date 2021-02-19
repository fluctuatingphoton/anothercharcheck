import React from 'react'
import { Tooltip } from "antd";

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/ 

function Char45View({character}) {
    return (
        <Tooltip title={character.name}>
            <img src={`images/character_base/${character.id}_0.png`} 
            style={{width:70}}/>
        </Tooltip>
    )
}

export default Char45View
