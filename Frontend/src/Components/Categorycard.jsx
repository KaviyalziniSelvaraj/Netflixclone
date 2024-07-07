import {Flex,Typography, message} from 'antd';
import Carddata from './Datas/carddata';
import { useState } from 'react';
function Categorycard(){
    const {Text}=Typography;
    const [wsize,setwsize]=useState(270);
    const [hsize,sethsize]=useState(150)

    return(
    <>
    <div>
    <Flex style={{padding:40,paddingRight:0}} gap={30} vertical>
    <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>We Think You'll Love This</Text>
    <Flex style={{display:"flex",flexWrap:"nowrap",overflow:"scroll",scrollbarWidth:"none",}} gap={5}>
    {
        Carddata.map((e)=>{
            return(<>
                <img src={e.image} style={{width:270,height:150,borderRadius:5}} onClick={()=>{
                    message.success("clicked");
                    
                }}/>
            </>)
        })
    }
    </Flex>
    </Flex>
    </div>
    </>
    );
}
export default Categorycard;