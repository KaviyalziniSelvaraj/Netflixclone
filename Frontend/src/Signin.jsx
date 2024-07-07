import { Typography,Flex, Button, Checkbox} from "antd";
import { useNavigate } from "react-router-dom";

import (Typography)
function Signin()
{
    const nav=useNavigate();
    const {Text}=Typography;
    return(<>
        <div style={{left:0,right:0,height:"auto",backgroundImage:`url("bgimn.png")`,display:"block",backgroundSize:"cover",}}>
        <img src="logo.png" width={200} style={{marginLeft:80}}></img>
        <div style={{height:"auto",width:300,margin:"auto",background:"rgb(0, 0, 0, 0.6)",paddingTop:20,padding:70}}>
        <Flex vertical gap={10}>
            <Text style={{color:"white",fontWeight:"bold",fontSize:30}}>Sign In</Text>
            <input type="email" placeholder="Email or mobile number" style={{padding:20,borderRadius:10,fontSize:15,backgroundColor:"transparent"}}/>
            <input type="password" placeholder="Password" style={{padding:20,borderRadius:10,fontSize:15,backgroundColor:"transparent"}}/>
            <Button style={{padding:20,backgroundColor:"red",fontSize:15,}} type="primary">Sign In</Button>
            <Text style={{color:"grey", margin:"auto",fontSize:15}}>OR</Text>
            <Button style={{padding:20,background:"rgb(178,178,178,0.2)",fontSize:15,}} type="primary">Use a sign-in code</Button>
            <Text style={{color:"white",margin:"auto",fontSize:15}}>Forget Password?</Text>
            <Checkbox><Text style={{color:"white",fontSize:18}}>Remember me</Text></Checkbox>
            <Text style={{color:"grey"}}>New to Cloneflix? <Button style={{color:"white" ,fontWeight:"bold"}} type="text" onClick={()=>{nav('/')}}>Sign up now.</Button></Text>
        </Flex>
        </div>
        </div>
    </>)
}
export default Signin;