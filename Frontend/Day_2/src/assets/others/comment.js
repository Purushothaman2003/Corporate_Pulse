// -------------------image slider-------------
import 'react-slideshow-image/dist/fade'
import {Fade,Zoom,Slide} from 'react-slideshow-image'
import Navbar from '../components/Navbar';

{<Fade>
    {slideImage.map((image,index)=>(
      <div key={index}>
        <div style={{...divStyle,backgroundImage:`url(${image.url})`}}>
          <span style={{spanstyle}}>{image.caption}</span>

        </div>
      </div>
    )
    )}
   </Fade> }



const slideImage = [
  { url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.weddingbazaar.com%2Fblog%2Flatest-pre-wedding-shoot-poses&psig=AOvVaw2MRTVdiiUYYefNXisSAy_N&ust=1706090813479000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiKsf7C84MDFQAAAAAdAAAAABAD",
  caption:'First slide'
},
{ url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.weddingbazaar.com%2Fblog%2Flatest-pre-wedding-shoot-poses&psig=AOvVaw2MRTVdiiUYYefNXisSAy_N&ust=1706090813479000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiKsf7C84MDFQAAAAAdAAAAABAD",
caption:'First slide'
},

  ];
 const divStyle={
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
   height:'400px',
   backgroundSize:'cover'
  }
  const spanstyle={
    fontSize:"20px",
    background:"#efefef",
    color:"#00000"
    
  }
  // -------------------image slider-------------


  // -------------------join css----------------

  // body {
  //   margin: 0;
  //   font-family: 'Arial', sans-serif;
  // }
  
  // .interview {
  //   position: relative;
  //   text-align: center;
  //   background-color: #343a40;
  //   color: #fff;
  //   padding: 50px 0;
  // }
  
  // .interview img {
  //   max-width: 100%;
  // }
  
  // .interview h1 {
  //   font-size: 2.5em;
  // }
  
  // .interview span {
  //   color: #007bff;
  // }
  
  // .inter_cont {
  //   max-width: 800px;
  //   margin: 20px auto;
  //   padding: 20px;
  //   text-align: center;
  // }
  
  // .joinus img {
  //   max-width: 100%;
  // }
  
  // .job_application {
  //   max-width: 600px;
  //   margin: 20px auto;
  //   padding: 20px;
  //   background-color: #f8f8f8;
  //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  //   border-radius: 8px;
  // }
  
  // form {
  //   display: flex;
  //   flex-direction: column;
  // }
  
  // .account {
  //   margin-bottom: 20px;
  // }
  
  // label {
  //   display: block;
  //   margin-bottom: 10px;
  //   color: #333;
  // }
  
  // input,
  // [type="file"] {
  //   height: 40px;
  //   padding: 10px;
  //   margin-bottom: 15px;
  //   border: 1px solid #ccc;
  //   border-radius: 4px;
  //   box-sizing: border-box;
  // }
  
  // .btn {
  //   background-color: #007bff;
  //   color: #fff;
  //   padding: 10px;
  //   border: none;
  //   border-radius: 4px;
  //   cursor: pointer;
  // }
  
  // .btn:hover {
  //   background-color: #0056b3;
  // }
  
  // .join_back {
  //   background-color: #007bff;
  //   color: #fff;
  //   text-align: center;
  //   padding: 30px 0;
  // }
  
  // .join_back h3 {
  //   font-size: 2em;
  // }
  
  // .join_back span {
  //   color: #fff;
  // }
  
  // .join_back h2 {
  //   margin-top: 20px;
  //   font-size: 1.5em;
  // }
  
  // @media (max-width: 768px) {
  //   .interview h1 {
  //     font-size: 2em;
  //   }
  
  //   .join_back h3 {
  //     font-size: 1.5em;
  //   }
  // }
  