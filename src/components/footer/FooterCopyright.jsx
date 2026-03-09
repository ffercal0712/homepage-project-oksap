function FooterCopyright({ text, link }) {
    return (
        <div className="footer-copyright">
            <a href={link} target="_blank"><h6>{text}</h6></a>
        </div>
    )
}

export default FooterCopyright;