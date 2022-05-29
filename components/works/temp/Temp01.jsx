import { useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import styles from '../../../styles/Works.module.css'
import Example01 from '../Example01';

const Temp01 = ({children}) => {
    const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
        setToggleState(index);
    };
    return ( 
        <>
            <div className="window">
                    <div className="bloc_tabs">
						<div className="control">
                            <b className='b-1'>●</b><b className='b-2'>●</b><b className='b-3'>●</b>
                        </div>
						<button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}> example
                        </button>
						<button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}> code
                        </button>
					</div>
                    
					<div className="content_block">
					<div className={toggleState === 1 ? "content  active-content" : "content"}>
                        <div className="menu">
                            test
                        </div>
                        <div className="content_main">
                        {children}
                        </div>
					</div>
					<div className={toggleState === 2 ? "content2  active-content" : "content2"}>
                        <div className="menu">
                            code
                        </div>
                        <div className="content_main">
                        </div>
                    </div>
				</div>
            </div>
        </>
     );
}
 
export default Temp01;