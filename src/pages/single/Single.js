import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import NewOrders from '../../components/neworders/NewOrders'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <main className='container'>
        <Navbar />
        <div className='content'>
          <div className='top'>
            <div className='item-area'>
              <button className='edit-btn'>edit</button>
              <h3 className='title'>Information</h3>
              <div className='item'>
                  <img className='item-img' src='https://media.vogue.fr/photos/5da46eeee189b20008ababeb/2:3/w_2560%2Cc_limit/GettyImages-908311.jpg' alt='item-img' />
                <div className='item-info'>
                  <span className='item-name'>Jane Doe</span>
                  <div className='item-info-pairs'>
                    <span className='item-info-key'>Email: </span>
                    <span className='item-info-value'>janedoe@gmail.com</span>
                  </div>
                  <div className='item-info-pairs'>
                    <span className='item-info-key'>Phone: </span>
                    <span className='item-info-value'>+86 123 4567 8910</span>
                  </div>
                  <div className='item-info-pairs'>
                    <span className='item-info-key'>Address: </span>
                    <span className='item-info-value'>x street y district c country</span>
                  </div>
                  <div className='item-info-pairs'>
                    <span className='item-info-key'>country: </span>
                    <span className='item-info-value'>China</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className='chart-area'>
              <Chart header='user spending (last 6 months)' aspect={3 / 1}/>
            </div>
          </div>
          <div className='bottom'>
            <h3 className='title'>Last Transactions</h3>
            <NewOrders />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Single