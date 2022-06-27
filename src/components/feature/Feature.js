import './feature.scss'
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Feature = () => {
  const percentage = 60;

  return (
    <div className='feature'>
      <header className='header'>
        <h4 className='title'>总收入</h4>
        <DragIndicatorOutlinedIcon />
      </header>
      <div className='progress-bar'>
        <CircularProgressbar value={percentage} text={`${percentage}%`} className='circle' strokeWidth='4' />
        <span className='text'>今日已实现收入</span>
        <span className='num'>￥ 365</span>
        <span className='info'>仅包含已支付收入，最新支付可能未包含在内，刷新后载入数据。</span>
      </div>
      <div className='bottom'>
        <div className='item'>
          <span className='title'>目标</span>
          <div className='num-container down'>
            <KeyboardArrowDownOutlinedIcon className='icon' />
            <span className='num'>￥ 12.3K</span>
          </div>
        </div>
        <div className='item'>
          <span className='title'>上周</span>
          <div className='num-container up'>
            <KeyboardArrowUpOutlinedIcon className='icon' />
            <span className='num'>￥ 12.3K</span>
          </div>
        </div>
        <div className='item'>
          <span className='title'>上月</span>
          <div className='num-container up'>
            <KeyboardArrowUpOutlinedIcon className='icon' />
            <span className='num'>￥12.3K</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature