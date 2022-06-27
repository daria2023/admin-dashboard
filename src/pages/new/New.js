import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';

const New = ( {newForm}) => {
  let newItems = newForm;
  const [file, setFile] = useState('');
  
  return (
    <div className='new'>
      <Sidebar />
      <main className='container'>
        <Navbar />
        <div className='content'>
          <div className='top'>
            <h3 className='title'>Add New User</h3>
          </div>
          <div className='bottom'>
            <div className='img-container'>
              <img src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt='upload'></img>
            </div>
            <form className='form-area'>
               <div className='input-group'>
                    <label htmlFor='image'>Image: <DriveFolderUploadIcon /></label>
                    <input type='file' id='image' style={{display: 'none'}} onChange={e => setFile(e.target.files[0])}/>
                </div>
              {
                newItems.map( item => {
                  return (
                    <div className='input-group' key={item.id}>
                      <label>{item.label}</label>
                      <input type={item.type} placeholder={item.placeholder}></input>
                     </div>
                  )
                })
              }    
              <button className='submit-btn'>submit</button>       
            </form>
          </div>
        </div>  
        </main>
    </div>
  )
}

export default New