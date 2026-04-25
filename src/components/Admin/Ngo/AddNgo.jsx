import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth, db } from "../../../Firebase"
import { toast } from "react-toastify"
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

export default function AddNgo() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [contact, setContact] = useState("")
  const [license, setLicense] = useState("")
  const [about, setAbout] = useState("")
  const [address, setAddress] = useState("")

  const nav = useNavigate()

  const handleForm = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        let userId = userCred.user.uid
        saveData(userId)
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  const saveData = async (userId) => {
    try {
      let data = {
        name: name,
        email: email,
        contact: contact,
        license: license,
        address: address,
        about: about,
        userId: userId,
        userType: 2, // Assuming 2 is for NGO
        status: true,
        createdAt: Timestamp.now()
      }
      await setDoc(doc(db, "users", userId), data)
      toast.success("Register successfully!!")
      getUserData(userId)
    } catch (err) {
      toast.error(err.message)
    }
  }

  const getUserData = async (userId) => {
    let userDoc = await getDoc(doc(db, "users", userId))
    let userData = userDoc.data()
    sessionStorage.setItem("name", userData?.name)
    sessionStorage.setItem("email", userData?.email)
    sessionStorage.setItem("userType", userData?.userType)
    sessionStorage.setItem("userId", userId)
    sessionStorage.setItem("isLogin", true)
    toast.success("Login successfully")
    if (userData?.userType == 2) {
      nav("/ngo")
    } else {
      nav("/")
    }
  }

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
                  Register <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Register</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="row no-gutters">
          <div className="col-md-7">
            <div className="contact-wrap w-100 p-md-5 p-4">
              <h3 className="mb-4">Register</h3>
              <form
                method="POST"
                id="contactForm"
                name="contactForm"
                className="contactForm"
                onSubmit={handleForm}
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="contact">Contact</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="contact"
                        placeholder="Contact"
                        minLength={10}
                        maxLength={10}
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* New Fields */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="license">License Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="license"
                        placeholder="License Number"
                        value={license}
                        onChange={(e) => setLicense(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="about">About</label>
                      <textarea
                        className="form-control"
                        id="about"
                        placeholder="Tell us something about yourself"
                        rows="3"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"
                      />
                      <div className="submitting" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5 d-flex align-items-stretch">
            <div
              className="info-wrap w-100 p-5 img"
              style={{ backgroundImage: "url(/assets/images/img.jpg)" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}
