import {  collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"

export default function ManageNgo(){

    const [AllNgo,setAllNgo]=useState([])
       
    const fetchData=()=>{
       onSnapshot(collection(db,"users"),(usersData)=>{
       
         setAllNgo(
            usersData.docs.map((el)=>{
            // console.log(el.id,el.data());
            return{id:el.id,...el.data()}   
        })
        .filter(user=>user.userType===2)
         )
       })
    }
    useEffect(()=>{
        fetchData()
        // console.log(AllBreeds);   
    },[])
    const DeleteNgo= async(userId)=>{
                console.log(userId);
                await deleteDoc(doc(db,"users",userId)).then(()=>{
                toast.success("Ngo is deleted")
                }).catch((error)=>{
                    toast.error(error.message)
                })   
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
                        Ngo <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">NGO</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container-fluid my-5">

                {/* contact form  */}
            <div className="row justify-content-center no-gutters">
              <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className=" table-responsive-md contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Manage NGO</h3>
                  <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">name</th>
                                        <th scope="col">email</th>
                                        <th scope="col">contact</th>
                                        <th scope="col">address</th>
                                        <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                  {
                    AllNgo.map((el,index)=>{
                        return  <tbody>
                                        <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{el.name}</td>
                                        <td>{el.email}</td>
                                        <td>{el.contact}</td>
                                        <td>{el.address}</td>
                                        <td><button className="btn btn-danger" onClick={()=>{
                                            DeleteNgo(el.id)
                                         }}>Delete </button></td>

                                        </tr>
                                       
                                    </tbody>
                    })
                  }
                    </table>

                 
                </div>
              </div>
             
            </div>
            </div>

        </>
    )
}