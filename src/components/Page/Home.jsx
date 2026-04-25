import { useState } from "react"


export default function Home(){
   const [contact,setContactNumber]=useState("");
  const [name,setName]=useState("");
  const [date,setDate]=useState("");
    return(
        <>
  <div
    className="hero-wrap js-fullheight d-flex align-items-center"
    style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")',height:`712px` }}
    data-stellar-background-ratio="0.5" 
  >
    
    <div className="overlay" />
    <div className="container">
      <div
        className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
        data-scrollax-parent="true"
      >
        <div className="col-md-11 ftco-animate text-center ">
          <h1 className="mb-5 mt-5 pt-5 ">Highest Quality Care For Pets You'll Love </h1>
          {/* <p>
            <a href="#" className="btn btn-primary mr-md-4 py-3 px-4">
              Learn more <span className="ion-ios-arrow-forward" />
            </a>
          </p> */}
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section bg-light ftco-no-pt ftco-intro">
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services active text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-blind" />
            </div>
            <div className="media-body">
              <h3 className="heading">Emergency Services</h3>
              <p>
                We coordinate with local 24/7 clinics to ensure your pet receives fast medical attention in times of need.
              </p>
              <a
                href="#"
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-dog-eating" />
            </div>
            <div className="media-body">
              <h3 className="heading">Care Advices</h3>
              <p>
               We offer personalized care tips for your pet's health, behavior, and well-being — tailored by vets and experienced caretakers.
              </p>
              <a
                href="#"
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-grooming" />
            </div>
            <div className="media-body">
              <h3 className="heading">Veterinary Help</h3>
              <p>
              Connect with licensed veterinarians for health checkups, vaccinations, and expert consultations through our network.
              </p>
              <a
                href="#"
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pt ftco-no-pb">
    <div className="container">
      <div className="row d-flex no-gutters">
        <div className="col-md-5 d-flex">
          <div
            className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
            style={{ backgroundImage: "url(/assets/images/about-1.jpg)" }}
          ></div>
        </div>
        <div className="col-md-7 pl-md-5 py-md-5">
          <div className="heading-section pt-md-5">
            <h2 className="mb-4">Why Choose Us?</h2>
          </div>
          <div className="row">
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-stethoscope" />
              </div>
              <div className="text pl-3">
                <h4>Animal-Centric Mission</h4>
                <p>
From health checkups to behavior assessments, we ensure every pet is truly ready for a loving home.
                </p>
              </div>
            </div>
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-customer-service" />
              </div>
              <div className="text pl-3">
                <h4>Customer Supports</h4>
                <p>
Our team of volunteers and experts offer support before, during, and after adoption. We help match you with the pet that fits your lifestyle, not just your wishlist.
                </p>
              </div>
            </div>
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-emergency-call" />
              </div>
              <div className="text pl-3">
                <h4>Emergency Services</h4>
                <p>
 We connect you with nearby veterinary clinics and emergency animal hospitals open around the clock. Immediate help for injuries, illnesses, or sudden health issues.
                </p>
              </div>
            </div>
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-veterinarian" />
              </div>
              <div className="text pl-3">
                <h4>User-Friendly Platform</h4>
                <p>
Whether you're browsing on your phone or desktop, our responsive, intuitive interface makes finding your future pet easy .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-counter" id="section-counter">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 text-center">
            <div className="text">
              <strong className="number" data-number={50}>
                0
              </strong>
            </div>
            <div className="text">
              <span>Customer</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 text-center">
            <div className="text">
              <strong className="number" data-number={8500}>
                0
              </strong>
            </div>
            <div className="text">
              <span>Professionals</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 text-center">
            <div className="text">
              <strong className="number" data-number={20}>
                0
              </strong>
            </div>
            <div className="text">
              <span>Products</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 text-center">
            <div className="text">
              <strong className="number" data-number={50}>
                0
              </strong>
            </div>
            <div className="text">
              <span>Pets Hosted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light ftco-faqs">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 order-md-last">
                    <div
  className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
  style={{ backgroundImage: "url(/assets/images/about.jpg)" }}
>
  <a
    href="https://www.youtube.com/watch?v=6v4OgilckIc"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-video d-flex justify-content-center align-items-center"
  >
    <span className="fa fa-play" />
  </a>
</div>
          <div className="d-flex mt-3">
            <div
              className="img img-2 mr-md-2"
              style={{ backgroundImage: "url(/assets/images/about-2.jpg)" }}
            />
            <div
              className="img img-2 ml-md-2"
              style={{ backgroundImage: "url(/assets/images/about-3.jpg)" }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="heading-section mb-5 mt-5 mt-lg-0">
            <h2 className="mb-3">Frequently Asks Questions</h2>
          </div>
          <div
            id="accordion"
            className="myaccordion w-100"
            aria-multiselectable="true"
          >
            <div className="card">
              <div className="card-header p-0" id="headingOne">
                <h2 className="mb-0">
                  <button
                    href="#collapseOne"
                    className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <p className="mb-0">How to train your pet dog?</p>
                    <i className="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div
                className="collapse show"
                id="collapseOne"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="card-body py-3 px-0">
                  <ol>
                    <li>Use treats and praise as rewards.s</li>
                    <li>Train in 5–10 minute sessions, 2–3 times a day.</li>
                    <li>
                      Stay consistent with commands and timing.
                    </li>
                    <li>Redirect chewing to toys, not furniture</li>
                    <li>Use the same words and rules every time. Mixed signals confuse your dog.</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0" id="headingTwo" role="tab">
                <h2 className="mb-0">
                  <button
                    href="#collapseTwo"
                    className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <p className="mb-0">How to manage your pets?</p>
                    <i className="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div
                className="collapse"
                id="collapseTwo"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="card-body py-3 px-0">
                  <ol>
                    <li>Feed your pet a balanced diet based on their age, breed, and health.</li>
                    <li>Avoid giving human food (especially chocolate, onions, grapes, etc.)</li>
                    <li>
                      Stay updated on vaccinations, deworming, and flea/tick treatments.
                    </li>
                    <li>Dogs need daily walks and playtime to stay healthy.</li>
                    <li>Brush their coat regularly to reduce shedding and prevent matting.</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0" id="headingThree" role="tab">
                <h2 className="mb-0">
                  <button
                    href="#collapseThree"
                    className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <p className="mb-0">
                      What is the best grooming for your pets?
                    </p>
                    <i className="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div
                className="collapse"
                id="collapseThree"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="card-body py-3 px-0">
                  <ol>
                    <li>Use a slicker brush or de-shedding tool.</li>
                    <li>Bathing Every 4–6 weeks unless very dirty.</li>
                    <li>
                     Avoid cutting the quick (the pink part inside the nail).
                    </li>
                    <li>Use a vet-approved ear cleaner and cotton pads.</li>
                    <li>Brush 2–3 times a week using dog toothpaste</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0" id="headingFour" role="tab">
                <h2 className="mb-0">
                  <button
                    href="#collapseFour"
                    className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <p className="mb-0">
                      What are those requirements for sitting pets?
                    </p>
                    <i className="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div
                className="collapse"
                id="collapseFour"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="card-body py-3 px-0">
<p>
                   You must genuinely enjoy being around pets and be comfortable with different breeds, sizes, and temperaments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="ftco-section testimony-section"
    style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
  >
    <div className="overlay" />
    <div className="container">
      <div className="row justify-content-center pb-5 mb-3">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <h2>Happy Clients &amp; Feedbacks</h2>
        </div>
      </div>
  <div className="row ftco-animate">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel ftco-owl">
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-left" />
                </div>
                <div className="text">
                  <p className="mb-4">
                   “Pawfect Paws made the adoption process so easy and heartwarming! The staff helped me find the perfect furry companion and supported me even after I brought Simba home. I couldn’t be happier!”
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(/assets/images/person_1.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Anjali Sharma</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-left" />
                </div>
                <div className="text">
                  <p className="mb-4">
                    “From the first visit to final adoption, everything was smooth and professional. I loved how they actually cared about matching me with the right pet. Thank you for bringing Luna into my life!”
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(/assets/images/person_2.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Parampreet</p>
                      <span className="position">Shop Owner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-left" />
                </div>
                <div className="text">
                  <p className="mb-4">
                   “What a wonderful team! The volunteers were so kind and knowledgeable. They truly love the animals they care for. I adopted a rescued cat and received full support, even with her special needs.”
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(/assets/images/person_3.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Gurjot Singh</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-left" />
                </div>
                <div className="text">
                  <p className="mb-4">
                    “I’ve been to other shelters, but Pawfect Paws stands out. Clean facilities, healthy pets, and a staff that treats animals like family. Highly recommend to anyone thinking of adopting.”
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(/assets/images/person_1.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-left" />
                </div>
                <div className="text">
                  <p className="mb-4">
                   “I was nervous about adopting for the first time, but the team made me feel confident. The pet training advice and care kits were a nice touch. Rocky has truly changed my life!”
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(/assets/images/person_2.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center pb-5 mb-3">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <h2>Affordable Packages</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 ftco-animate">
          <div className="block-7">
            <div
              className="img"
              style={{ backgroundImage: "url(/assets/images/pricing-1.jpg)" }}
            />
            <div className="text-center p-4">
              <span className="excerpt d-block">Personal</span>
              <span className="price">
                <sup>₹</sup> <span className="number">4999</span> <sub>/per month</sub>
              </span>
              <ul className="pricing-text mb-5">
                <li>
                  <span className="fa fa-check mr-2" />5 Dog Walk
                </li>
                <li>
                  <span className="fa fa-check mr-2" />3 Vet Visit
                </li>
                <li>
                  <span className="fa fa-check mr-2" />3 Pet Spa
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  Free Supports
                </li>
              </ul>
              <a href="#" className="btn btn-primary d-block px-2 py-3">
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div className="block-7">
            <div
              className="img"
              style={{ backgroundImage: "url(/assets/images/pricing-2.jpg)" }}
            />
            <div className="text-center p-4">
              <span className="excerpt d-block">Business</span>
              <span className="price">
                <sup>₹</sup> <span className="number">7999</span> <sub>/per month</sub>
              </span>
              <ul className="pricing-text mb-5">
                <li>
                  <span className="fa fa-check mr-2" />5 Dog Walk
                </li>
                <li>
                  <span className="fa fa-check mr-2" />3 Vet Visit
                </li>
                <li>
                  <span className="fa fa-check mr-2" />3 Pet Spa
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  Free Supports
                </li>
              </ul>
              <a href="#" className="btn btn-primary d-block px-2 py-3">
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div className="block-7">
            <div
              className="img"
              style={{ backgroundImage: "url(/assets/images/pricing-3.jpg)" }}
            />
            <div className="text-center p-4">
              <span className="excerpt d-block">Ultimate</span>
              <span className="price">
                <sup>₹</sup> <span className="number">10999</span> <sub>/per month</sub>
              </span>
              <ul className="pricing-text mb-5">
                <li>
                  <span className="fa fa-check mr-2" />5 Dog Walk
                </li>
                <li>
                  <span className="fa fa-check mr-2" />3 Vet Visit
                </li>
                <li>
                  <span className="fa fa-check mr-2" />3 Pet Spa
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  Free Supports
                </li>
              </ul>
              <a href="#" className="btn btn-primary d-block px-2 py-3">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center pb-5 mb-3">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <h2>Pets Gallery</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 ftco-animate">
          <div
            className="work mb-4 img d-flex align-items-end"
            style={{ backgroundImage: "url(/assets/images/gallery-1.jpg)" }}
          >
            <a
              href="/assets/images/gallery-1.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </a>
            <div className="desc w-100 px-4">
              <div className="text w-100 mb-3">
                <span>Cat</span>
                <h2>
                  <a href="work-single.html">Persian Cat</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div
            className="work mb-4 img d-flex align-items-end"
            style={{ backgroundImage: "url(/assets/images/gallery-2.jpg)" }}
          >
            <a
              href="/assets/images/gallery-2.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </a>
            <div className="desc w-100 px-4">
              <div className="text w-100 mb-3">
                <span>Dog</span>
                <h2>
                  <a href="work-single.html">Pomeranian</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div
            className="work mb-4 img d-flex align-items-end"
            style={{ backgroundImage: "url(/assets/images/gallery-3.jpg)" }}
          >
            <a
              href="/assets/images/gallery-3.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </a>
            <div className="desc w-100 px-4">
              <div className="text w-100 mb-3">
                <span>Cat</span>
                <h2>
                  <a href="work-single.html">Sphynx Cat</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div
            className="work mb-4 img d-flex align-items-end"
            style={{ backgroundImage: "url(/assets/images/gallery-4.jpg)" }}
          >
            <a
              href="/assets/images/gallery-4.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </a>
            <div className="desc w-100 px-4">
              <div className="text w-100 mb-3">
                <span>Cat</span>
                <h2>
                  <a href="work-single.html">British Shorthair</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div
            className="work mb-4 img d-flex align-items-end"
            style={{ backgroundImage: "url(/assets/images/gallery-5.jpg)" }}
          >
            <a
              href="/assets/images/gallery-5.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </a>
            <div className="desc w-100 px-4">
              <div className="text w-100 mb-3">
                <span>Dog</span>
                <h2>
                  <a href="work-single.html">Beagle</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div
            className="work mb-4 img d-flex align-items-end"
            style={{ backgroundImage: "url(/assets/images/gallery-6.jpg)" }}
          >
            <a
              href="/assets/images/gallery-6.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </a>
            <div className="desc w-100 px-4">
              <div className="text w-100 mb-3">
                <span>Dog</span>
                <h2>
                  <a href="work-single.html">Pug</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
       <section className="ftco-section bg-light">
            <div className="container">
              <div className="row justify-content-center pb-5 mb-3">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <h2>Latest news from our blog</h2>
        </div>
      </div>
              <div className="row d-flex">
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded"
                      style={{ backgroundImage: 'url("/assets/images/image_1.jpg")' }}
                    ></a>
                    <div className="text p-4">
                      <div className="meta mb-2">
                        <div>
                          <a href="#">April 07, 2020</a>
                        </div>
                        <div>
                          <a href="#">Admin</a>
                        </div>
                        <div>
                          <a href="#" className="meta-chat">
                            <span className="fa fa-comment" /> 3
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="https://youtu.be/JPI3qjmtHHg">
                          Best Dog Breeds for Kids and Families
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded"
                      style={{ backgroundImage: 'url("/assets/images/image_2.jpg")' }}
                    ></a>
                    <div className="text p-4">
                      <div className="meta mb-2">
                        <div>
                          <a href="#">April 07, 2020</a>
                        </div>
                        <div>
                          <a href="#">Admin</a>
                        </div>
                        <div>
                          <a href="#" className="meta-chat">
                            <span className="fa fa-comment" /> 3
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="https://youtu.be/Zb3Wzs2FcFE">
                          Basic Pet Care: Dogs(some important things)
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded"
                      style={{ backgroundImage: 'url("/assets/images/image_3.jpg")' }}
                    ></a>
                    <div className="text p-4">
                      <div className="meta mb-2">
                        <div>
                          <a href="#">April 07, 2020</a>
                        </div>
                        <div>
                          <a href="#">Admin</a>
                        </div>
                        <div>
                          <a href="#" className="meta-chat">
                            <span className="fa fa-comment" /> 3
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="https://youtu.be/ddxrEWm709Y?feature=shared">
                          How to Pet a Cat(some good tips)
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li>
                        <a href="#">&lt;</a>
                      </li>
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                     
                     
                      <li>
                        <a href="#">&gt;</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
  <section
    className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img"
    style={{ backgroundImage: "url(/assets/images/bg_3.jpg)" }}
  >
    <div className="overlay" />
   <div className="container">
      <div className="row d-md-flex justify-content-end">
        <div className="col-md-12 col-lg-6 half p-3 py-5 pl-lg-5 ftco-animate">
          <h2 className="mb-4">Free Consultation</h2>
          <form action="#" className="appointment">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <div className="form-field">
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="fa fa-chevron-down" />
                      </div>
                      <select name="" id="" className="form-control">
                        <option value="">Select services</option>
                        <option value=""> Adoption Counseling</option>
                        <option value="">Health & Veterinary Support</option>
                        <option value="">Grooming Services</option>
                        <option value="">Pet Supplies & Starter Kits</option>
                        <option value="">Photo Sessions & Adoption Events</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e)=>
                    {
                      setName(e.target.value)
                    }
                  }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                    minLength={10}
                    maxLength={10}
                    value={contact}
                    onChange={(e)=>
                    {
                      setContactNumber(e.target.value)
                    }
                  }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-wrap">
                    <div className="icon">
                      <span className="fa fa-calendar" />
                    </div>
                    <input
                      type="date"
                      className="form-control appointment_date"
                      placeholder="Date"
                      value={date}
                      onChange={(e)=>
                      {
                        setDate(e.target.value)
                      }
                    }

                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-wrap">
                    <div className="icon">
                      <span className="fa fa-clock-o" />
                    </div>
                    <input
                      type="time"
                      className="form-control appointment_time"
                      placeholder="Time"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Send message"
                    className="btn btn-primary py-3 px-4"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>

    )
}
