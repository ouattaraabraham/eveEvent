import Image from 'next/image';
import { logoEve } from '../data';
const Logo = () => {
    return (
        <div>
            <Image src={logoEve} alt="logoEve" />
        </div>
    );
};

export default Logo;