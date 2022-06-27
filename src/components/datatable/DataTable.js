import './dataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import {userRows, userColumns} from '../../data';
import { Link } from 'react-router-dom';
import {useState} from 'react'



const DataTable = () => {

  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter( item => item.id !== id));
  }
    const actionColumn = [
    {
        field: 'action',
        headerName: 'Action',
        width: 250,
        renderCell: (params) =>{
            return (<div className="actions">
              <Link to='/users/test'>
                <button className='view'>view</button>
              </Link>   
                <button className='delete' onClick={()=>{handleDelete(params.row.id)} }>delete</button>            
            </div>)
        }
      },
    ]

  return (
    <div style={{ height: 600, width: '100%' }} className='datatable'>
      <header className='header'>
        <h3>UserList</h3>
        <Link to='new' style={{textDecorarion: 'none'}}>
        <button className='new-btn'>Add User</button>
        </Link>
      </header>
    <DataGrid className='data-grid'
      rows={data}
      columns={userColumns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
    />
  </div>
  )
}

export default DataTable