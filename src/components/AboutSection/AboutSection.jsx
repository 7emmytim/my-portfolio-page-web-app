import React from 'react'
import "./AboutSection.css"

const About = () => {
    return (
        <>
            <div className="container-fluid px-5 lead" id="about-page">

                <section className="table">
                    <div>
                        <h4>Education</h4>
                        <hr />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="left-table-data">September 2015 - August 2020</td>
                                <td className="right-table-data">
                                    <span className="r-tab-title">B.Sc. Applied Geophysics</span> <br />
                                    University Of Ilorin
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="table">
                    <div>
                        <h4>Soft Skills</h4>
                        <hr />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="r-tab-title right-table-data">Learning, Teamwork, Innovative Thinking, Creativity, Problem-Solving</td>
                            </tr>
                        </tbody>
                    </table>
                </section>


                <section className="table">
                    <div>
                        <h4>Developer Skills & Technologies</h4>
                        <hr />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="left-table-data">Responsive Web Design</td>
                                <td className="right-table-data">HTML, CSS, BOOTSTRAP, JAVASCRIPT (JQUERY)</td>
                            </tr>
                            <tr>
                                <td className="left-table-data">Web Application Development <br/> (Progressive Web Apps) </td>
                                <td className="right-table-data">REACT JS, REACT NATIVE, VUE JS, API, FIREBASE.</td>
                            </tr>
                            <tr>
                                <td className="left-table-data">Version Control</td>
                                <td className="right-table-data">GIT & GITHUB</td>
                            </tr>
                            <tr>
                                <td className="left-table-data">CMS</td>
                                <td className="right-table-data">WORDPRESS</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="table">
                    <div>
                        <h4>Work Experience</h4>
                        <hr />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="left-table-data">November 2019 Till Date</td>
                                <td className="right-table-data">
                                    <strong className="r-tab-title">Web Developer</strong> <br />
                                Terapacks, Lokoja.
                            </td>
                            </tr>
                            <tr>
                                <td className="left-table-data">June 2020 Till Date</td>
                                <td className="right-table-data">
                                    <strong className="r-tab-title">Web Developer</strong> <br />
                                Brandor Global, Lokoja.
                            </td>
                            </tr>
                            <tr>
                                <td className="left-table-data">August 2016 - October 2017</td>
                                <td className="right-table-data">
                                    <strong className="r-tab-title">Mathematics Teacher</strong> <br />
                                Silver Valley International College & Teejay Summer Lesson.
                            </td>
                            </tr>
                            <tr>
                                <td className="left-table-data">May 2018 - August 2018</td>
                                <td className="right-table-data">
                                    <strong className="r-tab-title">Industrial Trainee</strong> <br />
                                Dangote Cement Plc. (Obajana Plant)
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="table">
                    <div>
                        <h4>Accomplishments</h4>
                        <hr />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="left-table-data">Secondary School (Sacred Heart College)</td>
                                <td className="right-table-data">A Silver Medalist (2014 Senior Mathematics Olympiad, Kogi State).
                                Third Position (2014 Senior Cowbell, Kogi State). Second Position (Mathematics Association Of
                                Nigeria (MAN) Quiz Hosted in Ilorin, Kwara State).
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="table">
                    <div>
                        <h4>Certifications & Badges</h4>
                        <hr />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="left-table-data">Terapacks</td>
                                <td className="right-table-data r-tab-title">Web Development Course With React Js, Vue Js & Firebase</td>
                            </tr>
                            <tr>
                                <td className="left-table-data">Coursera <br/> (University Of Michigan)</td>
                                <td className="right-table-data r-tab-title">Interactivity With Javascript, Advanced Styling With Responsive Design</td>
                            </tr>
                            <tr>
                                <td className="left-table-data">FreeCodeCamp</td>
                                <td className="right-table-data r-tab-title">Responsive Web Design, Javascript Algorithms & Data Structures</td>
                            </tr>
                            <tr>
                                <td className="left-table-data">IBM</td>
                                <td className="right-table-data r-tab-title">Web Development</td>
                            </tr>
                            <tr>
                                <td className="left-table-data">Udemy</td>
                                <td className="right-table-data r-tab-title">Javascript Modern ES6 2020, Wordpress For Beginners</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}

export default About
