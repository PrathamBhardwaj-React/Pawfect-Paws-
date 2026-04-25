
// import { addDoc, collection, onSnapshot, Timestamp, query, where } from "firebase/firestore"
// import { useEffect, useState } from "react"
// import { db } from "../../Firebase" 
// import { toast } from "react-toastify"
// import axios from "axios"
// import { FadeLoader } from "react-spinners"
// import { Link } from "react-router-dom"

// export default function ViewBreeds(){
//     const [load, setLoad]=useState(true)
//     const [type, setType]=useState("All")
//     const [AllBreeds,setAllBreeds]=useState([])

//     const fetchData=()=>{
//         if(type=="All"){
//          var q=   query(collection(db,"breed"))
//         }else{
//          var q=   query(collection(db,"breed"), where("type","==",type))
//         }
//        onSnapshot(q,(breedData)=>{
       
//          setAllBreeds(
//             breedData.docs.map((el)=>{
//             // console.log(el.id,el.data());
//             return{id:el.id,...el.data()}

            

            
//         })
//          )
       
//                 setLoad(false)

//        })
        
//     }

//     useEffect(()=>{
//         fetchData()
//         // console.log(AllBreeds);
        
//     },[type])
  
//     return(
//         <>
//         <section
//                 className="hero-wrap hero-wrap-2"
//                 style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
//                 data-stellar-background-ratio="0.5"
//             >
//                 <div className="overlay" />
//                 <div className="container">
//                 <div className="row no-gutters slider-text align-items-end">
//                     <div className="col-md-9 ftco-animate pb-5">
//                     <p className="breadcrumbs mb-2">
//                         <span className="mr-2">
//                         <a href="index.html">
//                             Home <i className="ion-ios-arrow-forward" />
//                         </a>
//                         </span>{" "}
//                         <span>
//                         Breed <i className="ion-ios-arrow-forward" />
//                         </span>
//                     </p>
//                     <h1 className="mb-0 bread">Breed</h1>
//                     </div>
//                 </div>
//                 </div>
//             </section>
//             <div className="container my-5">

//                   {load?
//                         <FadeLoader color="#00BD56" size={40} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
//                         :
                      

//                 <div className="row justify-content-center no-gutters">
//                     <div className="col-md-12 d-flex justify-content-evenly">
                        
//                         <button  className={`btn btn-outline-primary ${type=="All" && ""}`} onClick={()=>{
//                             setType("All")
//                         }}>All</button>
//                         <button  className={`btn btn-primary ${type=="Dog" && "active"}`}onClick={()=>{
//                             setType("Dog")
//                         }}>Dog</button>
//                         <button  className={`btn btn-primary ${type=="Cat" && "active"}`}onClick={()=>{
//                             setType("Cat")
//                         }}>Cat</button>
                       
//                     </div>
//                             <h3 className="mb-6">Breeds</h3>  
//                                     {AllBreeds.map((el, index) => (
//                                         <div key={index} className="col-md-4 mb-4" style={{ marginBottom: '20px', textAlign:"center"}}>
//                                         <div className="card-container mx-3 justify-content-center" style={{
//                                             boxShadow: '0px 0px 15px gray',
//                                             padding: '20px',
//                                             borderRadius: '10px',
//                                         }}>
//                                             <h5 className="card-title" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
//                                             Breed {index + 1}
//                                             </h5>
//                                             <p className="card-text" style={{ marginBottom: '10px' }}><b>Breed: </b>{el.breedName}</p>
//                                             <p className="card-text" style={{ marginBottom: '10px' }}><b>Type: </b>{el.type}</p>
//                                             <p className="card-text" style={{ marginBottom: '10px' }}><b>Discription:</b> {el.description}</p>
//                                             {/* <p className="card-text" style={{ marginBottom: '10px' }}><b>Address:</b> {el.address}</p> */}
//                                             <img src={el.image} alt="image" style={{
//                                             maxWidth: '70px',
//                                             height: '70px',
//                                             borderRadius: '10px',
//                                             marginBottom: '10px',
//                                             }} className="img-fluid mb-2" />
//                                             <Link className="btn btn-primary d-block mx-auto" to={`/ViewPets/${el.id}`}>View Pets</Link>
//                                             {/* <img src={el.bankStatements} alt="Bank Statements" style={{
//                                             maxWidth: '70px',
//                                             height: '70px',
//                                             borderRadius: '10px',
//                                             marginBottom: '10px',
//                                             }} className="img-fluid mb-2" /> */}
//                                             {/* <p className="card-text" style={{ marginBottom: '10px' }}><b>Reason To Adopt: </b>{el.reasonToAdopt}</p> */}
//                                 </div>
//                                 </div>
//                             ))}
                  
