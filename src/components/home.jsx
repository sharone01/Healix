import './home.css'
import imagehero from '../assets/hero-image.png'
import CallIcon from '../assets/call.jpg'
import about1 from '../assets/about-us-image-1.jpg'
import about2 from '../assets/about-us-image-2.jpg'
import trustedclient2 from '../assets/trusted-client-img-2.jpg'
import trustedclient1 from '../assets/trusted-client-img-1.jpg'
import trustedclient3 from '../assets/trusted-client-img-3.jpg'

import whatwedo1 from '../assets/what-we-do-image-1.jpg'
import whatwedo2 from '../assets/what-we-do-image-2.jpg'
import chooseimage from '../assets/why-choose-image.png'
import expertimg from '../assets/expertise-image.jpg'
import program1 from '../assets/program-1.jpg'
import program2 from '../assets/program-2.jpg'
import program3 from '../assets/program-3.jpg'
import stack from '../assets/stack.jpg'
import fourcircles from '../assets/4circles.jpg'
import threecircles from '../assets/3circles.jpg'
import square from '../assets/square.jpg'
import pad from '../assets/bookpad.jpg'
import buttoncloves from '../assets/btn.jpg'
import vector from '../assets/vector.jpg'
import inout from '../assets/inout.jpeg'
import foursquares from '../assets/4squares.jpg'
import treedgrm from '../assets/treedg.jpg'
import headset from '../assets/Hset.jpg'
import spanner from '../assets/tool.jpg'
import appoint from '../assets/book-appointment-image.jpg'
import faq1 from '../assets/faq-image-1.jpg'
import faq2 from '../assets/faq-image-2.jpg'
import faqcircle from '../assets/faq-image-circle.svg'
import author2 from '../assets/author-2.jpg'
import author3 from '../assets/author-3.jpg'
import author4 from '../assets/author-4.jpg'
import fivestars from '../assets/5stars.jpg'

import React, { useEffect} from 'react';
import testimonialimage1 from '../assets/testimonial-image-1.jpg'
import testimonialimage2 from '../assets/testimonial-image-2.jpg'
import testimonialimage3 from '../assets/testimonial-image-3.jpg'
import logo from "../assets/logo.svg"
import star from '../assets/star.jpg'
import { Link } from 'react-router'
import post1 from '../assets/post-1.jpg'
import post2 from '../assets/post-2.jpg'
import post3 from '../assets/post-3.jpg'
import videobg from '../assets/videobg.jpg'
import X from '../assets/x.jpg'
import fb from '../assets/fb.jpg'
import pinterest from '../assets/pinterest.jpg'
import ig from '../assets/ig.jpg'



