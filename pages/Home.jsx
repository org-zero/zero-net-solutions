import Layout from "@/components/Layout"
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Home.module.css"


export default function Fullstack () {

    const title = "Zero Net Solutions";
    const TitleChange= ['Software Company',  'Soluciones Informaticas'];
    const Titles = TitleChange[0];
    
    
    return(
      
        <Layout title="Fullstack Web Developer" description="Programmer level middle">
          
          <div className={styles.fullstack_container}>
          <div className={styles.scrollmenu}>
               <a href="https://github.com/org-zero"><i className=" fa fa-github"></i> You Looks my projects on Github </a>
               <a href="https://www.linkedin.com/in/aaron-padilla-somarribas-658715275/"><i className=" fa fa-linkedin"></i> Contact me by Linkedin</a>
               <a href="https://www.facebook.com/profile.php?id=100092418917257"><i className=" fa fa-facebook"></i> Follow my channel on Facebook</a>
          </div>
         <div className={styles.titles}> <h1> {title}  </h1> <h5>{Titles} </h5></div>
         </div>         
          <div className={styles.scrollmenu}>               
                <a href="https://github.com/org-zero"><i className=" fa fa-github"></i> You Looks my projects on Github </a>
                <a href="https://www.linkedin.com/in/aaron-padilla-somarribas-658715275/"><i className=" fa fa-linkedin"></i> Contact me by Linkedin</a>
                <a href="https://www.facebook.com/profile.php?id=100092418917257"><i className=" fa fa-facebook"></i> Follow my channel on Facebook</a>
          </div>
  <div className={styles.noticia}>
  <img className={styles.izquierda} src="../img/aaron.jpg"/>
  <h1>FullStack Developer Middle. </h1> <br /><br />
  <aside>
About Me
Hello! I'm Aaron Padilla <br /><br /> I am an experienced full-stack developer and skilled pentester.

With a strong background in both front-end and back-end technologies, I create robust and user-friendly applications.

My expertise in penetration testing enhances my ability to ensure the security and reliability of the software solutions I develop.</aside> <br />
  <h1>Skills</h1>
  <br />

<p>
- Javascript <br />
- React.<br />
- Next Js <br />
- Node & Express. <br />
- Python &rarr; Django <br />
- Java &rarr; SpringBoot. <br />
- Mysql & Mongo DB<br />
- Git & Github <br />
- HTML & CSS &rarr; Less &rarr; Sass. 
</p>
<br />
<h1>Certifications</h1> <br />
<p>
- W3schools &rarr; Fullstack Developer. <br />
- Cisco Networks 
</p>
  <div className={styles.reset} ></div>
</div>


        </Layout>
    )
}
