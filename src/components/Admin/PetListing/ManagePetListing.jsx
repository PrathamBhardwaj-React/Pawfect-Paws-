import { addDoc, collection, deleteDoc, doc, onSnapshot, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import {FadeLoader} from "react-spinners"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"

export default function ManagePetListing(){
    const [load, setLoad]=useState(true)
    
    const [petListing,setPetListing]=useState([])

    const fetchData=()=>{
       onSnapshot(collection(db,"Pets"),(petsData)=>{
       
         setPetListing(
            petsData.docs.map((el)=>{
            // console.log(el.id,el.data());
            return{id:el.id,...el.data()}

            

            
        })
         )
         setLoad(false)

        
       })
        
    }

    useEffect(()=>{
        fetchData()
        // console.log(AllBreeds);
        
    },[])

      const DeletePetListing= async(userId)=>{

        Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                        }).then(async (result) => {
                        if (result.isConfirmed) {
                            await deleteDoc(doc(db,"pets",userId))
                            .then(()=>{
                                Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                                });
                
                            }).catch((error)=>{
                                toast.error(error.message)
                            })
                           
                        }
                        });
                
    //                     console.log(userId);
    //                     await deleteDoc(doc(db,"pets",userId)).then(()=>{
    //                     toast.success("Item is deleted")
                
    //                     }).catch((error)=>{
    //                         toast.error(error.message)
    //                     })
                        
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
                        pets <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Pets Listing</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">

            {load?
            <FadeLoader color="#00BD56" size={40} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :
           

            <div className="row justify-content-center no-gutters">
              <div className="col-md-12" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className=" table-responsive-md contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Manage Pet Listing</h3>
                  <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">PetName</th>
                                        <th scope="col">Breed</th>
                                        <th scope="col">Des</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Actions</th>

                                        </tr>
                                    </thead>
                  {
                    petListing.map((el,index)=>{
                        return  <tbody>
                                        <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{el.petName}</td>
                                        <td>{el.breed}</td>
                                        <td>{el.description}</td>
                                         <td><img className="img-fluid" src={el.image} alt="" style={{height:"50px", width:"50px"}} /></td>
                                         <td>{el.age}</td>
                                          <td>
                                             <Link to={"/admin/petListing/edit/"+el.id} className="btn btn-outline-success mx-2">Edit</Link>
                                            <button className="btn btn-danger" onClick={()=>{
                                            DeletePetListing(el.id)
                                         }}>Delete </button></td>

                                        </tr>
                                       
                                    </tbody>
                                    })
                  }
                    </table>

                 
                </div>
              </div>
             
            </div>
        }
            </div>

        </>
    )
}