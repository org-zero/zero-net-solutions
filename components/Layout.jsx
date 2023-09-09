import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export default function Layout({ children, title, description }) {

    const hack = "Pentester"
    const developer = "Fullstack"

    Layout.defaultprops = {

      description : "Aaron - Fullstack & Ethical Hacker"
  }

    return (
        <div>

      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
         
          <nav className="Navbar">
         
          <div className='Navbar_Left'> <br /> <i class="fa fa-code-fork" aria-hidden="true"></i> Aaron P. - Expert IT</div>

          <div className='Navbar_Rigth'>
             <Link href="Fullstack"  className='links'> <i className='fa fa-code'></i> {developer}  </Link>
             <Link href="Pentester"   className='links'> <i className='fa fa-bug'></i> {hack} </Link>
          </div>
         
          </nav>

        <main>
           {children}
         </main>
       <br /><br />   
     <div class="row">
     <div class="column" ><br /><br />
     <h2> <i className='fa fa-user-circle-o'></i> About Me</h2> <br />
     <p>Software Developer and Tester :</p>
     <p>I am an experienced full-stack developer and skilled pentester. <br /><br />

With a strong background in both front-end and back-end technologies, I create robust and user-friendly applications.

My expertise in penetration testing enhances my ability to ensure the security and reliability of the software solutions I develop.
</p> <br />
     
 
     </div>
     <div class="column" > <br /><br />
     <h2> <i className='fa fa-book'></i> Information</h2> <br />
     <p>Location : <br /> <em>Costa Rica, San Jose : Desamparados</em> </p> <br />
     <p>Call Me, my Cell Phone :<br /> <em>( +506 ) 6144 - 7976 &rarr; also WhatsApp</em> </p> <br />
     <p>Write me for Email : <br /> <em> aaronfullstackdeveloper@gmail.com</em> </p>
    </div>

    <div class="column" > <br /><br />
    <h2> <i className='fa fa-handshake-o'></i> Comunnicate with me</h2> <br />
   <p>
   "I invite you to connect with me through my portfolio website, where refined aesthetics and visionary creativity converge, igniting possibilities for exceptional collaborations."
<br /><br />

"Discover a realm of refined craftsmanship and exquisite design as you navigate through my portfolio website. I look forward to connecting with you and discussing how we can bring your vision to life in the most elegant and impactful way possible."
   </p> 
     </div>
    </div>

   
        </div>
    )
    
}


