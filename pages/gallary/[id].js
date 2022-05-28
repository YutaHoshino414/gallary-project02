import Gallaries from "../../components/gallary/Gallaries";
import { useRouter } from 'next/router'

const Detail = () => {
    const router = useRouter()
    console.log(router.query.id)
    const path = router.query.id
    return ( 
        <>
        <Gallaries path={path} />
        </>
    );
}

export default Detail;