import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useGlobalContext } from '../../context/darkContext';

const Navbar = () => {
  const {setDark} = useGlobalContext()
  return (
    <div className='navbar'>
      <div className='search-container'>
        <input placeholder='Search...'/>
        <SearchIcon className='icon'/>
      </div>
      <div className='icons-container'>
        <div className='icon-container'>
          <LanguageIcon className='icon'/>
          <span>中文</span>
        </div>
        <div className='icon-container'>
          <DarkModeIcon className='icon' onClick={()=>{setDark(true)}}/>
        </div>
        <div className='icon-container'>
          <FullscreenExitOutlinedIcon className='icon'/>
        </div>
        <div className='icon-container'>
          <NotificationsNoneIcon className='icon'/>
          <div className='amount'>1</div>
        </div>
        <div className='icon-container'>
          <ChatBubbleOutlineOutlinedIcon className='icon'/>
          <div className='amount'>2</div>
        </div>
        <div className='icon-container'>
          <ListOutlinedIcon className='icon'/>
        </div>
        <div className='avatar'>
          <img src='https://ts1.cn.mm.bing.net/th/id/R-C.ac138e6ea90879dfcdfb5de61a3ba409?rik=vKiM4TaE7e5uTA&pid=ImgRaw&r=0' alt='personal-avatar'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar