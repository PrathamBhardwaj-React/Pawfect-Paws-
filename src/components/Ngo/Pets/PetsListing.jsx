import { addDoc, collection, onSnapshot, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom"



export default function PetsListing(){
    const [petName, setPetName]=useState("")
    const [description, setDescription]=useState("")
    const [age, setAge]=useState("")
    const [breed,setBreed]=useState("")
    const [image, setImage]=useState({})
    const [loading, setLoading] = useState(false);
    let nav = useNavigate()
    const [BreedData,setBreedData]=useState([])
    const [petType,setPetType]=useState("")

    useEffect(()=>{
      onSnapshot(collection(db,"breed"),(data)=>{
        setBreedData(data.docs.map((el)=>{
          return {id:el.id ,  ...el.data()}
          
        }))
        
      })
    },[])


    const [imageName, setImageName]=useState("")
    const handleForm=async (e)=>{
        e.preventDefault()
         setLoading(true);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "images"); // Replace with your upload preset

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/duxrhg4s0/image/upload`, // Replace with your Cloudinary cloud name
                formData
            );
            saveData(response.data.secure_url)
             toast.success("Pet added successfully!")
             nav("/NGO")
        } catch (error) {
            toast.error("Error uploading image:", error.message);
        }
        setLoading(false);
    }
       
    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    }

    const saveData=async (imageUrl)=>{
         try{
            //insertion 
            let data={
                petName,
                description,
                ngoId:sessionStorage.getItem("userId"),
                image:imageUrl,
                age, 
                breed,
                type:petType,
                status:true,
                createdAt:Timestamp.now()
            }
            // console.log(data);
            //addDoc(collection(db, "collectionName"), data)
            await addDoc(collection(db, "Pets"), data)
            toast.success("Pet added successfully!")
            setPetName("")
            setDescription("")
            setAge("")
            setBreed("")
            setImage({})
            setImageName("")
            // setUrl("")
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
                        Pets <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread"> Pets</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">

                {/* contact form  */}
            <div className="row justify-content-center no-gutters">
              <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Pets Listing</h3>
                  {loading ? (
  <div className="text-center my-4">
    <FadeLoader color="#00BD56" />
    <p className="mt-3">Uploading, please wait...</p>
  </div>
) : (
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
                            Breed
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="petName"
                            placeholder="Pet Name"
                            value={petName}
                            onChange={(e)=>{
                                setPetName(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e)=>{
                                setDescription(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">
                            Image
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            name="image"
                            id="image"
                            placeholder="Image"
                            value={imageName}
                            onChange={changeImage}
                          />
                        </div>
                      </div>
                       <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Age
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="description"
                            id="age"
                            placeholder="Age"
                            
                            value={age}
                            onChange={(e)=>{
                                setAge(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                    <div className="col-md-12">
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
                            {
                              BreedData.map((el)=>{
                                return <option value={el.id}>{el.breedName}</option>
                              })
                            }
                            
                          </select>
                        </div>
                      </div>
                    <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">
                            Type
                          </label>
                          <select
                            className="form-control"
                            value={petType}
                            onChange={(e)=>{
                                setPetType(e.target.value)
                            }}
                          >
                            <option disabled selected value={""}>Choose one</option>
                            <option   value={"Dog"}>Dog</option>
                            <option   value={"Cat"}>Cat</option>
                            
                            
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            defaultValue="Submit"
                            className="btn btn-primary"
                             disabled={loading}
                          />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  
                  </form>
)}
                          
                </div>         
                          
              </div>
             
            </div>
            </div>
        </>
    )
}



