
import { useEffect, useState } from "react"
import { collection, query, onSnapshot, where, getDoc, doc } from "firebase/firestore"
import { db } from "../../Firebase"


export default function ViewNGO() {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    const q = query(
      collection(db, "adoptionRequest"),
      where("userId", "==", sessionStorage.getItem("userId"))
    )

    onSnapshot(q, async (adoptionDoc) => {
      let adoptionData = adoptionDoc.docs.map((el) => {
        return { id: el.id, ...el.data() }
      })

      let updateData = []
      for (let i = 0; i < adoptionData.length; i++) {
        let petId = adoptionData[i].petId
        let ngoId = adoptionData[i].ngoId

        let petDoc = await getDoc(doc(db, "Pets", petId))
        let ngoDoc = await getDoc(doc(db, "users", ngoId))

        updateData.push({
          ...adoptionData[i],
          pet: petDoc.data(),
          ngo: ngoDoc.data(),
        })
      }

      setPets(updateData)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <h4 className="text-center">Loading...</h4>
  if (pets.length === 0) return <h4 className="text-center">No NGO Found</h4>

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Your Selected NGOs</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Pet Image</th>
              <th>Pet Name</th>
              <th>NGO Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet.id}>
                <td>
                  <img
                    src={pet?.pet?.image}
                    alt={pet?.pet?.petName}
                    style={{ width: "100px", height: "80px", objectFit: "cover" }}
                  />
                </td>
                <td>{pet?.pet?.petName}</td>
                <td>{pet?.ngo?.name}</td>
                <td>{pet?.ngo?.email}</td>
                <td>{pet?.ngo?.contact}</td>
                <td>{pet?.ngo?.address}</td>
                <td>{pet?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
