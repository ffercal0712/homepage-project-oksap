import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

function TeamCard({
                      img,
                      name,
                      description,
                      linkedin = "https://www.linkedin.com/company/oksap-spain/",
                      mail = "info@oksap.es"
}) {
    return (
        <div className="team-card">
            <img src={img} alt=""/>
            <div className="team-card-content">
                <h4>{name}</h4>
                <h6>{description}</h6>

                <div className="team-links">
                    <a href={linkedin} target="_blank">
                        <FaLinkedinIn className="icon" />
                    </a>
                    <a href={`mailto:${mail}`}>
                        <FaEnvelope className="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TeamCard;