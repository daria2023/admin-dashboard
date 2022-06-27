import './widget.scss';

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Widget = ( {type}) => {
    let data;

        switch (type) {
            case "users":
                data = {
                    title: '用户数量',
                    num: 150,
                    money: false,
                    link: '查看全部用户',
                    tend: '20%',
                    icon: <PersonIcon className='icon' style={{backgroundColor:'#DF786150',color:'#DF7861'}}/>
                }
                break;
            case "orders":
                data = {
                    title: '订单数量',
                    num: 250,
                    money: false,
                    link: '查看全部订单',
                    tend: '20%',
                    icon: <ShoppingCartOutlinedIcon className='icon' style={{backgroundColor:'#94B49F50',color:'#94B49F'}}/>
                }
                break;
            case "earnings":
                data = {
                    title: '总收入',
                    num: 1235,
                    money: true,
                    link: '查看净收入',
                    tend: '20%',
                    icon: <MonetizationOnOutlinedIcon className='icon' style={{backgroundColor:'#FAC21350',color:'#FAC213'}}/>
                }
                break;
            case "balance":
                data = {
                    title: '余额',
                    num: 524,
                    money: true,
                    link: '查看余额',
                    tend: '20%',
                    icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{backgroundColor:'#A760FF50',color:'#A760FF'}}/>
                }
                break;
            default:
                break;
        }
    

  return (
    <div className='widget'>
        <div className='count'>
            <p className='title'>{data.title}</p>
            <span className='count-num'>{data.money ? '￥ '+ data.num :data.num}</span>
            <p className='link'>{data.link}</p>
        </div>
        <div className='tend'>
            <div className='tend-num-area'>
                <KeyboardArrowUpOutlinedIcon className='tend-icon' />
                <span className='tend-num'>{data.tend}</span>
            </div>
            <div className='type-icon'>
                {data.icon}
            </div>
        </div>
    </div>
  )
}

export default Widget