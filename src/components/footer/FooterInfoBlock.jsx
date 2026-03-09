import { MdKeyboardArrowRight } from "react-icons/md";

function FooterInfoBlock({ text, link, mail }) {
    if (link || link !== undefined) {
        return (
            <div className="footer-block">
                            <span className="info">
                                <MdKeyboardArrowRight className="block-arrow" />
                                <a href={link} target="_blank">{text}</a>
                            </span>
                <hr />
            </div>
        )
    } else if (mail || mail !== undefined) {
        return (
            <div className="footer-block">
                            <span className="info">
                                <MdKeyboardArrowRight className="block-arrow" />
                                <a href={`mailto:${mail}`}>{text}</a>
                            </span>
                <hr />
            </div>
        )
    } else {
        return (
            <div className="footer-block">
                            <span className="info">
                                <MdKeyboardArrowRight className="block-arrow" />
                                <p>{text}</p>
                            </span>
                <hr />
            </div>
        )
    }
}

export default FooterInfoBlock;