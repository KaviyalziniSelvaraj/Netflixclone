import {Typography,Button,Row,Col}from 'antd';
import { useNavigate } from 'react-router-dom';
function Signup()
{
    const nav=useNavigate();
    const {Text}=Typography;
    return(
        <>
             <div style={{backgroundColor:"#2e2a29",width:"100%"}}>
  <div style={{left:0,right:0,height:"auto",marginTop:20,backgroundImage:`url("bgimn.png")`,display:"block",backgroundSize:"cover",}}>
      <div style={{display:"flex",overflow:"hidden",paddingLeft:40,paddingRight:40}}>
        <img src='logo.png' width={200}></img>
        <div style={{marginLeft:"auto",marginTop:18}}>
          <Button style={{marginRight:20,padding:10,backgroundColor:"transparent",color:"white",borderBlockColor:"whitesmoke",fontWeight:"bold"}} type="default">English</Button>
          <Button style={{paddingLeft:15,paddingRight:15,borderRadius:5,backgroundColor:"red",fontWeight:"bolder",fontSize:15}} type="primary" onClick={()=>{nav('/signin')}}>Sign In</Button>
        </div>
      </div>
      <div style={{marginTop:150,paddingLeft:50}}>
          <Text style={{fontSize:50,color:"white",fontWeight:"bolder",justifyContent:"center",display:"flex"}}>Unlimited movies, TV shows and more</Text><br/>
          <Text style={{fontSize:20,color:"white",justifyContent:"center",display:"flex",padding:10}}>Watch anywhere. Cancel anytime.</Text>
          <Text style={{fontSize:20,color:"white",justifyContent:"center",display:"flex",padding:20}}>Ready to watch?Enter your email to create or restart your membership.</Text>
          <Row style={{display:"flex",justifyContent:"center"}}>
          <Col xl={12} xs={24}>
          <input style={{backgroundColor:"lightblue",background:"rgb(160,205,232,0.6)",borderRadius:10,padding:15,width:400,fontSize:20,color:"white"}} placeholder='Email address'></input>
          </Col>
          <Col>
          <Button style={{paddingLeft:20,paddingRight:20,fontSize:20,fontWeight:"bolder",padding:25,backgroundColor:"red",opacity:0.8}} type='primary'><Text style={{color:"white",fontWeight:"bold"}} onClick={()=>{nav('/home')}}>Get Started</Text></Button>
           </Col>
           </Row>
           <div style={{height:20}}></div>
      </div>
    </div>
    <div style={{height:7}}></div>
    <div style={{backgroundColor:"#000000",padding:120}}>
      <Row>
      <Col xl={12} xs={24}>
      <Text style={{color:"white",fontSize:50,display:"flex",justifyContent:"left",fontWeight:"bolder"}}>Enjoy on your TV</Text><br/>
      <Text style={{color:"white",fontSize:25,display:"flex",justifyContent:"left",lineHeight:1.3}}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,Blu-ray players and more.</Text>
      </Col>
      <Col>
      <div style={{display:"block"}}>
        <img src='tvgif3.gif' width={500}></img></div>
      </Col>
      </Row>
    </div>
    <div style={{height:7}}></div>
    <div style={{backgroundColor:"#000000",padding:120}}>
      <Row gutter={80}>
      <Col>
      <div style={{display:"block"}}>
        <img src='tvgif2.gif' width={400}></img></div>
      </Col>
      <Col xl={12} xs={24}>
      <Text style={{color:"white",fontSize:50,display:"flex",justifyContent:"left",fontWeight:"bolder",lineHeight:1.3}}>Download your shows to watch offline</Text><br/>
      <Text style={{color:"white",fontSize:20,display:"flex",justifyContent:"left",lineHeight:1.3}}>Save your favourites easily and always have something to watch.</Text>
      </Col>
      </Row>
    </div>
    <div style={{height:7}}></div>

    <div style={{backgroundColor:"#000000",padding:120}}>
      <Row>
      <Col xl={12} xs={24}>
      <Text style={{color:"white",fontSize:50,display:"flex",justifyContent:"left",fontWeight:"bolder"}}>Watch Everywhere</Text><br/>
      <Text style={{color:"white",fontSize:25,display:"flex",justifyContent:"left",lineHeight:1.3}}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Text>
      </Col>
      <Col>
      <div style={{display:"block"}}>
        <img src='tvgif.gif' width={500}></img></div>
      </Col>
      </Row>
    </div>
    <div style={{height:7}}></div>

    <div style={{backgroundColor:"black",padding:120}}>
      <Row>
      <Col>
      <div style={{display:"block"}}>
        <img src='child.png' width={500}></img></div>
      </Col>
      <Col xl={12} xs={24}>
      <Text style={{color:"white",fontSize:50,display:"flex",justifyContent:"left",fontWeight:"bolder"}}>Create profiles for kids</Text><br/>
      <Text style={{color:"white",fontSize:25,display:"flex",justifyContent:"left",lineHeight:1.3}}>Send children on adventures with their favourite characters in a space made just for them - free with your membership.</Text>
      </Col>
      </Row>
    </div>
   </div>
        </>
    )
}
export default Signup;