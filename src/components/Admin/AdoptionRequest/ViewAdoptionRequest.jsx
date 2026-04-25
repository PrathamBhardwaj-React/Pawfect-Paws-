import {  collection, onSnapshot, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"


export default function ViewAdoptionRequest(){

    const [requests,setRequests]=useState([])
       
    const fetchData=()=>{
       onSnapshot(collection(db,"adoptionRequest"),(usersData)=>{
       
         setRequests(
            usersData.docs.map((el)=>{
            // console.log(el.id,el.data());
            return{id:el.id,...el.data()}


            

            
        })
        
         )
       
        
       })
        
    }


    useEffect(()=>{
        fetchData()
        // console.log(AllBreeds);
        
    },[])
  
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
                    <h1 className="mb-0 bread">Requests</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container-fluid my-5">

                {/* contact form  */}
            <div className="row justify-content-center no-gutters">
              <div className="col-md-10" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className=" table-responsive-md contact-wrap w-3000 p-md-5 p-4">
                  <h3 className="mb-4">Adoption Requests</h3>
                  <table className="table table-striped ">
                                    <thead>
                                        <tr>
                                        <th scope="col-2">S.No</th>
                                        <th scope="col-2">Name</th>
                                        
                                        <th scope="col-2">Contact</th>
    
                                        <th scope="col-2">Images</th>
                                        <th scope="col-2">ReasonToAdopt</th>
                                        </tr>
                                    </thead>
                  {
                    requests.map((el,index)=>{
                        return  <tbody>
                                        <tr>
                                        <th scope="row">{index+1}</th>
                                        <td scope="col-2">{el.name}</td>
                                        <td scope="col-2">{el.contact}</td>
                                        <td><img className="img-fluid" width={"150px"} src={el.image} alt="" /></td>
                                        <td>{el.reasonToAdopt}</td>
                                         
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