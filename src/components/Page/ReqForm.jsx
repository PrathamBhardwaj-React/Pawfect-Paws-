import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

export default function ReqForm(){
    const {petId, ngoId}=useParams()
    const [name,setName]=useState(sessionStorage.getItem("name"))
    const [salary, setSalary]=useState("")
    const [address, setAddress]=useState("")
    const [reasonToAdopt,setReasonToAdopt]=useState("")
    const [contact,setContact]=useState("")
    const [addressProof, setAddressProof]=useState({})
    const [imageName, setImageName]=useState("")
    const handleForm=async (e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", addressProof);
        formData.append("upload_preset", "images"); // Replace with your upload preset

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dtog9vbm2/image/upload`, // Replace with your Cloudinary cloud name
                formData
            );
            saveData(response.data.secure_url)
        } catch (error) {
            toast.error("Error uploading image:", error.message);
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
                petId,
                ngoId,
                userId:sessionStorage.getItem("userId"),
                salary,
                contact,
                image:imageUrl,
                address, 
                reasonToAdopt,
                status:"Pending",
                createdAt:Timestamp.now()
            }
            // console.log(data);
            //addDoc(collection(db, "collectionName"), data)
            await addDoc(collection(db, "adoptionRequest"), data)
            toast.success("Request added successfully!")
            nav("/myadoption")
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
                  <h3 className="mb-4">Adoption Requests</h3>
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
                           Your Name
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
                            Salary
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="salary"
                            placeholder="Salary"
                            value={salary}
                            onChange={(e)=>{
                                setSalary(e.target.value)
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
                            placeholder="contact"
                            value={contact}
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



