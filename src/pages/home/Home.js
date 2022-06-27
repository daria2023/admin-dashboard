import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Feature from '../../components/feature/Feature';
import Chart from '../../components/chart/Chart';
import NewOrders from '../../components/neworders/NewOrders';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <main className='container'>
        <Navbar />
        <div className='widgets'>
          <Widget type='users'/>
          <Widget type='orders'/>
          <Widget type='earnings'/>
          <Widget type='balance'/>          
        </div>
        <div className='charts'>
          <Feature />
          <Chart header='上半年总收入' aspect={2 / 1}/> 
        </div>
        <div className='table'>
          <header className='header'>最新订单</header>
          <div className='orders-container'><NewOrders /></div>
        </div>
      </main>
    </div>
  )
}

export default Home