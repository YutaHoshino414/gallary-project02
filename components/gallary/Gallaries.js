import Test01 from './Test01';
import Test02 from './Test02';
import Test04 from './Test04';

const gallaries = [
    {id:1, element:<Test01/>, slug:'test01'},
    {id:2, element:<Test02/>, slug:'test02'},
    {id:3, element:<Test02/>, slug:'test03'},
    {id:4, element:<Test04/>, slug:'test04'},
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