import React from "react";
import Footer from "./Footer";
import OffcanvasNavBar from "./OffcanvasNavBar";
import { useForm } from "react-cool-form";

export default function Contact() {

 const { form, use } = useForm({
    defaultValues: { firstName: "", lastName: "", email: "" },
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2))
 });
 const errors = use("errors");
    

 return(
 <>
    <OffcanvasNavBar/> 
    <h1 style={{textDecoration:"underline",textAlign:"center", color:"black", marginTop:"10px"}}>Contact Us</h1>
    <form ref={form} noValidate style={{margin:"5rem auto 10rem", width:"24rem"}}>
      <div style={{marginTop:"1.5rem", marginBottom:"1.5rem", width:"inherit"}}>
        <input style={{backgroundColor:"white", padding:"0 0.5rem", width:"inherit", height:"2rem", borderRadius:"4px", border:"none", boxSizing:"borderBox"}} name="firstName" placeholder="First name" required />
        {errors.firstName && <p style={{marginTop:"0.5rem",letterSpacing:"1px", fontWeight:"bold", color:"#ff9900"}}>{errors.firstName}</p>}
      </div>
      <div style={{marginTop:"1.5rem", marginBottom:"1.5rem", width:"inherit"}}>
        <input style={{backgroundColor:"white", padding:"0 0.5rem", width:"inherit", height:"2rem", borderRadius:"4px", border:"none", boxSizing:"borderBox"}} name="lastName" placeholder="Last name" required />
        {errors.lastName && <p style={{marginTop:"0.5rem",letterSpacing:"1px", fontWeight:"bold", color:"#ff9900"}}>{errors.lastName}</p>}
      </div>
      <div style={{marginTop:"1.5rem", marginBottom:"1.5rem", width:"inherit"}}>
        <input style={{backgroundColor:"white", padding:"0 0.5rem", width:"inherit", height:"2rem", borderRadius:"4px", border:"none", boxSizing:"borderBox"}} name="email" placeholder="Email" required />
        {errors.email && <p style={{marginTop:"0.5rem",letterSpacing:"1px", fontWeight:"bold", color:"#ff9900"}}>{errors.email}</p>}
      </div>
      <input style={{backgroundColor:"white", padding:"0 0.5rem", width:"inherit", height:"2rem", borderRadius:"4px", border:"none", boxSizing:"borderBox"}} type="text" placeholder="Say Something..." />
      <input style={{height:"2.5rem", fontSize:"1rem",color:"#fff", background:"#0971f1", cursor:"pointer", padding:"0 0.5rem", width:"inherit", height:"2rem", borderRadius:"4px", border:"none", boxSizing:"borderBox", marginTop:"1.5rem", marginBottom:"1.5rem"}} type="submit"/>
    </form>
    <br/>
    <br/>
    <Footer/>
    <br/>
 </>);
}