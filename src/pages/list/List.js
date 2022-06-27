import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/datatable/DataTable';

const List = () => {
  return (
    <div className='list'>
       <Sidebar />
      <main className='container'>
        <Navbar />
        <DataTable />
      </main>
    </div>
  )
}

export default List