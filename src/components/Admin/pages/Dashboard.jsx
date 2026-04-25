
import { collection, getCountFromServer, Query, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, Links } from "react-router-dom";
import { db } from "../../../Firebase";

export default function Dashboard(){
    const [user, setUser]=useState(0)
    const [breed, setBreed]=useState(0)
    const [pet,setPet]=useState(0)
    const [ngo,setNgo]=useState(0)
    const [request,setRequest]=useState(0)
    useEffect(()=>{
        fetchUserCount()
        fetchBreedCount()
        fetchPetListingCount()
        fetchNgoCount()
        fetchRequestCount()
    },[])
    const fetchUserCount=async ()=>{
        try{
            const usersRef=collection(db,"users")
            const q= query(usersRef,where("userType","==",3))
        const usersCount= await getCountFromServer(q)
        // (collection(db,"users"))
        setUser(usersCount.data().count);
        }
        catch(error){
            console.error("Error fetching user count:",error)
        }
    }
    const fetchNgoCount=async ()=>{
        try{
            const ngoRef=collection(db,"users")
            const q= query(ngoRef,where("userType","==",2))
        const ngoCount= await getCountFromServer(q)
        // (collection(db,"users"))
        setNgo(ngoCount.data().count);
        }
        catch(error){
            console.error("Error fetching ngo count:",error)
        }
    }
    const fetchBreedCount=async ()=>{
        let breedCount= await getCountFromServer(collection(db,"breed"))
        setBreed(breedCount.data().count);
        
    }

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
                        <Link to={"/admin"}>
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
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-blind" />
            </div>
            <div className="media-body">
              <h3 className="heading">Total Breeds</h3>
              <h1>{breed}</h1>
              <Link
                to={"/admin/breed/manage"}
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-dog-eating" />
            </div>
            <div className="media-body">
              <h3 className="heading">Pet Listing</h3>
              <h1>{pet}</h1>
              <Link
                to={"/admin/petListing/manage"}
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-grooming" />
            </div>
            <div className="media-body">
              <h3 className="heading">Total Users</h3>
              <h1>{user}</h1>
              <Link
                to={"/admin/users/manage"}
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4  ftco-animate">
          <div className="d-block services text-center" style={{marginTop: "100px"}}>
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-grooming" />
            </div>
            <div className="media-body">
              <h3 className="heading">Total NGO's</h3>
              <h1>{ngo}</h1>
              <Link
                to={"/admin/Ngo/manage"}
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4  ftco-animate">
          <div className="d-block services text-center" style={{marginTop: "100px"}}>
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-grooming" />
            </div>
            <div className="media-body">
              <h3 className="heading">Total Requests</h3>
              <h1>{request}</h1>
              <Link
                to={"/admin/adoptionRequest/view"}
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