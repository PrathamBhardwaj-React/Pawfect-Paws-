import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { collection, getDocs, addDoc, Timestamp, query, onSnapshot, where, getDoc, doc } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { toast } from "react-toastify"
  import { Link } from "react-router-dom"
export default function ViewAdoption() {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(true)

 const fetchData=()=>{
        const q=query(collection(db,"adoptionRequest")
        ,where("userId","==",sessionStorage.getItem("userId"))
    ) 
        onSnapshot(q,async (adoptionDoc)=>{
        
               let adoptionData= adoptionDoc.docs.map((el)=>{
                // console.log(el.id,el.data());
                return{id:el.id,...el.data()}
            })
            let updateData=[]
            for(let i=0;i<adoptionData.length;i++){
                let userId=adoptionData[i].userId 
                let userDoc=await getDoc(doc(db,"users", userId))
                let userData=userDoc.data()
                let ngoId=adoptionData[i].ngoId 
                let ngoDoc=await getDoc(doc(db,"users", ngoId))
                let ngoData=ngoDoc.data()
                let petId=adoptionData[i].petId 
                let petDoc=await getDoc(doc(db,"Pets", petId))
                let petData=petDoc.data()
                updateData.push({...adoptionData[i],pet:petData, ngo:ngoData, user:userData});
                
            }
            setPets(updateData)
            // setLoad(false)
        })
        setLoading(false)
    }
    useEffect(()=>{
        fetchData()
    },[])


  const handleAdopt = async (pet) => {
    // const auth = getAuth()
    // const user = auth.currentUser
      const user = getAuth().currentUser
    // console.log("User:", user)


    // if (!user) return toast.error("Login required")
      


  if (!user) {
    toast.error("Login required")
    return
  }



    try {
      await addDoc(collection(db, "adoptions"), {
        petId: pet.id,
        petName: pet.petName,
        breed: pet.breedName,
        type: pet.type,
        image: pet.image,
        status: "pending",
        // userId: user.uid, 
       
        createdAt: Timestamp.now()
      })
      toast.success("Adoption request sent!")
    } catch (err) {
      toast.error("Adoption failed")
    }
  }

  if (loading) return <h4 className="text-center">Loading...</h4>
  if (pets.length === 0) return <h4 className="text-center">No Pets Found</h4>

  return (
  
    <div className="container mt-4">
      <h3 className="mb-4">Adopt A Pet</h3>
      <div className="row">
        {pets.map((pet) => (
          <div className="col-md-4 mb-4" key={pet.id}>
            <div className="card h-100 shadow">
              <img src={pet?.pet?.image} className="card-img-top" alt={pet?.pet?.petName} style={{ height: 250, objectFit: "cover" }} />
              <div className="card-body">
                <h5>{pet?.pet?.petName}</h5>
                <div>
                    NGO Details:
                    <p>{pet?.ngo?.name}</p>
                    <p>{pet?.ngo?.email}</p>
                </div>
                <p>Status : {pet?.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
