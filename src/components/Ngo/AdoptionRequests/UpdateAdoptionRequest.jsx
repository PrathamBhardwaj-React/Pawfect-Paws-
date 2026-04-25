import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

export default function UpdateAdoptionRequest(){
      const {id}=useParams()

    const [name,setName]=useState("")
   // const [adopt,setAdopt]=useState("")
   // const [salary, setSalary]=useState("")
    //const [bankStatements, setBankStatements]=useState("")
    const [contact, setContact]=useState("")
    const [reasonToAdopt,setReasonToAdopt]=useState("")
    const [addressProof, setAddressProof]=useState({})
    const [imageName, setImageName]=useState("")
    const [previousImg, setPreviousImg]=useState("")
         useEffect(()=>{
                fetchData()
            },[])
            const fetchData=async ()=>{
               let requestDoc=await getDoc(doc(db, "adoptionRequest", id))
               let requestData=requestDoc.data()
               setName(requestData.name)
               setContact(requestData.contact)
               setAddressProof(requestData.addressProof)
               setPreviousImg(requestData.image)
               setReasonToAdopt(requestData.reasonToAdopt)
            }
        
    const handleForm=async (e)=>{
        e.preventDefault()
        if(!!imageName){
        const formData = new FormData();
        formData.append("file", addressProof);
        formData.append("upload_preset", "images"); // Replace with your upload preset

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dtogvbm2/image/upload`, // Replace with your Cloudinary cloud name
                formData
            );
            saveData(response.data.secure_url)
        } catch (error) {
            toast.error("Error uploading image:", error.message);
        }
      }else{
        saveData(previousImg)
      }
    }



    const changeImage=(e)=>{
        setImageName(e.target.value)
        setAddressProof(e.target.files[0]);
    }


    const nav=useNavigate()

    const saveData=async (imageUrl)=>{
         try{
            //insertion 
            let data={
              name,
                // reasonToAdopt,
                contact,
              
                image:imageUrl,
                addressProof, 
                reasonToAdopt,
                status:true,
                createdAt:Timestamp.now()
            }
            // console.log(data);
            //addDoc(collection(db, "collectionName"), data)
            await updateDoc(doc(db, "adoptionRequest", id), data)
            toast.success("Request Updated successfully!")
            nav("/NGO/adoptionRequest/manage")
            // setName("")
            // setContact("")
          
          
          
            // setReasonToAdopt("")
            // setAddressProof({})
            // setImageName("")
            // // setUrl("")
        }
        catch(err){
            toast.error(err.message)
        }
    }
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
                        <a href="index.html">
                            Home <i className="ion-ios-arrow-forward" />
                        </a>
                        </span>{" "}
                        <span>
                        Requests <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread"> Requests</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">

                {/* contact form  */}
            <div className="row justify-content-center no-gutters">
              <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Requests</h3>
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
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="name"
                            placeholder="Name"
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
                            Which Pet Wants To Adopt
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="reasonToAdopt"
                            placeholder="Which Pet Wants To Adopt"
                            value={reasonToAdopt}
                            onChange={(e)=>{
                                setReasonToAdopt(e.target.value)
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
                            name="description"
                            id="contact"
                            placeholder="Contact"
                            value={contact}
                            onChange={(e)=>{
                                setContact(e.target.value)
                            }}
                            maxLength={10}
                            minLength={10}
                            required
                          />
                        </div>
                      </div>
                      {/* <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Bank Statements
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="bank statement"
                            placeholder="Bank Statement"
                            value={bankStatements}
                            onChange={(e)=>{
                                setBankStatements(e.target.value)
                            }}
                          />
                        </div>
                      </div> */}
                       {/* <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="address"
                            placeholder="Address"
                            value={address}
                            onChange={(e)=>{
                                setAddress(e.target.value)
                            }}
                          />
                        </div>
                      </div> */}
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">
                            Address proof
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            name="image"
                            id="address proof"
                            placeholder="Address Proof"
                            value={imageName}
                            onChange={changeImage}
                          />
                        </div>
                      </div>
                       <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Reason To Adopt
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="reason to adopt"
                            placeholder="Reason To Adopt"
                            value={reasonToAdopt}
                            onChange={(e)=>{
                                setReasonToAdopt(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                    {/* <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">
                            Breed
                          </label>
                          <select
                            className="form-control"
                            value={breed}
                            onChange={(e)=>{
                                setBreed(e.target.value)
                            }}
                          >
                            <option disabled selected value={""}>Choose one</option>
                            <option>pug</option>
                            <option>husky</option>
                            <option>pit bull</option>
                            <option>spoted cat</option>
                          </select>
                        </div>
                      </div> */}
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
                </div>
              </div>
             
            </div>
            </div>
        </>
    )
}



