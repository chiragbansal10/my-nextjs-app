import React from "react";
import styles from "./Home.module.css";
import image from "../../../public/Capture.png";
import story from "../../../public/story.png";
import user from "../../../public/user-centric.png";
import customer from "../../../public/customersatisfaction.png";
import integrating from "../../../public/integrating.png";
import highquality from "../../../public/highquality.png";
import time from "../../../public/time.png";
import websitedevelopment from "../../../public/websitedevelopment.png";
import appdevelopment from "../../../public/appdevelopment.png";
import softwaredevelopment from "../../../public/softwaredevelopment.png";
import uiux from "../../../public/uiux.png";
import seooptimization from "../../../public/seooptimization.png";
import correct from "../../../public/correct.png";
import Unleashing from "../../../public/Unleashing.png";
import securingsuccess from "../../../public/securingsuccess.png";
import beyondborders from "../../../public/beyondborders.png";
import endexcellence from "../../../public/end-to-endexcellence.png";
import efficiencyredefined from "../../../public/efficiencyredefined.png";
import simplifiedcontracts from "../../../public/simplifiedcontracts.png";
import Image from "next/image";
const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1
            style={{ fontSize: "26px", fontWeight: "bold" }}
            className={styles.story}
          >
            Diversifying the Designs of Digital World
          </h1>
          {/* Your main page content */}
          <p>
            Explorogent International Services Private Limited (EISPL) is one
            <br /> of the most famous companies in the sector of Web and Mobile
            <br /> Development. In the market, EISPL has a strong presence in
            <br /> providing quality services to its clients.
          </p>
          <p>
            EISPL is convinced that one should diversify the offering, given
            <br /> the changing needs of the clients. That is why we engage in
            <br /> multiple projects and activities. We also possess knowledge
            in <br />
            web development, app development, UI/UX design, as well as
            <br /> digital marketing.
          </p>
          <div className={styles.bookacall}>
            <button>Book a Call</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {/* Display your image here */}
          <Image src={image} alt="image" />
        </div>
      </div>
      <div className={styles.solution}>
        <div className={styles.digital}>
          <p>In the realm of digital solutions, we offer expertise in</p>
        </div>
        <div className={styles.service}>
          <div>Website Development</div>
          <div>App Development</div>
          <div>UI/UX Design</div>
          <div>Digital Marketing</div>
          <div>SEO Optimization</div>
        </div>
        <p className={styles.showcasing}>
          showcasing our proficiency across various facets of the digital
          platform{" "}
        </p>
      </div>
      <div className={styles.stayahead}>
        <h1
          style={{ fontSize: "26px", fontWeight: "bold" }}
          className={styles.stay}
        >
          Stay Ahead!
        </h1>
        <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>
          Launch Your Next Project with Stackkaroo
        </h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1
            style={{ fontSize: "26px", fontWeight: "bold" }}
            className={styles.story}
          >
            Our Story
          </h1>
          {/* Your main page content */}
          <p>
            Guiding EISPL as Directors, Mr.
            <br /> Sourav Gupta and Mr. Chandan Mishra bring their extensive
            experience to
            <br /> the forefront as industry veterans. Our team is fueled
            <br /> by innovation, continually striving to exceed customer
            <br /> expectations.
          </p>
          <p>
            Operating from our registered office in Agartala
            <br /> Sadar, Tripura (W), our company is officially
            <br /> registered with the Corporate Identification Number
            <br /> (CIN). Our active status and an authorized share
            <br /> capital of Rs 10.00 lac are a source of pride.
          </p>
          <div className={styles.project}>
            <button>Get Estimated Project Cost</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {/* Display your image here */}
          <Image src={story} alt="story" />
        </div>
      </div>
      <div className={styles.choose}>
        <h1
          style={{ fontSize: "26px", fontWeight: "bold" }}
          className={styles.whychoose}
        >
          Why Choose Us?
        </h1>
        <p className={styles.excel}>
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
          <br />
          Our dedicated team ensures that the solutions provided are dependable
          and long-term
        </p>
      </div>
      <div className={styles.threeproduct}>
        <div className={styles.centric}>
          <Image src={user} className={styles.centricimage} alt="story" />{" "}
          <p style={{ fontWeight: "bold" }} className={styles.centricepara}>
            User-Centric
            <br /> Approach
          </p>
        </div>
        <div className={styles.customer}>
          <Image src={customer} className={styles.customerimage} alt="story" />{" "}
          <p style={{ fontWeight: "bold" }} className={styles.customerpara}>
            Customer
            <br /> Satisfaction
          </p>
        </div>
        <div className={styles.integrating}>
          <Image
            src={integrating}
            className={styles.integratingimage}
            alt="story"
          />{" "}
          <p style={{ fontWeight: "bold" }} className={styles.integratingpara}>
            Integrating
            <br /> Feedback
          </p>
        </div>
      </div>
      <div className={styles.twoproduct}>
        <div className={styles.high}>
          <Image src={highquality} className={styles.highimage} alt="story" />
          <p style={{ fontWeight: "bold" }} className={styles.highpara}>
            High Quality
            <br /> Products
          </p>{" "}
        </div>
        <div className={styles.product}>
          <Image src={time} alt="story" className={styles.productimage} />
          <p style={{ fontWeight: "bold" }} className={styles.productpara}>
            {" "}
            On-Time
            <br /> Product
            <br /> Delivery
          </p>
        </div>
      </div>
      <div>
        <p style={{fontSize: "20px", fontWeight: "bold" }} className={styles.stackkaroo}>
          Stackkaroo’s Digital Services
        </p>

        <p className={styles.reliability}>
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
          <br />
          Our dedicated team ensures that the solutions provided are dependable
          and long-term
        </p>
      </div>
      <div className={styles.developement}>
        <div className={styles.websitedevelopment}>
          <div className={styles.websitedevelopmentimage}>
            <Image
              src={websitedevelopment}
              className={styles.websitedevelopmentimageview}
              alt="story"
            />{" "}
            <p style={{ fontWeight: "bold", fontSize: "26px" }}>
              Website Development
            </p>
          </div>
          <p className={styles.websitedevelopmentpara}>
            We specialize in responsive
            <br /> website development, ensuring
            <br /> optimal performance across
            <br /> various devices.
          </p>
          <div className={styles.arrow}> {">"} </div>
        </div>
        <div className={styles.appdevelopment}>
          <div className={styles.appdevelopmentimage}>
            <Image
              src={appdevelopment}
              className={styles.appdevelopmentimageview}
              alt="story"
            />{" "}
            <p style={{ fontWeight: "bold", fontSize: "26px" }}>
              App<br />  Development
            </p>
          </div>

          <p className={styles.appdevelopmentpara}>
            We specialize in creating
            <br /> superior apps for diverse
            <br /> sectors such as e-commerce,
            <br /> education, and transportation.
          </p>
          <div className={styles.arrow}> {">"} </div>
        </div>

        <div className={styles.softwaredevelopment}>
          <div className={styles.softwaredevelopmentimage}>
            <Image
              src={softwaredevelopment}
              className={styles.softwaredevelopmentimageview}
              alt="story"
            />{" "}
            <p style={{ fontWeight: "bold", fontSize: "26px" }}>
              Software Development
            </p>{" "}
          </div>

          <p className={styles.softwaredevelopmentpara}>
            {" "}
            We specialize in tailored <br />
            solutions ensuring business
            <br /> growth and efficiency by
            <br /> providing superior software.
          </p>
          <div className={styles.arrow}> {">"} </div>
        </div>
      </div>
      <div className={styles.developement}>
        <div className={styles.websitedevelopment}>
          <div className={styles.websitedevelopmentimage}>
            <Image src={uiux} className={styles.centricimage} alt="story" />{" "}
            <p style={{ fontWeight: "bold", fontSize: "26px" }}>
            UI/UX
