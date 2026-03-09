import { FaBlog, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillFileUnknown } from "react-icons/ai";

function FooterLinksBlock({
                              link,
                              mail = false,
                              blog = false,
                              twitter = false,
                              linkedin = false,
                              facebook = false,
                              instagram = false,
}) {
    if (mail) {
        return (
            <a href={link} target="_blank">
                <FaEnvelope className="icon" />
            </a>
        )
    } else if (blog) {
        return (
            <a href={link} target="_blank">
                <FaBlog className="icon" />
            </a>
        )
    } else if (twitter) {
        return (
            <a href={link} target="_blank">
                <FaSquareXTwitter className="icon" />
            </a>
        )
    } else if (linkedin) {
        return (
            <a href={link} target="_blank">
                <FaLinkedin className="icon" />
            </a>
        )
    } else if (facebook) {
        return (
            <a href={link} target="_blank">
                <FaFacebookSquare className="icon" />
            </a>
        )
    } else if (instagram) {
        return (
            <a href={link} target="_blank">
                <FaInstagram className="icon" />
            </a>
        )
    } else {
        return (
            <a href={link} target="_blank">
                <AiFillFileUnknown className="icon" />
            </a>
        )
    }
}

export default FooterLinksBlock;