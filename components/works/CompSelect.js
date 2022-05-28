import Components from "./CompList";


const CompSelect = ({path}) => {
    return ( 
        <>
            {Components.map((comp, i) =>(
            <div key={comp.id}>
                {path === i? comp.element :""}
            </div>
            ))}
        </>
     );
}
 
export default CompSelect;