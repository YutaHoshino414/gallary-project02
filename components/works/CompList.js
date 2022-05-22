import Example01 from './Example01';
import Example02 from './Example02';
import Example03 from './Example03';
import Example04 from './example04/Example04';
import Example05 from './Example05';
import Example06 from './Example06';
import Example07 from './Example07';
import Example08 from './Example08';
import Example09 from './Example09';
import Example10 from './Example10';

const Components = [
    {id:1, element:<Example01/>, slug:'example01'}, 
    {id:2, element:<Example02/>, slug:'example02'}, 
    {id:3, element:<Example03/>, slug:'example03'}, 
    {id:4, element:<Example04/>, slug:'example04'}, 
    {id:5, element:<Example05/>, slug:'example05'}, 
    {id:6, element:<Example06/>, slug:'example06'},
    {id:7, element:<Example07/>, slug:'example07'},
    {id:8, element:<Example08/>, slug:'example08'},
    {id:9, element:<Example09/>, slug:'example09'},
    {id:10, element:<Example10/>},
];

const CompList = ({path})=>{
    console.log('component list >>', path)
    return(
        <>
            {Components.map((comp, i) =>(
            <div key={comp.id}>
                {path === i? comp.element :""}
            </div>
            ))}
        </>
    )
}

export default CompList; 
/* const CompList = [
    <Example01/>, <Example02/>, <Example03/>, <Example04/>, <Example05/>, 
    <Example06/>,
];

export default CompList; */