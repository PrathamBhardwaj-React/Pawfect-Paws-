import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth , db } from "../../../Firebase";
import {  doc, getDoc,  Timestamp, updateDoc } from "firebase/firestore";

export default function UpdateNgo(){
    const {id}=useParams()

    const[ name, setName]=useState("")
    const[ email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[contact,setContact]=useState("")
    const[licanceNo,setLicanceNo]=useState("")
    const[address,setAddress]=useState("")
    const[about,setAbout]=useState("")

     
      useEffect(()=>{
                 fetchData()
             },[])
             const fetchData=async ()=>{
                let userDoc=await getDoc(doc(db, "users", id))
                let userData=userDoc.data()
                setName(userData.name)
                setEmail(userData.email)
                setPassword(userData.password)
                setContact(userData.contact)
                setLicanceNo(userData.licanceNo)
                setAddress(userData.address)
                setAbout(userData.about)
             }
         
        
        
     const handleForm=(e)=>{
        e.preventDefault()
    
        
         signInWithEmailAndPassword(auth, email, password)

        .then((userCred)=>{
          let userId=userCred.user.uid
          saveData(userId)
        })
        .catch((err)=>{
          toast.error(err.message)
        })
      
      
    }
      const nav=useNavigate()
      const saveData=async (userId)=>{
          try{
            let data={
              name:name, 
              email:email,
              contact:contact,
              userId:userId,
              userType:2, 
              status:true, 
              licanceNo:licanceNo,
              about:about,
              address:address,
              createdAt:Timestamp.now()
            }
            // console.log(data);
             // setDoc(doc(db, collection, id), data)

            await updateDoc(doc(db, "users", userId), data)

                        toast.success("NGO Updated successfully!")
                        nav("/admin/ngo/manage")
                        // setName("")
                        // setEmail("")
                        // setPassword("")
                        // setContact("")
                        // setLicanceNo("")
                        // setAddress("")
                        // setAbout("")
                        // // setUrl("")
                        
                    
                    }
                    catch(err){
                        toast.error(err.message)
                    }
                }
        
      

      // let nav=useNavigate();

      // const handleForm=(e)=>{
      //   e.preventDefault();
      //  // console.log("Hello User!!",e);
      //   if(name=="Himanshu"   && email=="admin@gmail.com"   && password=="2025"  && contact=="6283232604"){
      //     toast.success("Register Successfully!!");
      //     nav("/login");
      //   }
      //   else{
      //     toast.error("Invalid credentials");
      //   }
      // };

    return(
        <>

         <section
          className="hero-wrap hero-wrap-2"
          style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-end">
              <div className="col-md-9 ftco-animate pb-5">
                <p className="breadcrumbs mb-2">
                  <span className="mr-2">
                    <Link to={"/"}>
                      Home <i className="ion-ios-arrow-forward" />
                    </Link>
                  </span>{""}
                  <span>
                    NGO <i className="ion-ios-arrow-forward" />
                  </span>
                </p>
                <h1 className="mb-0 bread">NGO</h1>
              </div>
            </div>
          </div>
        </section>
       
    
            <div className="container my-5">
            
                    <div className="row no-gutters">
                      <div className="col-md-7">
                        <div className="contact-wrap w-100 p-md-5 p-4">
                          <h3 className="mb-4">Edit NGO</h3>
                          <form
                            method="POST"
                            id="contactForm"
                            name="contactForm"
                            className="contactForm"
                            onSubmit={handleForm}
                          >
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                   Full Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Full Name"
                                    value={name}
                                     onChange={(e)=>{
                                    setName(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                    Email Address
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e)=>{
                                    setEmail(e.target.value)
                                    }}                                 
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="subject">
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>{
                                    setPassword(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                    Contact
                                  </label>
                                  <input
                                    type="tel"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Contact"
                                    value={contact}
                                    // onChange={changeContact}
                                    onChange={(e)=>{
                                    setContact(e.target.value)
                                    }}
                                    minLength={10}
                                    maxLength={10}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                   Licance No:
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Licance No"
                                    value={licanceNo}
                                    onChange={(e)=>{
                                    setLicanceNo(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                   About
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="About"
                                    value={about}
                                     onChange={(e)=>{
                                    setAbout(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                             
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                   Address
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Address"
                                    value={address}
                                     onChange={(e)=>{
                                    setAddress(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="submit"
                                    defaultValue="Submit"
                                    className="btn btn-primary"
                                  />
                                  <div className="submitting" />
                                </div>
                              </div>
                            </div>
                          </form>
                          {/* <div>Already have an account? <Link to={"/login"}>Login Here</Link></div> */}

                        </div>
                      </div>
                      <div className="col-md-5 d-flex align-items-stretch">
                        <div
                          className="info-wrap w-100 p-5 img"
                          style={{ backgroundImage: "url(/assets/images/img.jpg)" }}
                        ></div>
                      </div>
                    </div>

            </div>

        </>
    )
}