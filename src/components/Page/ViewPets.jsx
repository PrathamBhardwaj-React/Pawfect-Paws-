
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { toast } from "react-toastify"
  import { Link } from "react-router-dom"
export default function ViewPets() {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(true)
  const [breedsData,setBreedData]=useState([])

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

    const fetchBreeds=async()=>{
       try {
        const snapshot = await getDocs(collection(db, "breed"))
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setBreedData(data)
      } catch (err) {
        toast.error("Failed to fetch pets")
      } finally {
        setLoading(false)
      }
    }
    fetchBreeds()
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
      await addDoc(collection(db, "adoptionrequest"), {
        petId: pet.id,
        petName: pet.petName,
        breed: pet.breedName,
        dispcription: pet.description,
        type: pet.type,
        age: pet.age,
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
                <p><strong>Name:</strong> {pet.petName}</p>
                <p><strong>Type:</strong> {pet.type}</p>
                <p><strong>Age:</strong> {pet.age}</p>
                <p><strong>Description:</strong> {pet.description}</p>
                <p><strong>Breed:</strong> {
                  breedsData.map((el)=>{
                    if(el.id==pet?.breed){
                      return el.breedName
                    }
                  })
                }
                </p>

                {/* <button onClick={() => handleAdopt(pet)} className="btn btn-primary w-100">Adopt</button> */}
                  {pet?.status &&
                  <Link to={"/adoption/"+pet?.id+"/"+pet?.ngoId} className="btn btn-primary">Adopt</Link>
                  }
              </div>
        
            </div>
        
          </div>

        ))}
      </div>

    </div>

  )
}