import ReactDOMServer from 'react-dom/server';
import { Component, useEffect, useState } from 'react';
import Button from '../components/Button';
import './Home.css';




function CreateCertificate(){
      
      var [layer, setNewLayer] = useState(
            {
                  sizeX: 0, 
                  sizeY: 0, 
                  color: '',
                  image: '',
                  title: '', 
                  name: '', 
                  msg1: '', 
                  msg2: '', 
                  msg3: '', 
                  footer: ''
            });

      // useEffect(()=>{

      // })

      const setCertificateSize = (sizeX, sizeY) =>{
            let certSize = {sizeX: sizeX, sizeY: sizeY};
            
            setNewLayer(layer => ({
                  ...layer,
                  ...certSize
            }));
      }
      const setCertificateBackground = (mode, image, color) =>{
            if(mode==='color'){
                  let certColor = {color: color};

                  setNewLayer(layer = ({
                        ...layer,
                        ...certColor
                  }));
            }else{

            }
      }

      return(
            <>

                  <div style={{width: `${layer.sizeX}px`, height: `${layer.sizeY}px`, backgroundColor: `${layer.color}`}} className='layer'>

                  </div>

                  <Button onClick={(e)=>{
                        e.preventDefault();
                        setCertificateSize(1000,625)
                  }} txt='Criar Certificado' color='white' bg='rgb(127,0,255)' />

                  <Button onClick={(e)=>{
                        e.preventDefault();
                        setCertificateBackground('color','','rgb(255,150,000)');
                  }} txt='Alterar Cor' color='white' bg='rgb(127,0,255)' />
            </>
      );
      
}




export default () =>{
      return(
            <div className="page ">
                  <div className='container'>
                        <div className='pool-create-div'>
                              <CreateCertificate />
                        </div>
                  </div>
                  
            </div>
      );
}