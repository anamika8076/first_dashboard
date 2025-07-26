import {Space,Card} from "antd";
function Contacts(){
    return(
        <div className="Contacts">
        <h2 style={{textAlign:"center"}}>  Contact Us</h2>
        <div > <Card class="card"  style={{backgroundColor:"rgb(198, 212, 249)"}} >
        
<form  action="#">
<Space direction="vertical">
 
<h4>NAME</h4>
<input type="name" placeholder="name" class="placeholder-box" />

    <h4>E-MAIL</h4>
    <input type="email" placeholder="email address" class="placeholder-box"/>
    <h4>PHONE NUMBER</h4>
    <input type="contact number" placeholder="contact number" class="placeholder-box"/>
    <h4>MESSAGE</h4>
    <input type="message" placeholder="write your message..." class="placeholder-box"/>
    
    
    <button  style={{backgroundColor:"solidgrey",display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"10px"
    }}>SUBMIT</button></Space>
    

    
</form>

</Card>
</div>
        

            
        </div>
   
    
    );
    

};

export default Contacts;