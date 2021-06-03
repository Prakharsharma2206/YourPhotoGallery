import React, { useState } from 'react'
import Header from '../compos/Header';
import ImageGrid from '../compos/ImageGrid';
import Modal from '../compos/Modal';
import Title from '../compos/Title';
import UploadForm from '../compos/UploadForm';
import Logout from './Logout';


function Dashboard({user, setUser}) {
  const [load , setLoad] = useState(false);

  const [selectedImg , setSelectedImg] = useState(null);
  const [email , setEmail] = useState(user.email)

  if(load===true){
    <Logout />
    setTimeout(() =>{
    setUser(null);
    },1500)
    
  }
  return (

    <div className="App">
      <Header setUser={setUser} setLoad={setLoad} user={user}/>
      <Title/>
      <UploadForm email={email} />
      <ImageGrid  setSelectedImg={setSelectedImg} email={email} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>

  );
}


export default Dashboard;
