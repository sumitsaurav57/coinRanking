import { BsPlus, BsFillLightningFill, BsGearFill,BsPeace,BsPeople, BsPen } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { BiAbacus, BiAccessibility, BiAddToQueue } from 'react-icons/bi';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='absolute top-0 z-10 left-0 h-[10vh] w-screen  dark:bg-gray-900  justify-center items-center flex'>
            <div className=" w-11/12 h-full flex justify-between items-center">
                <Link className="flex justify-center items-center" to={'/'}>coin map</Link>
                <div className='w-1/2 flex'>
                <SideBarIcon icon={<FaFire size="28" />} />
                <SideBarIcon icon={<BsPeople size="32"/>}/>
                <SideBarIcon icon={<BsPeace size="32" />} />
                <SideBarIcon icon={<BsPen size="20" />} />
                <SideBarIcon icon={<FaPoo size="20" />} />
                <SideBarIcon icon={<BsGearFill size="22" />} />
                <SideBarIcon icon={<BiAbacus size="20" />} />
                <SideBarIcon icon={<BiAccessibility size="20" />} />
                <SideBarIcon icon={<BiAddToQueue size="22" />} />
                </div>
            </div>
    </div>
)
}
const SideBarIcon = ({ icon, text = "tooltip  📀" }) => {
    return(
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
        </div>
    )
};
const Divider = () => <hr className="sidebar-hr" />;

export default Navbar;