import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { toast } from "react-toastify"
  import { Link } from "react-router-dom"
export default function WatchPets() {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const snapshot = await getDocs(collection(db, "Pets"))
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setPets(data)
      } catch (err) {
        toast.error("Failed to fetch pets")
      } finally {
        setLoading(false)
      }
    }
    fetchPets()
  }, [])

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
              <img src={pet.image} className="card-img-top" alt={pet.name} style={{ height: 250, objectFit: "cover" }} />
              <div className="card-body">
                <h5>{pet.name}</h5>
                <p><strong>Breed:</strong> {pet.petName}</p>
                <p><strong>Type:</strong> {pet.type}</p>
                {/* <button onClick={() => handleAdopt(pet)} className="btn btn-primary w-100">Adopt</button> */}
                  {pet?.status &&
                  <Link to={"/ReqForm/"+pet?.id+"/"+pet?.ngoId} className="btn btn-primary">Adopt</Link>
                  }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