//                         </div>
//                             }
            
//             {/* <div className="row justify-content-center no-gutters">
//               <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
//                 <div className=" table-responsive-md contact-wrap w-100 p-md-5 p-4">
//                   <h3 className="mb-4">Breeds</h3>
//                   <table className="table table-striped">
//                                     <thead>
//                                         <tr>
//                                         <th scope="col">S.No</th>
//                                         <th scope="col">Breed</th>
//                                         <th scope="col">Type</th>
//                                         <th scope="col">Des</th>
//                                         <th scope="col">Image</th>
//                                         </tr>
//                                     </thead>
//                   {
//                     AllBreeds.map((el,index)=>{
//                         return  <tbody>
//                                         <tr>
//                                         <th scope="row">{index+1}</th>
//                                         <td>{el.breedName}</td>
//                                         <td>{el.type}</td>
//                                         <td>{el.description}</td>
//                                          <td><img className="img-fluid" src={el.image} alt="" style={{height:"50px", width:"50px"}} /></td>
//                                         </tr>
                                       
//                                     </tbody>
//                                     })
//                   }
//                     </table>

                 
//                 </div>
//               </div>
             
//             </div> */}

//             </div>

//         </>
//     )
// }



import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { FadeLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function ViewBreeds() {
  const [load, setLoad] = useState(true);
  const [type, setType] = useState("All");
  const [AllBreeds, setAllBreeds] = useState([]);

  const fetchData = () => {
    let q;
    if (type === "All") {
      q = query(collection(db, "breed"));
    } else {
      q = query(collection(db, "breed"), where("type", "==", type));
    }

    onSnapshot(q, (breedData) => {
      setAllBreeds(
        breedData.docs.map((el) => {
          return { id: el.id, ...el.data() };
        })
      );
      setLoad(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
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
                  Breed <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Breed</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        {load ? (
          <FadeLoader
            color="#00BD56"
            size={40}
            cssOverride={{ display: "block", margin: "0 auto" }}
            loading={load}
          />
        ) : (
          <>
            {/* Filter Buttons */}
            <div className="row mb-4">
              <div className="col-md-12 d-flex justify-content-center "style={{ gap: "12px" }}>
                <button
                  className={`btn btn-outline-primary ${type === "All" ? "active" : ""}`}
                  onClick={() => setType("All")}
                >
                  All
                </button>
                <button
                  className={`btn btn-outline-success ${type === "Dog" ? "active" : ""}`}
                  onClick={() => setType("Dog")}
                >
                  Dog
                </button>
                <button
                  className={`btn btn-outline-success ${type === "Cat" ? "active" : ""}`}
                  onClick={() => setType("Cat")}
                >
                  Cat
                </button>
              </div>
            </div>

            {/* Heading */}
            <div className="row mb-4">
              <div className="col-md-12 text-center">
                <h3 className="mb-0">Breeds</h3>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="row">
              {AllBreeds.map((el, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div
                    className="card-container mx-3"
                    style={{
                      boxShadow: "0px 0px 15px gray",
                      padding: "20px",
                      borderRadius: "10px",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ fontWeight: "bold", marginBottom: "10px" }}
                    >
                      Breed {index + 1}
                    </h5>
                    <p className="card-text">
                      <b>Breed: </b>
                      {el.breedName}
                    </p>
                    <p className="card-text">
                      <b>Type: </b>
                      {el.type}
                    </p>
                    <p className="card-text">
                      <b>Description: </b>
                      {el.description}
                    </p>
                    <img
                      src={el.image}
                      alt="breed"
                      style={{
                        maxWidth: "70px",
                        height: "70px",
                        borderRadius: "10px",
                        marginBottom: "10px",
                      }}
                      className="img-fluid mb-2"
                    />
                    {/* <Link
                      className="btn btn-primary d-block mx-auto"
                      to={`/ViewPets/${el.id}`}
                    >
                      View Pets
                    </Link> */}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}