Design
            </p>{" "}
          

          </div>
          <p  className={styles.softwaredevelopmentpara}>
            {" "}
            We specialize in creating
            <br /> exemplary designs prioritizing
            <br /> user-friendly concepts and
            <br /> aesthetically appealing
            <br /> interfaces.
          </p>
          <div className={styles.arrow}> {">"} </div>
        </div>
        <div className={styles.websitedevelopment}>
          <div className={styles.websitedevelopmentimage}>
            <Image src={uiux} className={styles.customerimage} alt="story" />{" "}
            <p style={{ fontWeight: "bold", fontSize: "26px" }}>
              
            Digital Marketing
            </p>{" "}
          </div>
          <p className={styles.softwaredevelopmentpara}>
            We specialize in tailored
            <br /> digital marketing solutions and
            <br /> ensure effective online
            <br /> marketing strategies.
          </p>
          <div className={styles.arrow}> {">"} </div>
        </div>
        <div className={styles.websitedevelopment}>
          <div className={styles.websitedevelopmentimage}>
            <Image
              src={seooptimization}
              className={styles.integratingimage}
              alt="story"
            />
 <p style={{ fontWeight: "bold", fontSize: "26px" }}>
 SEO Optimization
            </p>{" "}
          </div>{" "}
          <p  className={styles.softwaredevelopmentpara}>
            {" "}
            We ensure optimal website
            <br /> traffic by addressing factors
            <br /> such as user experience,
            <br /> accessibility, product details,
            <br /> and monitoring target
            <br /> audience.
          </p>
          <div className={styles.arrow}> {">"} </div>
        </div>
      </div>

