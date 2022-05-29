
import { useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import styles from '../../styles/Works.module.css'

import Temp01 from '../works/temp/Temp01';
import Temp02 from '../works/temp/Temp02';
import Temp03 from '../works/temp/Temp03';
import Example01 from '../works/Example01';


const Test04 = () => {

    return ( 
        <>
        <div className={styles.work_page}>
            <Temp01 ><Example01/></Temp01>
        </div>
        <div className={styles.work_page}>
            <Temp02 ><Example01/></Temp02>
        </div>
        <div className={styles.work_page}>
            <Temp03 ><Example01/></Temp03>
        </div>
        </>
     );
}
 
export default Test04;