const Home = () => {

  // CONNECTING MULTIPLE SECTIONS TO THE SAME ANCHOR TAG (KNOW MORE BUUTON)

  const scrollToSections = () => {
  document.getElementById("2").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    document.getElementById("3").scrollIntoView({ behavior: "smooth" });
  }, 1000); // scroll after 1 second
   setTimeout(() => {
    document.getElementById("4").scrollIntoView({ behavior: "smooth" });
  }, 1000);
   setTimeout(() => {
    document.getElementById("5").scrollIntoView({ behavior: "smooth" });
  }, 1000);
   setTimeout(() => {
    document.getElementById("6").scrollIntoView({ behavior: "smooth" });
  }, 1000);
};


   const cardData = [
        {
           id: 1,
          image: post1,
          title: 'The power of selfcare in your wellness Journey',
          link: 'Read More'
        },

        { 
          id: 2,
          image: post2,
          title: 'Understanding the impact of sleep on health',
          link: 'Read More'

        },
        { 
          id: 1,
          image: post3,
          title: 'Overcoming common challenge to fitness ',
          link: 'Read More'
         },
        
    ];

     {/* JAVASCRIPT FOR FREQUENTLY ASKED QUESTIONS */}  

  useEffect (() =>{
    const items = document.querySelectorAll(".accordion-item");
    items.forEach(item => {
  item.querySelector(".accordion-header").addEventListener("click", () => {
    item.classList.toggle("active");
  });
}); 
  })
  
    return (
        <div>

            {/* HERO SECTION */}


<section className="hero" id='1'>
  <div className="hero-text">
    <p className="welcome">✨ Welcome To Healix</p>
    <h1>Transform your<br/> health<br/>embrace <br/>life today</h1>
    <p>Achieve your wellness goals with personalized guidance, expert support, and <br/>
    sustainable habits for a healthier, happier you..</p><br/><br/>
    <div className='d-flex gap-4 align-items-center'>
      <button >
        <a href='#2' onClick={scrollToSections} >Know More</a>
        </button>

  {/* <a href="#about">About Us</a> / <a href="#services">Services</a> */}


    <div className='num gap-3 d-flex'>
      <img className='circle-1 call-icon' src = {CallIcon}/>
      <span> Call us 24/7 <br/>
    <span className='text-white hover:text-#F9D67B'>(123)456789</span></span> 
    </div>
    </div><br/>
    <div className='founder d-flex gap-4'> 
          <div className='founder-images'>
              <img src= {trustedclient1}/>
              <img src={trustedclient2}/>
              <img src= {trustedclient3}/>
              <h5 className='circle bg-warning rounded-5 h-90px w-90px text-dark 
              d-flex justify-contents-center align-items-center' > 15K</h5>
          </div>
         <div >
            <span> <strong> 5.0</strong> 
            15.5K review</span>
          </div>

    </div>
         
  </div>

  <div className="hero-img" >
    <img src= {imagehero} />
     <div className='box-25 text-dark'>
            <span>25</span>
            <p>Years of <br/> experience</p>
          </div>
  </div>

 </section><br/><br/><br/>


       {/* ABOUT US  */}
  <section id='2'>
        <div className='about-section'>
            <div className='about-images cols-6'>
                <img src= {about1} className='about-img img-1'/>
                <img src= {about2} className='about-img img-2'/>
                
                <br/><br/><br/>

                 <div className='box-25'>
            <span>25</span>
            <p>Years of <br/> experience</p>
          </div>

            </div>
           
         <div className='about-content cols-6'>
                <h4>✨ About Us</h4>
                <h2>Your wellness journey <br/>starts here</h2><br/>
                <p>Discover a holistic approach to health and wellness, 
                  tailored to help you achieve <br/>
                balance, vitality, and lasting transformation.</p>
            
          <div className='about-features'>
            <ul>
                <li >Holistic Health Approach</li><br/>
                <li>One-on-One Coaching</li>
            </ul>
            <ul>
                <li>Sustainable Life Strategies</li><br/>
                <li>Nutrition and Meal Guidance</li>
            </ul>
          </div>
          <br/><br/>


        <div className='about-footer'>

        
          <div className='about-btn'>
            <button>More about Us</button>
            </div>
            <div className='founder'> 
              <img src={trustedclient2}/>
              </div>
              <div>
            <span> <strong>Bessie Cooper</strong> <br/>
            Co-founder</span>
            </div>
          
       </div>
        </div> 
        </div>
</section>
        <br/><br/><br/>

{/* SERVICES SECTION */}

<section className='services-section' id='3'>
     <div className='grid-container'>

         <div className=' first-item'>
           <h4>✨ Services</h4>
           <h2>We provide <br/>services for<br/> you</h2>
           <p>We offer personalized health coaching services<br/>
           support your wellness journey and empower you<br/> to life.</p>
           <br/>
           <button className='rounded-pill'>All Services</button>
         </div>

         <div className='grid-item'>
          <div className='circle'>
             <img src= {stack} className='icon'/>
            </div><br/>
           <h3>Nutrition counseling</h3>
           <p>Receive personalized nutrition guidance <br/>
            to create balanced, sustainable eating <br/>
             habits that support your health.</p><br/>

            <a class="nav-link active " href="#">Read More →</a>

         </div>

        <div className='grid-item'>
          <div className='circle'>
             <img src= {fourcircles} className='icon' />
            </div><br/>
           <h3>Group Coaching Sessions</h3>
           <p>Receive personalized nutrition guidance<br/>
            to create balanced, sustainable eating <br/>
            habits that support your health.</p><br/>

             <a class="nav-link active " href="#">Read More →</a>
          </div> 

          <div className='grid-item'>
            <div className='circle'>
             <img src= {threecircles} className='icon'/>
            </div><br/>

            <h3>Work-Life Coaching</h3>
            <p>Receive personalized nutrition guidance<br/>
            to create balanced, sustainable eating <br/>
            habits that support your health.</p><br/>

             <a class="nav-link active  " href="#">Read More →</a>
          </div>

          <div className='grid-item'>
             <div className='circle'>
             <img src= {square} className='icon' />
            </div><br/>

            <h3>Chronic Management</h3>
            <p>Receive personalized nutrition guidance<br/>
            to create balanced, sustainable eating <br/>
            habits that support your health.</p><br/>

             <a class="nav-link active " href="#">Read More →</a>
          </div>

          <div className=' last-item'>
            
              <img src= {whatwedo2}/>

              
              <div className='text-overlay'>
                <div>
            <h3>Have You any question</h3>
            <h2>Don't waste your time call us!</h2><br/>

            <div className='num d-flex gap-3'>
               <img className='circle-1' src = {CallIcon}/>
              <span> Call us 24/7 <br/>
             <span className='text-success'>
             <strong className='fw-bolder text-white fs-larger'> (123) 456 789 </strong></span>
            </span> 
            </div>
            </div>

            </div>
          </div>
        
     </div><br/>
     <div className='services-footer text-align-center justify-contents-center align-items-center ms-1000px'>
    <p className='d-flex' ><span>Free</span> 
    Let’s make something great work together.
     <a className='free-quote nav-link active text-success text-decoration-underline fw-bold' href='#'>Get Free Quote</a>
     </p>

     </div>

</section><br/>

  {/* WHAT WE DO SECTION */}

<section className='weDo-section' id='4'> {/* three sections */}
  
   {/* first section image */}
  <div className='weDo-1'>
    <img src = {whatwedo1}/>
  </div>

   {/* second section images and text  */}

  <div className='weDo-2'>
    <h4 >✨ What We Do</h4>
    <h2>Guiding your<br/> health wellness</h2>

   <div className='imgtxt'>

    <div className='imgtxt-premiere'>
      <div className='circle'>
        <img src= {pad} className='icon'/>
      </div>
      <div>
        <h3>Stress reduction techniques</h3>
        <p>Receive personalized nutrition guidance<br/>
         to create balanced, sustainable eating.</p>
      </div>

    </div>

    <div className='imgtxt-premiere'>
      <div className='circle'>
        <img src= {stack} className='icon'/>
      </div>
      <div>
        <h3>Goal-oriented wellness plan</h3>
        <p>Receive personalized nutrition guidance<br/>
         to create balanced, sustainable eating.</p>
      </div>

    </div>

    <div className='imgtxt-premiere'>
      <div className='circle'>
        <img src= {square} className='icon'/>
      </div>
      <div>
        <h3>Weight loss strategies</h3>
        <p>Receive personalized nutrition guidance<br/>
         to create balanced, sustainable eating.</p>
      </div>

    </div>

   </div> 

  </div>

     {/* third section image */}

     <div className='weDo-3'>
      
      <p>Empowering you to achieve optimal health and <br/>
       wellness with personalized coaching, support.</p><br/>

       <button className='rounded-pill'>Contact Us</button><br/><br/>
       
       <div>
        <img src= {whatwedo2}/>
       </div>

     </div>

</section><br/><br/>


{/* WHY CHOOSE US  */}

<section className='choose text-white' id='5'>
  <h4>✨ Why Choose Us</h4>

  <div className='choose-1'>
    <h1>Your partner in lasting <br/>wellness</h1>
    <p className=''>With a personalized approach and unwavering support, we guide you toward <br/>
    sustainable health and lasting well-being. Trust us to help you achieve your<br/>
     wellness goals.</p>
  </div><br/><br/><br/>
 

     {/* cards image and cards flexed   */}

   <div className='choose-crds'> 
    
    {/* first flexed item: flexed cards */}

    <div className='choose-crds1'>

      <div className='crd'>
         <div className='circle '>
            <img src= {buttoncloves} className='icon'/>
          </div><br/>

        <h3>Nutrition counseling</h3>
        <p>Receive personalize nutrition <br/>
         guidance to create balanced,<br/>
          sustainable eating.</p>
         
      </div><br/><br/>

      <div className='crd'>
         <div className='circle'>
            <img src= {vector} className='icon'/>
          </div><br/>
        <h3>Supportive coaching</h3>
        <p>Receive personalize nutrition <br/>
         guidance to create balanced,<br/>
          sustainable eating.</p>
      
      </div>

    </div>
     
     {/* second flexed item */}

    <div className='choose-image'>
      <img src= {chooseimage}/>
    </div>

    <div className='choose-crds2'>

       <div className='crd'>
        <div className='circle'>
            <img src= {inout} className='icon'/>
          </div>
        <h3>Holistic approach</h3>
        <p>Receive personalize nutrition <br/>
         guidance to create balanced,<br/>
          sustainable eating.</p>
          
      </div><br/><br/>

      <div className='crd'>
        <div className='circle'>
            <img src= {fourcircles} className='icon'/>
          </div>
        <h3>Focus on sustainable</h3>
        <p>Receive personalize nutrition <br/>
         guidance to create balanced,<br/>
          sustainable eating.</p>
          
      </div>

    </div>

  </div>

</section><br/><br/>


    {/* our expertise section */}

<section className='expertise' id='6'>
  <h4 >✨ Our Expertise</h4>
  <div className='expertext '>
    <h1>Mastering wellness for<br/> your success</h1>
    <p>We specialize in personalized health strategies designed to help you achieve <br/>
     balance, energy, and lasting success. With expert guidance and a holistic <br/>
     approach, we empower you to embrace healthier habits.</p>
  </div>
  <br/><br/>

  <div className='expertflex'>

    <div>
      <img src= {expertimg}/>
    </div>

    <div className='expert-crds'>

      <div className='expert-crd'>
        <h3>Chronic Management</h3>
        <p>Receive personalized nutrition guidance to create balanced, sustainable <br/>
        eating habits that support your health receive personalized nutrition <br/>
         guidance to create balanced.</p><br/>

         <a class="nav-link active text-success" href="#">Read More  →</a>
      </div><br/><br/>

      <div className='expert-crd'>
        <h3>Personalized Health Solutions</h3>
        <p>Receive personalized nutrition guidance to create balanced, sustainable <br/>
        eating habits that support your health receive personalized nutrition <br/>
         guidance to create balanced.</p><br/>

         <a class="nav-link active text-success " href="#">Read More  →</a>
      </div>

    </div>

  </div>

</section><br/><br/><br/>

   {/* OUR VIDEOS OUR VIDEOS OUR VIDEOS OUR VIDEOS!!! */}

   <section id='7' style={{
    marginBottom:'2.5rem'
    
   }}>
    <div style={{
      borderRadius:'20px',
      display:'flex',
      position:'relative',
      overflow:'hidden',
      boxShadow:'0 10px 15px rgba(0,0,0,0.1)',
      justifyContent:'left'
      
    }}>
      <img src= {videobg} style={{
        width:'100vw',
        height:'60rem',
        objectFit:'cover',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
        
        
      }}/>
      
    <div style={{
      
      color: 'white',
      position:'absolute',
      padding:'1.5rem',
      marginTop:'10%',
      
    }}>
      
      <h4> ✨ Our Video</h4><br/>
      <h1 style={{
        fontSize:'3.5rem',
        fontWeight:'bolder',
        marginTop:'0.5rem'
      }}>Live through wellness<br/> video stories</h1><br/>
      <p style={{
        fontSize:'1.05rem'
      }}>Explore inspiring stories of transformation and growth through our wellness <br/>
      videos, showcasing real journeys toward healthier, happier lives.</p><br/>

      <button style={{
        borderRadius: '25px',
        background: '#F9D67B',
        padding: '15px 25px'
      }}><a to='#'>Explore More</a></button>


      {/* <button aria-label="Play video" className="play-btn">
  <div className="ring-wrap">
    
    <svg width="200" height="200" viewBox="0 0 200 200" className="rotate-slow">
      <defs>
        <path id="ringPath" d="M100,12 a88,88 0 1,1 0,176 a88,88 0 1,1 0,-176" />
      </defs>
      <text className="ring-text">
        <textPath href="#ringPath" startOffset="0%">
          • Health Coaching Video • Health Coaching Video • Health Coaching Video •
        </textPath>
      </text>
      <circle cx="100" cy="100" r="84" className="fill-none" />
    </svg>

    <span className="play-pill">
      <FiPlay className="h-8 w-8" />
    </span>
  </div>
</button> */}


    


      <div  style={{
      display:'flex',
      color:'white',
      justifyContent:"space-between",
      alignItems: 'center',
      borderTop:'1px solid #ffffff1a',
      position:'absolute',
      padding:'2.5rem',
      gap:'3rem',
      marginTop:'30%',
      
    }}>

      <span style={{
        fontSize:'larger',
        whiteSpace:'nowrap'
      }}><strong style={{fontWeight:'1000',
        fontSize:'larger'
      }}>25 +</strong > <br/>Years of experience</span>
      <span style={{
        fontSize:'larger',
        whiteSpace:'nowrap'
      }}><strong style={{fontWeight:'1000',
        fontSize:'larger'
      }}>260 +</strong><br/>Hours of Coaching</span>
      <span style={{
        fontSize:'larger',
        whiteSpace:'nowrap'
      }}><strong style={{fontWeight:'1000',
        fontSize:'larger'
      }}>550 +</strong> <br/>Complete courses</span>
      <span style={{
        fontSize:'larger',
        whiteSpace:'nowrap'
      }}><strong style={{fontWeight:'1000',
        fontSize:'larger'
      }}>20K +</strong><br/> Happy customers</span>
      <span style={{
        fontSize:'larger',
        whiteSpace:'nowrap'
      }}><strong style={{fontWeight:'1000',
        fontSize:'larger',
        whiteSpace:'nowrap'
      }}>359 +</strong><br/>Awards win</span>

    </div>

    </div>

    
    </div>

   </section>

 {/* programs */}

 <section className='programs' id='8'>
  <h4>✨ Our Programs</h4><br/>

  <div className='program-txtbtn'>
    <h1>Tailored programs for<br/> your wellness</h1>

    <button><a href='#'>All Programs</a></button>
  </div>
  <br/><br/>

    <div className='program-cards'>
      <div className='prog-card'>
        <img src= {program1}/>
      <div className='overlay'>
        <h3 className='fw-bolder'>Weight Management<br/> Program</h3><br/>

         <button><a href='#'> Read More</a></button>
      </div> 
      </div>

      <div className='prog-card'>
        <img src={program2}/>
       <div className='overlay'> 
        <h3 className='fw-bolder'>Stress Reduction &<br/> Mindfulness </h3><br/>

         <button><a href='#'> Read More</a></button>
      </div>
      </div>

      <div className='prog-card'>
        <img src= {program3}/>
        <div className='overlay'>
        <h3 className='fw-bolder'>Fitness and Movement<br/> Coaching </h3><br/>

         <button><a href='#'> Read More</a></button>
        </div>
      </div>

    </div>
 </section><br/><br/><br></br>

   {/* HOW IT WORKS */}

<section className='work text-white' id='9'>
  <h4 className='pt-5'>✨ How It Work</h4>
  <div className='work-txt '>
    <h1>Step-by-step guide to<br/>
     better health</h1>
     <p>Achieving your health goals has never been easier. Our step-by-step <br/>
      approach provides personalized guidance, actionable strategies, and <br/>
      ongoing support.</p>
  </div><br/><br/><br/>


<div className='techniques '>

  <div className='tools'>
    <div className='circle'>
      <img src= {treedgrm} className='big-icons'/>
     </div> <br/>
    <h4>Custom Coaching Plan</h4>
    <p>Begin with a comprehensive health<br/>
     assessment to understand.</p>
     
  </div>

  <div className='tools'>
     <div className='circle'>
      <img src= {headset} className='big-icons'/>
     </div><br/>
    <h4>Ongoing Support</h4>
    <p>Begin with a comprehensive health<br/>
     assessment to understand.</p>
    
  </div>

  <div className='tools'>
     <div className='circle'>
      <img src= {spanner} className='big-icons'/>
     </div><br/>
    <h4>Practical Tools</h4>
    <p>Begin with a comprehensive health<br/>
     assessment to understand.</p>
    
  </div>

  <div className='tools'>
     <div className='circle'>
      <img src= {foursquares} className='big-icons'/>
     </div><br/>
    <h4>Flexible Engagement</h4>
    <p>Begin with a comprehensive health<br/>
     assessment to understand.</p>
    
  </div>

</div>

</section>


{/* book appointmments */}
<section className='appointment ' id='10'>
  
  <h4 className='text-success'>✨ Appointment</h4>
  <div className='appoint d-flex justify-content-space-between gap-5 '>
  <div className='appoint'>
    <div>
    <h1>Make appointment</h1><br/>
    <p>Easy scheduling for a personalized health coaching session. Take<br/>
     the first step towards better health today!</p>
     </div><br/>

    <div>
     <img src= {appoint} className='rounded-4 ' />
     </div>
  </div>
  
 

  <form className=''>
  <div className='d-flex justify-content-space-between gap-4'>
    <input type='text' placeholder='First Name'className='cols-80 p-3 rounded-3 form-control'/>
    <input type='text' placeholder='Last Name' className='cols-80 p-3 rounded-3 form-control'/>
  </div><br/>
  <input type='email' placeholder='Email Address' className='cols-200 p-3 rounded-3 form-control'/><br/><br/>
  <input type='number' placeholder='Phone number' className='cols-200 p-3 rounded-3 form-control'/><br/><br/>
  
  <div className='d-flex justify-content-space-between gap-4'>
    <select id='service' placeholder='service' className='cols-80 p-3 rounded-3'>
      <option value='Service' >service</option>
      <option value= 'Nutrition Counseling'>Nutrition Counseling</option>
      <option value= 'Group Coaching Services'>Group Coaching Services</option>
      <option value= 'Work-life Coaching'>Work-life Coaching</option>
      <option value= 'Chronic Management'>Chronic Management</option>
      <option value= 'Mindfullness Coaching'>Mindfullness Coaching</option>
      <option value= 'Stress Management'>Stress Management</option>
    </select>
    <input type='date' placeholder='mm/dd/yyyy' className='cols-80 p-3 rounded-3 form-control'  />
  </div><br/><br/>

  <button className='rounded-pill '>Book An Appointment</button>
  </form>
   </div>

</section><br/><br/><br/>
{/*        
         FREQUENTLY ASKED QUESTIONS SECTIONS */}

<section className='FAQ-section' id='11'>

  
      <div className='faq-images  '>
          <img src= {faq1} className= "faq-img1 rounded-3"/>
          <img src= {faqcircle} className='faq-img faq-logo rounded-3'/>
      
          <img src= {faq2}  className='faq-img2 rounded-3' />
          
      </div>
     
  

  <div className='ACCORDIONS '>
    <h4 className='text-success'>✨  Frequently Asked Questions</h4>  
    <h1>Common Questions<br/> about health Coaching</h1>
     
     {/* ACCORDION ELEMENTS */}
<div className='group-accord'>
    <div class=" d-flex " >
    <div class="accordion col-6 ">
  <div class="accordion-item">
    <div class="accordion-header ">
      <h4 className='fw-bolder'>What is health coaching?</h4>
      <span class="circle">+</span>
    </div>
    <div class="accordion-content">
      <p>
        Health coaching is a personalized and structured service designed to guide <br/>
        you toward achieving your health and wellness goals. Through tailored <br/>
        strategies, ongoing support, and motivation.
      </p>
    </div>
 </div>
    </div>
    </div>


    <div class=" d-flex " >
    <div class="accordion col-6 ">
  <div class="accordion-item">
    <div class="accordion-header ">
      <h4 className='fw-bolder'> How does health coaching work?</h4>
      <span class="circle">+</span>
    </div>
    <div class="accordion-content">
      <p>
        Health coaching is a personalized and structured service designed to guide <br/>
        you toward achieving your health and wellness goals. Through tailored <br/>
        strategies, ongoing support, and motivation.
      </p>
    </div>
 </div>
    </div>
    </div>

    <div class=" d-flex " >
    <div class="accordion col-6 ">
  <div class="accordion-item">
    <div class="accordion-header ">
      <h4 className='fw-bolder'>Who can benefit from health coaching?</h4>
      <span class="circle">+</span>
    </div>
    <div class="accordion-content">
      <p>
        Health coaching is a personalized and structured service designed to guide <br/>
        you toward achieving your health and wellness goals. Through tailored <br/>
        strategies, ongoing support, and motivation.
      </p>
    </div>
 </div>
    </div>
    </div>

    <div class=" d-flex " >
    <div class="accordion col-6">
  <div class="accordion-item">
    <div class="accordion-header">
      <h4 className='fw-bolder'>Can i do health coaching online?</h4>
      <span class="circle">+</span>
    </div>
    <div class="accordion-content">
      <p>
        Health coaching is a personalized and structured service designed to guide <br/>
        you toward achieving your health and wellness goals. Through tailored <br/>
        strategies, ongoing support, and motivation.
      </p>
    </div>
 </div>
    </div>
    </div>

    </div>

  </div>
</section><br/><br/><br/>

<section className='Testimonials' id='12'>
 
<div className='testimonial-cont'>
  <div className='left-side'>
     <h6> ✨ Our Testimonials</h6><br/>
    <h2 className='fw-bold display-6'>Success stories from<br/> our clients</h2><br/>

   

    <div className='testimonials-grid'>

      <div className='testimony-box'>

        <div className='five-star'>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
        </div>
        <p>“ I’ve struggled with chronic <br/>
        pain for years, but health<br/>
         coaching gave me the tools<br/> and support.”</p>

         <div className='author d-flex'> 
              <div>
                <img src={trustedclient2}/>
              </div>
              <div>
            <span> <strong>Bessie Cooper</strong> <br/>
            Co-founder</span>
            </div>
          </div>
      </div>

      <div className='testimony-box'>
         <div className='five-star'>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
        </div>
        
        <p>“I’ve struggled with chronic <br/>
        pain for years, but health<br/>
         coaching gave me the tools<br/> and support.”</p>

         <div className='author d-flex'> 
              <div>
                <img src={author2}/>
              </div>
              <div>
            <span> <strong>Floyd Miles</strong> <br/>
            Chairman</span>
            </div>
          </div>
      </div>

      <div className='testimony-box'>
    
         <div className='five-star'>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
        </div>
        <p>“I’ve struggled with chronic <br/>
        pain for years, but health<br/>
         coaching gave me the tools<br/> and support.”</p>

         <div className='author d-flex'> 
              <div>
              <img src={author3}/>
              </div>
              <div>
            <span> <strong>Kathryn Murphy</strong> <br/>
            CEO</span>
            </div>
          </div>  
     </div>

      <div className='testimony-box'>

         <div className='five-star'>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
          <img src= {star} className='stars'/>
        </div>
        <p>“I’ve struggled with chronic <br/>
        pain for years, but health<br/>
         coaching gave me the tools<br/> and support.”</p>

         <div className='author d-flex'>
              <div>
              <img src={author4}/>
              </div>
              <div>
            <span> <strong>Jerome Bell</strong> <br/>
            Finance Director</span>
            </div>
          </div> 
      </div>
</div>

    </div>

  {/* TESTIMONIALS IMAGES */}

  <div className='d-flex'>
    
     
  {/* IMAGES */}
  <div className='right-side ' >
         <img src= {testimonialimage1} className='image-1 '/>
         <img src= {testimonialimage2} className='image-2'/>
         <img src= {testimonialimage3} className='image-3 '/>

       <div className='founder-1 gap-4 '> 
          <div className='founder-images'>
              <img src= {trustedclient1}/>
              <img src={trustedclient2}/>
              <img src= {trustedclient3}/>
              <h5 className='circle bg-warning rounded-5 h-90px w-90px text-dark 
              d-flex justify-contents-center align-items-center' > 15K</h5>
            </div>
          
         <div >
            <span> <strong> 5.0</strong> 
            15.5K review</span>
          </div>
      </div>

 </div>

</div>

  </div>
</section><br/><br/>


      {/* OUR BLOGS !!!!! */}
 <section className='Blogs' id='13'>
        <h4 className='text-success'>✨ Our Blog</h4>
      <div className='blog mb-5'>
        <h1 className='fw-bolder'>Expert tips for better<br/> health and wellness</h1>
        <button>View All Blog</button>
      </div>

    <div style={{ display: "flex", gap: "20px", 
      justifyContent:'center',
      alignItems:'center'
    }}>
      {cardData.map((card) => (
        <div 
          key={card.id} 
          style={{
            width: "100%",
            borderRadius: "10px",
            height:'100%',
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
          }}
        >
          <img 
            src={card.image} 
            // alt={card.title} 
            style={{ width: "100%", height: "300px", borderRadius:'10px', objectFit: "cover" }} 
          />
          <div style={{ padding: "15px" }}>
            <h3 style={{ fontSize: "18px" }}>{card.title}</h3><br/>
            <a href={card.link} style={{ color: "teal", textDecoration: "none" }}>
              Read More →
            </a>
          </div>
        </div>
      ))
      }
    </div>
  





         
  </section><br/>

             {/* FOOTER FOOTER FOOTER FOOTER SECTION !!!! */}

  <section className='footer-container text-white' id='14'>
  <div className='footer'>
    <div className='footer-first'>
      <img src= {logo} className='mb-4'/><br/>
      <p>Healix – Your Path to Better Health. Personalized Coaching for a<br/>
       Stronger, Healthier You!</p><br/>
       <div className='footer-buttons '>
        <button className='text-center '><a className='nav-link active ' href='#'>
          <strong >(256) 123-<br/>45678</strong></a></button>

          <button className='text-center'><a className='nav-link active ' href='#'>
          <strong >info@domainname.com</strong></a></button>
       </div><br/>

      <div className='first-links'>
        <ul>
          <li><a className='nav-link active' href='#'> <strong> Home</strong></a></li>
        </ul>
         <ul>
          <li><a className='nav-link active' href='#'> <strong>About Us</strong></a></li>
        </ul>
         <ul>
          <li><a className='nav-link active' href='#'> <strong>Services</strong></a></li>
        </ul>
         <ul>
          <li><a className='nav-link active' href='#'> <strong>Contact</strong></a></li>
        </ul>
        </div> 

    </div>

  <div className='footer-second'>
    <div className='footer-second-main'>
      <div className='footer-second-sub '>
    <div className='serv-links text-start'>
      <h5 className='ms-5'>Services</h5><br/>
      <ul className='ul-1 text-start'>
        <li><a className='nav-link active' href='#'><strong>Chronic Management</strong></a></li>
        <li><a className='nav-link active' href='#'><strong>Group Coaching Sessions</strong></a></li>
        <li><a className='nav-link active' href='#'><strong>Mindfulness Coaching</strong></a></li>
      </ul>
    </div>

    <div className='text-start'>
      <h5  className='ms-5'>Working Hours</h5><br/>
      <ul className='ul-2'>
        <li>Mon - Fri : 9:00am - 18:00pm</li>
        <li>Saturday : 9:00am - 16:00pm</li>
        <li>Sunday : Closed</li>
      </ul>
    </div>

    </div><br/>
    <div style={{
      display:'flex',
      justifyContent:'left',
      alignItems:'center'

    }} >
    <p className='ms-5'><strong>Follow on</strong>  </p> 
    
    <div className='footer-icons'
    style={{
      display:'flex',
      gap:'20px'
    }}>
      <div className='circle'
       style={{
        height:'40px',
        width:'40px',
        borderRadius:'50px',
        display: 'flex',
        alignitems: 'center',
        justifycontent: 'center',
        position:'relative',
        fontsize: '20px',
        transition: 'transform 0.3s',
        border: '1px solid #ffffff1a',
        background:'#014e4e'
      }}>
         <img style={{
        width:'40px',
        height:'40px',
        color:'white'

      }}  
      src={pinterest}/> </div>
     
     <div className='circle'
      style={{
        height:'40px',
        width:'40px',
        borderRadius:'50px',
        display: 'flex',
        alignitems: 'center',
        justifycontent: 'center',
        position:'relative',
        padding:'10px',
        fontsize: '20px',
        transition: 'transform 0.3s',
        border: '1px solid #ffffff1a',
      }}>
        <img style={{
        width:'20px',
        height:'20px'
        

      }}   src= {X}/></div>
      
      <div className='circle' style={{
        height:'40px',
        width:'40px',
        borderRadius:'50px',
        display: 'flex',
        alignitems: 'center',
        justifycontent: 'center',
         position:'relative',
        fontweight: 'bold',
        fontsize: '20px',
        padding:'10px',
        transition: 'transform 0.3s',
        border: '1px solid #ffffff1a',

        
      }}>
        <img style={{
        width:'20px',
        height:'20px',
        

      }}   src= {fb}/></div>
      <div className='circle' style={{
        height:'40px',
        width:'40px',
        borderRadius:'50px',
        padding:'10px',
        display: 'flex',
        alignitems: 'center',
        justifycontent: 'center',
         position:'relative',
        fontweight: 'bold',
        fontsize: '20px',
        transition: 'transform 0.3s',
        border: '1px solid #ffffff1a',
        background:'#014e4e'
      }}> 
      <img style={{
        width:'20px',
        height:'20px'

      }}   src= {ig}/></div>

    </div>
    </div>
   
    </div>

    </div>

    </div>


    <div className='footer-footer p-4 align-items-center'>

    <p>Copyright © 2025 All Rights Reserved.</p> 
    <ul className='second-links'>
      <li><a className='nav-link active' href='#'> <strong>Privacy Policy</strong></a></li>
      <li><span><strong>-</strong></span></li>
      
      <li><a className='nav-link active' href='#'> <strong>Terms and Conditions</strong></a></li>
       <li><span><strong>-</strong></span></li>
    
      <li><a className='nav-link active' href='#'> <strong>Help</strong></a></li>
       
    </ul>

  </div>

  </section>    

 

  </div>
    );
  
};
   
export default Home 
