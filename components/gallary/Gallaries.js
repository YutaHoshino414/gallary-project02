import Test01 from './Test01';
import Test02 from './Test02';


const gallaries = [
    {id:1, element:<Test01/>, slug:'test01'},
    {id:2, element:<Test02/>, slug:'test02'},
]

const Gallaries = ({path}) => {
    
    return ( 
        <>
        {gallaries.map((gallary)=>(
            <div key={gallary.id}>
                {Number(path)=== gallary.id ? gallary.element :''}
            </div>
        ))}
        </>
    );
}

export default Gallaries;