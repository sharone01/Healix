import './home.css'
import imagehero from '../assets/hero-image.png'
import CallIcon from '../assets/call.jpg'
import about1 from '../assets/about-us-image-1.jpg'
import about2 from '../assets/about-us-image-2.jpg'
import trustedclient2 from '../assets/trusted-client-img-2.jpg'

import whatwedo1 from '../assets/what-we-do-image-1.jpg'
import whatwedo2 from '../assets/what-we-do-image-2.jpg'
import chooseimage from '../assets/why-choose-image.png'
import expertimg from '../assets/expertise-image.jpg'
import program1 from '../assets/program-1.jpg'
import program2 from '../assets/program-2.jpg'
import program3 from '../assets/program-3.jpg'






const Home = () => {
    return (
        <div>

            {/* HERO SECTION */}


<section className="hero">
  <div className="hero-text">
    <p className="welcome">✨ Welcome To Healix</p>
    <h1>Transform your<br/> health<br/>embrace <br/>life today</h1>
    <p>Achieve your wellness goals with personalized guidance, expert support, and <br/>
    sustainable habits for a healthier, happier you..</p><br/><br/>
    <div className='d-flex gap-4 align-items-center'>
      <button >Know More</button>
    <div className='num gap-3 d-flex'>
      <img className='circle-1' src = {CallIcon}/>
      <span> Call us 24/7 <br/>
    <span className='text-white hover:text-#F9D67B'>(123)456789</span></span> 
    </div>
    </div>
  </div>

  <div className="hero-img" >
    <img src= {imagehero} />
  </div>

 </section><br/><br/><br/>


       {/* ABOUT US  */}
  
        <div className='about-section'>
            <div className='about-images'>
                <img src= {about1} className='about-img'/>
                <img src= {about2} className='about-img'/>
                <br/>

                 <div className='box-25'>
            <h3>25</h3>
            <p>Years of <br/> experience</p>
          </div>

            </div>
           
         <div className='about-content'>
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
        <br/><br/><br/>

{/* SERVICES SECTION */}

<div className='services-section'>
     <div className='grid-container'>

         <div className='grid-item first-item'>
           <h4 className='text-success'>✨ Services</h4>
           <h2>We provide <br/>services for<br/> you</h2>
           <p>We offer personalized health coaching services<br/>
           support your wellness journey and empower you<br/> to life.</p>
           <br/>
           <button className='rounded-pill'>All Services</button>
         </div>

         <div className='grid-item'>
          <div className='circle'>
             <img />
            </div>
           <h3>Nutrition counseling</h3>
           <p>Receive personalized nutrition guidance <br/>
            to create balanced, sustainable eating <br/>
             habits that support your health.</p><br/>

            <a class="nav-link active " href="#">Read More</a>

         </div>

        <div className='grid-item'>
          <div className='circle'>
             <img />
            </div>
           <h3>Group Coaching Sessions</h3>
           <p>Receive personalized nutrition guidance<br/>
            to create balanced, sustainable eating <br/>
            habits that support your health.</p><br/>

             <a class="nav-link active " href="#">Read More</a>
          </div> 

          <div className='grid-item'>
            <div className='circle'>
             <img />
            </div>

            <h3>Work-Life Coaching</h3>
            <p>Receive personalized nutrition guidance<br/>
            to create balanced, sustainable eating <br/>
            habits that support your health.</p><br/>

             <a class="nav-link active  " href="#">Read More</a>
          </div>

          <div className='grid-item'>
             <div className='circle'>
             <img />
            </div>

            <h3>Chronic Management</h3>
            <p>Receive personalized nutrition guidance<br/>
            to create balanced, sustainable eating <br/>
            habits that support your health.</p><br/>

             <a class="nav-link active " href="#">Read More</a>
          </div>

          <div className='grid-item last-item'>
            
            <div>
            <h3>Have You any question</h3>
            <h2>Don't waste your time call us!</h2><br/>

            <div className='num d-flex'>
               <img className='circle-1' src = {CallIcon}/>
              <span> Call us 24/7 <br/>
             <span className='text-success'>
              (123)456789</span>
            </span> 
            </div>

            </div>
          </div>
        
     </div><br/>
     <div className='services-footer d-flex text-align-center justify-contents-center align-items-center'>
    <p><span className='rounded-pill p-2'>Free</span> 
    Let’s make something great work together.
    <a className='nav-link active ' href='#'>Get Free Quote</a>
     </p>
     </div>

</div><br/>

  {/* WHAT WE DO SECTION */}

<section className='weDo-section'> {/* three sections */}
  
   {/* first section image */}
  <div className='weDo-1'>
    <img src = {whatwedo1}/>
  </div>

   {/* second section images and text  */}

  <div className='weDo-2'>
    <h4 className='text-success'>✨ What We Do</h4>
    <h2>Guiding your<br/> health wellness</h2>

   <div className='imgtxt'>

    <div className='imgtxt-premiere'>
      <div className='circle'>
        <img/>
      </div>
      <div>
        <h3>Stress reduction techniques</h3>
        <p>Receive personalized nutrition guidance<br/>
         to create balanced, sustainable eating.</p>
      </div>

    </div>

    <div className='imgtxt-premiere'>
      <div className='circle'>
        <img/>
      </div>
      <div>
        <h3>Goal-oriented wellness plan</h3>
        <p>Receive personalized nutrition guidance<br/>
         to create balanced, sustainable eating.</p>
      </div>

    </div>

    <div className='imgtxt-premiere'>
      <div className='circle'>
        <img/>
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

<section className='choose text-white'>
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
         <div className='circle'>
            <img/>
          </div>

        <h3>Nutrition counseling</h3>
        <p>Receive personalize nutrition <br/>
         guidance to create balanced,<br/>
          sustainable eating.</p>
         
      </div><br/>

      <div className='crd'>
         <div className='circle'>
            <img/>
          </div>
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
            <img/>
          </div>
        <h3>Holistic approach</h3>
        <p>Receive personalize nutrition <br/>
         guidance to create balanced,<br/>
          sustainable eating.</p>
          
      </div><br/>

      <div className='crd'>
        <div className='circle'>
            <img/>
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

<section className='expertise'>
  <h4 className='text-success'>✨ Our Expertise</h4>
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

         <a class="nav-link active  text-white" href="#">Read More</a>
      </div><br/><br/>

      <div className='expert-crd'>
        <h3>Personalized Health Solutions</h3>
        <p>Receive personalized nutrition guidance to create balanced, sustainable <br/>
        eating habits that support your health receive personalized nutrition <br/>
         guidance to create balanced.</p><br/>

         <a class="nav-link active  text-white" href="#">Read More</a>
      </div>

    </div>

  </div>

</section><br/><br/><br/>

 {/* programs */}

 <section className='programs'>
  <h4>✨ Our Programs</h4><br/>

  <div className='program-txtbtn'>
    <h1>Tailored programs for<br/> your wellness</h1>

    <button><a href='#'>All Programs</a></button>
  </div>
  <br/><br/>

    <div className='program-cards'>
      <div className='prog-card1'>
        
        <h4>Weight Management Program</h4><br/>

         <button><a href='#'> Read More</a></button>
        
      </div>

      <div className='prog-card2'>
        
        <h4>Stress Reduction & Mindfulness </h4><br/>

         <button><a href='#'> Read More</a></button>
        
      </div>

      <div className='prog-card3'>
        
        <h4>Fitness and Movement Coaching </h4><br/>

         <button><a href='#'> Read More</a></button>
        
      </div>

    </div>
 </section><br/><br/><br></br>

   {/* HOW IT WORKS */}

<section className='work'>
  <h4>✨ How It Work</h4>
  <div className='work-txt'>
    <h1>Step-by-step guide to<br/>
     better health</h1>
     <p>Achieving your health goals has never been easier. Our step-by-step <br/>
      approach provides personalized guidance, actionable strategies, and <br/>
      ongoing support.</p>
  </div>


<div className='techniques'>

  <div className='tools'>
    <h3>Custom Coaching Plan</h3>
    <p>Begin with a comprehensive health<br/>
     assessment to understand.</p>
     <div className='circle'>
      <img/>
     </div>
  </div>

  <div className='tools'>
    <h3>Ongoing Support</h3>
    <p>Begin with a comprehensive health<br/>
     assessment to understand.</p>
     <div className='circle'>
      <img/>
     </div>
  </div>

  <div className='tools'>
    <h3>Practical Tools</h3>
    <p>Begin with a comprehensive health<br/>
     assessment to understand.</p>
     <div className='circle'>
      <img/>
     </div>
  </div>

  <div className='tools'>
    <h3>Flexible Engagement</h3>
    <p>Begin with a comprehensive health<br/>
     assessment to understand.</p>
     <div className='circle'>
      <img/>
     </div>
  </div>

</div>

</section>


{/* book appointmments */}
<section className='appointment'>

  <h4>✨ Appointment</h4>
  <div className='appoint'>
    <h1>Make appointment</h1>
    <p>Easy scheduling for a personalized health coaching session. Take<br/>
     the first step towards better health today!</p><br/>

     <img/>
  </div>

  <form>
  <div>
    <input type='text' placeholder='First Name'/>
    <input type='text' placeholder='Last Name'/>
  </div><br/>
  <input type='email' placeholder='Email Address'/><br/><br/>
  <input type='number' placeholder='Phone number'/><br/><br/>
  
  <div>
    <input type='checkbox' placeholder='Service'/>
    <input type='text' placeholder=''/>
  </div><br/><br/>

  <button>Book An Appointment</button>
  </form>

</section>

  </div>
    );
};

export default Home

