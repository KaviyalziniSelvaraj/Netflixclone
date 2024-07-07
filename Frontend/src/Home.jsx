import {Content,Footer } from "antd/es/layout/layout";
import {Layout,Flex,Row,Typography, Button,Avatar} from "antd";
import Categorycard from "./Components/Categorycard";
import Footercomponent from "./Components/Footercomponent";
import { SearchOutlined } from "@ant-design/icons";
function Home(){
    const {Text}=Typography;
    return(<>
        <Layout>
            <Content style={{backgroundColor:"black"}}>
            <div style={{position:"relative",display:"flex"}}>
               <img src="st.jpg" width={'100%'}/>
               <Row style={{position:"absolute",margin:0,left:0,right:0,backgroundColor:"transparent"}} justify={"space-between"}>
               <Flex gap={20} style={{paddingTop:10,display:"flex",justifyContent:"center",paddingLeft:50}}>
                    <img src="logo.png" width={100}/>
                    <Flex style={{paddingTop:10}} gap={20}>
                        <a style={{color:"red"}}><Text >Home</Text></a>
                        <Text style={{color:"white",fontSize:15}}>TV Shows</Text>
                        <Text style={{color:"white",fontSize:15}}>Movies</Text>
                        <Text style={{color:"white",fontSize:15}}>New & Popular</Text>
                        <Text style={{color:"white",fontSize:15}}>My List</Text>
                        <Text style={{color:"white",fontSize:15}}>Browse by Languages</Text>
                    </Flex>
               </Flex>
               <Flex gap={20}>
                    <SearchOutlined style={{color:"white",fontSize:25}}/>
                    <Avatar size={50} style={{backgroundColor:"grey",marginRight:20,marginTop:10}}/>
                </Flex>
               </Row>
                
                </div>
                <Categorycard/>
                <Categorycard/>
                <Categorycard/>
            </Content>
            <Footer style={{backgroundColor:"black",paddingTop:90,paddingLeft:90,}}>
            <Footercomponent/>
            <Footercomponent/>
            <Footercomponent/>
            <Button type="default" style={{backgroundColor:"transparent",color:"grey",margin:10}}>Service Code</Button>
            </Footer>
        </Layout>
    </>)
}
export default Home;