<div className={styles.seoheading}>
<h1 style={{ fontSize: "26px", fontWeight: "bold" }} className={styles.seoservices}>SEO Services</h1>
<div className={styles.seodevelopement}>
      
      <div className={styles.seo}>
        <div className={styles.seoimage}>
          <Image
            src={correct}
          
            alt="story"
          />{" "}
          <p style={{ fontWeight: "bold" }}>
          Customized SEO Services
          </p>
        </div>
        <p className={styles.seopara}>
        We develop tailored SEO plans for new websites as<br/> they consider a correct SEO website checklist, as<br/> well as strategy, to be critical for business.
        </p>
      
      </div>
      <div className={styles.seo}>
        <div className={styles.seoimage}>
          <Image
            src={correct}
            
            alt="story"
          />{" "}
          <p style={{ fontWeight: "bold" }}>
          Mobile SEO Services
          </p>
        </div>

        <p className={styles.seopara}>
        We stress upon the mobile optimizations since the<br/> mobile phone use by search is highly prevalent.<br/> They are more able to score the best SEO rankings<br/> and can easily be viewed on mobile devices.
        </p>
        
      </div>

      
    </div>

    <div className={styles.seodevelopement}>
      
      <div className={styles.seo}>
        <div className={styles.seoimage}>
          <Image
            src={correct}
          
            alt="story"
          />{" "}
          <p style={{ fontWeight: "bold" }}>
          On-Page SEO Services          </p>
        </div>
        <p className={styles.seopara}>
        We offer on-page SEO services for content, photos,<br/> descriptions, and visibility. They follow the design<br/> principles for SEO-friendly websites in order to<br/> provide their customers with the best outcomes.
        </p>
      
      </div>
      <div className={styles.seo}>
        <div className={styles.seoimage}>
          <Image
            src={correct}
            
            alt="story"
          />{" "}
          <p style={{ fontWeight: "bold" }}>
          Free Website Audit and Strategies
          </p>
        </div>

        <p className={styles.seopara}>
        We go beyond essential SEO website development<br/> to give out free website audits, analysis and SEO<br/> strategies for transparent business strategies.<br/> They target business owners in different industries,<br/> and these packages include local SEO and e-<br/>commerce services.
        </p>
        
      </div>

      
    </div>
    <div className={styles.seodevelopement}>
      
      <div className={styles.seo}>
        <div className={styles.seoimage}>
          <Image
            src={correct}
          
            alt="story"
          />{" "}
          <p style={{ fontWeight: "bold" }}>
          Off-Page SEO Services         </p>
        </div>
        <p className={styles.seopara}>
        We undertake off-page SEO for better rankings.<br/> They mainly specialize in handling backlink profiles.<br/> Their SEO analysts strive to ensure that their<br/> websites are listed on some of the popular sites in<br/> the industry of travel.
        </p>
      
      </div>
      

      
    </div>
</div>

<div>
<h1 style={{ fontWeight: "bold", fontSize: "20px" }} className={styles.talent}>
Stackkaroo’s Talent Hiring & Job Placement Services
</h1>
<p className={styles.searching}>We are a talent searching platform that redesigns how companies hire talents. It is a cost-effective solution for industries.<br/> We also provide global job opportunities with good salaries, support, and professional development.</p>
<div className={styles.Unleashinggroup}>
<div className={styles.Unleashing}>
          <div className={styles.Unleashingimage}>
            <Image
              src={Unleashing}
              className={styles.Unleashingview}
              alt="story"
            />{" "}
            <p >
            Unleashing Top Talent Globally
            </p>
          </div>
          <p className={styles.Unleashingpara}>
          We offer 5% top talents and supports<br/> companies hiring from various time<br/> zones.
          </p>
         
        </div>
        <div className={styles.Unleashing}>
          <div className={styles.Unleashingimage}>
            <Image
              src={securingsuccess}
              className={styles.Unleashingview}
              alt="story"
            />{" "}
            <p >
            Securing Success
            </p>
          </div>
          <p className={styles.Unleashingpara}>
          The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.
          </p>
         
        </div>
        <div className={styles.Unleashing}>
          <div className={styles.Unleashingimage}>
            <Image
              src={securingsuccess}
              className={styles.Unleashingview}
              alt="story"
            />{" "}
            <p >
            Beyond Borders
            </p>
          </div>
          <p className={styles.Unleashingpara}>
          We provide both, flexible full-time and part-time jobs
          </p>
         
        </div>
        

</div>

<div className={styles.Unleashinggroup}>
<div className={styles.Unleashing}>
          <div className={styles.Unleashingimage}>
            <Image
              src={endexcellence}
              className={styles.Unleashingview}
              alt="story"
            />{" "}
            <p >
            End-to-End Excellence
            </p>
          </div>
          <p className={styles.Unleashingpara}>
          In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.
          </p>
         
        </div>
        <div className={styles.Unleashing}>
          <div className={styles.Unleashingimage}>
            <Image
              src={efficiencyredefined}
              className={styles.Unleashingview}
              alt="story"
            />{" "}
            <p >
            Efficiency Redefined
            </p>
          </div>
          <p className={styles.Unleashingpara}>
          The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.
          </p>
         
        </div>
        <div className={styles.Unleashing}>
          <div className={styles.Unleashingimage}>
            <Image
              src={simplifiedcontracts}
              className={styles.Unleashingview}
              alt="story"
            />{" "}
            <p >
            Simplified Contracts
Satisfied Partnerships
            </p>
          </div>
          <p className={styles.Unleashingpara}>
          The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.
          </p>
         
        </div>
        
</div>
</div>
      
     
    </div>
  );
};

export default Main;
