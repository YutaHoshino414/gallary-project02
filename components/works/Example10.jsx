/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import {useState, useRef} from "react";
import styles from '../../styles/ex/Ex10.module.css'

const group_title = css`
    text-align: left;
    margin-bottom: 1rem;
    font-size: 1.2rem;
`;

const data = [
    {title:'group1', items:['1', '2', '3']},
    {title:'group2', items:['4', '5', ]},
]

const Example10 = () => {
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();

    const handleDragStart = (e, params)=>{
        console.log('drag starting..',params)
        dragItem.current = params;
        setDragging(true);
    };
    const getStyles =()=>{
        const currentItem = dragItem.current;
        return styles.current
    }


    return ( 
        <div>
            <div className={styles.drag_n_drop}>
            {data.map((grp,grpIndex)=>(
                <div className={styles.dnd_group} key={grp.title}>
                    <div css={group_title}>{grp.title}</div>
                    {grp.items.map((item, itemIndex)=>(
                        <div className={dragging? getStyles({grpIndex, itemIndex}): styles.dnd_item} key={item} draggable 
                            onDragStart={(e)=>{handleDragStart(e, {grpIndex, itemIndex})}}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            ))}
            </div>
        </div>
    );
}

export default Example10;