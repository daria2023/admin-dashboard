import './sideBar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/darkContext';

const Sidebar = () => {
  const {setDark} = useGlobalContext();
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{textDecoration:'none'}}><span className='logo-area'>Z-admin</span></Link>      
      </div>
      <div className='middle'>
        <ul className='items-container'>
        <p className='items-group'>MAIN</p>
          <li className='item'>
            <DashboardIcon  className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className='items-group'>LISTS</p>
          <Link to='/users' style={{textDecoration:'none'}}>
            <li className='item'>
              <PersonIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
         <Link to='/products' style={{textDecoration:'none'}}>
          <li className='item'>
              <StoreIcon className='icon' />
              <span>Products</span>
            </li>
         </Link>
          <li className='item'>
            <CreditCardIcon className='icon' />
            <span>Orders</span>
          </li>
          <li className='item'>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='items-group'>USERFUL</p>
          <li className='item'>
            <InsertChartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li className='item'>
            <NotificationsNoneIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='items-group'>SERVICE</p>
          <li className='item'>
            <CloudQueueIcon  className='icon'/>
            <span>System Health</span>
          </li>
          <li className='item'>
            <PsychologyIcon className='icon' />
            <span>Logs</span>
          </li>
          <li className='item'>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='items-group'>USER</p>
          <li className='item'>
            <AccountCircleOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li className='item'>
            <ExitToAppOutlinedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <button className='light theme' onClick={()=>{setDark(false)}}></button>
        <button className='dark theme' onClick={()=>{setDark(true)}}></button>
      </div>
    </div>
  )
}

export default Sidebar