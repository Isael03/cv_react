
import { MICHAEL } from '../data'
import '../styles/cv.css'
//import html2pdf from 'html2pdf.js';
import { Helmet } from 'react-helmet-async';


export const CV = () => (
    <>
        <Helmet>
            <title>Curriculum</title>
        </Helmet>
        <CVContainer />
    </>

)


export const CVContainer = () => {
    const data = MICHAEL

    /*    const exportPdf = () => {
       
           const element = document.getElementById('cv');
   
           const opt = {
               margin: [0, 0],
               filename: 'CV Michael',
               image: { type: 'jpeg', quality: 0.98 }, 
               html2canvas: { scale: 2, useCORS: true },
               jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
           };
           if (element) {
               html2pdf().set(opt).from(element).save(); 
           }
       }; */
    const contact = data.contact
    const education = data.education
    const languages = data.languages
    const perfil = data.perfil
    const interest = data.interests
    const skills = data.skills
    const experiences = data.experiences
    const information = data.information

    const printPersonalContact = (icon, data, islink, key) => {
        if (islink) {
            return (
                <li key={key}>
                    <span className="icon"><i className={icon} aria-hidden="true"></i></span>
                    <span className="text"><a href={data} target="_blank" rel="noopener noreferrer">{data}</a></span>
                </li>
            )
        } else {
            return (
                <li key={key}>
                    <span className="icon"><i className={icon} aria-hidden="true"></i></span>
                    <span className="text">{data}</span>
                </li>
            )
        }

    }
    return (
        <>


            <div className="container" id='cv'>
                <div className="left_Side">
                    <div className="profileText">
                        <div className="imgBx">
                            <img src="images/foto.png" alt="foto_cv" />
                        </div>
                        <h2>{data.name}<br /> <span>{data.rol}</span></h2>
                    </div>

                    <div className="contactInfo">
                        <h3 className="title">Personal</h3>
                        <ul>
                            {information.map(({ icon, data, islink }, key) => (
                                printPersonalContact(icon, data, islink, key)
                            ))}
                        </ul>
                    </div>



                    <div className="contactInfo">
                        <h3 className="title">Contacto</h3>
                        <ul>
                            {contact.map(({ icon, data, islink }, key) => (
                                printPersonalContact(icon, data, islink, key)
                            ))}
                        </ul>
                    </div>



                    <div className="contactInfo education">
                        <h3 className="title">Formación</h3>
                        <ul>
                            {
                                education.map(({ years, degree, location }, key) => (
                                    <li key={key}>
                                        <h5>{years}</h5>
                                        <h4>{degree}</h4>
                                        <h4>{location}</h4>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="contactInfo language">
                        <h3 className="title">Lenguajes</h3>
                        <ul>
                            {
                                languages.map(({ name, level }, key) => (
                                    <li key={key}>
                                        <span className="text">{name} - {level}</span>

                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>

                <div className="right_Side">
                    <div className="about">
                        <h2 className="title2">Acerca de mí</h2>
                        <p>{perfil}</p>
                    </div>

                    <div className="about">
                        <h2 className="title2">Experiencia</h2>
                        {
                            experiences.map(({ years, location, description, position }, key) => (
                                <div className="box" key={key}>
                                    <div className="year_company">
                                        <h5>{years}</h5>
                                        <h5>{location}</h5>
                                    </div>
                                    <div className="text">
                                        <h4>{position}</h4>
                                        {description.map((work, key) => (
                                            <p key={key}>{work}</p>
                                        ))}

                                    </div>
                                </div>
                            ))
                        }
                    </div>


                    <div className="about skills">
                        <h2 className="title2">Habilidades</h2>
                        <div className="box">
                            <h4>Frontend</h4>
                            <div>
                                <ul>
                                    {
                                        skills.frontend.map((skill, key) => (
                                            <li key={key}>
                                                {skill}
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>

                        </div>

                        <div className="box">
                            <h4>Backend</h4>
                            <div>
                                <ul>
                                    {
                                        skills.backend.map((skill, key) => (
                                            <li style={{ marginRight: '20px' }} key={key}>
                                                {skill}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="about interest">
                        <h2 className="title2">Intereses</h2>
                        <ul>
                            {
                                interest.map(({ icon, data }, key) => (
                                    <li key={key}><i className={icon} aria-hidden="true"></i>{data}</li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

