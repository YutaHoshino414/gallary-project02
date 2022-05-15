import { slide as Menu } from 'react-burger-menu'
import Link from "next/link";


const SideMenu = () => {
    return ( 
        <div>
            <Menu width={ 280 }  >
                <div>
                    <h1>Next Gallary</h1>
                </div><hr/><br/>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/works"><a>Works</a></Link></li>
                    <li><Link href="/gallary"><a>Gallary</a></Link></li>
                </ul>
            </Menu>
        </div>
    );
}

export default SideMenu;
