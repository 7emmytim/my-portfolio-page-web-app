import React from 'react'
import "./ProjectSection.css"
import image from "../../images/svg/p5.svg"

const ProjectSection = () => {
    return (
        <div className="container-fluid" id="product-section">
            <div className="row">
                <div className="col-lg-3 mx-auto my-5">
                    <div className="price-block agile">
                        <div className="price-gd-top">
                            <img src={image} alt=" " className="img-responsive" />
                            <h4>Personal</h4>
                        </div>
                        <div className="price-gd-bottom">
                            <div className="price-selet">
                                <h3><span>$</span>100</h3>
                                <a href="/" className="scroll">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mx-auto my-5">
                    <div className="price-block agile">
                        <div className="price-gd-top">
                            <img src={image} alt=" " className="img-responsive" />
                            <h4>Family (2 - 10)</h4>
                        </div>
                        <div className="price-gd-bottom">
                            <div className="price-selet">
                                <h3><span>$</span>200</h3>
                                <a href="/" className="scroll">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mx-auto my-5">
                    <div className="price-block agile">
                        <div className="price-gd-top">
                            <img src={image} alt=" " className="img-responsive" />
                            <h4>Group (10 - 50)</h4>
                        </div>
                        <div className="price-gd-bottom">
                            <div className="price-selet">
                                <h3><span>$</span>500</h3>
                                <a href="/" className="scroll">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection
