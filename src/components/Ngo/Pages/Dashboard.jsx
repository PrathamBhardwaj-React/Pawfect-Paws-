import { collection, getCountFromServer, Query, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, Links } from "react-router-dom";
import { db } from "../../../Firebase";

export default function DashboardNgo(){
    // const [user, setUser]=useState(0)
    // const [breed, setBreed]=useState(0)
    const [pet,setPet]=useState(0)
    // const [ngo,setNgo]=useState(0)
    const [request,setRequest]=useState(0)
    useEffect(()=>{
        // fetchUserCount()
        // fetchBreedCount()
        fetchPetListingCount()
        // fetchNgoCount()
        fetchRequestCount()
    },[])
    

    const fetchPetListingCount=async ()=>{
        let petListingCount= await getCountFromServer(collection(db,"Pets"))
        setPet(petListingCount.data().count);
        
    }

    const fetchRequestCount=async ()=>{
        let requestCount= await getCountFromServer(collection(db,"adoptionRequest"))
        setRequest(requestCount.data().count);
        
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
                        <Link to={"/NGO"}>
                            Dashboard  <i className="ion-ios-arrow-forward" />
                        </Link>
                        </span>{" "}
                        <span>
                         <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread"></h1>
                    </div>
                </div>
                </div>
            </section>
        <section className="ftco-section bg-light ftco-no-pt ftco-intro">
    <div className="container">
      <div className="row">
       
        <div className="col-md-6 d-flex align-self-stretch px-5 ftco-animate">
          <div className="d-block services text-center"style={{marginTop: "100px"}}>
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-dog-eating" />
            </div>
            <div className="media-body">
              <h3 className="heading">Pet Listing</h3>
              <h1>{pet}</h1>
              <Link
                to={"/NGO/pets/manage"}
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 d-flex align-self-stretch px-5  ftco-animate">
          <div className="d-block services text-center" style={{marginTop: "100px"}}>
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-grooming" />
            </div>
            <div className="media-body">
              <h3 className="heading">Total Requests</h3>
              <h1>{request}</h1>
              <Link
                to={"/NGO/adoptionRequests/view"}
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
        </>
    )
}