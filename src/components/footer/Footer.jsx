import FooterCompany from "./FooterCompany.jsx";
import FooterInfo from "./FooterInfo.jsx";
import FooterInfoBlock from "./FooterInfoBlock.jsx";
import FooterLinks from "./FooterLinks.jsx";
import FooterLinksBlock from "./FooterLinksBlock.jsx";
import FooterCopyright from "./FooterCopyright.jsx";

function Footer({ companyName, copyrightText, copyrightLink }) {
    return (
        <footer>
            <div className="footer">
                <FooterCompany company={companyName} />

                <FooterInfo>
                    <FooterInfoBlock text={"www.sap.com"} link={"https://www.sap.com"} />
                    <FooterInfoBlock text={"Privacy statement"} link={"https://oksap.es/politicas.php"} />
                    <FooterInfoBlock text={"Privacy notice"} link={"https://oksap.es/politicas_notice.php"} />
                </FooterInfo>

                <FooterInfo>
                    <FooterInfoBlock text={"Calle Matías Lara 24. 29640 Fuengirola (España)"} />
                    <FooterInfoBlock text={"info@oksap.es"} mail={"info@oksap.es"} />
                    <FooterInfoBlock text={"Industry news"} link={"https://blog.oksap.es/"} />
                </FooterInfo>

                <FooterLinks>
                    <FooterLinksBlock link={"https://twitter.com/oksap_spain"} twitter={true} />
                    <FooterLinksBlock link={"https://www.linkedin.com/company/oksap-spain/"} linkedin={true} />
                    <FooterLinksBlock link={"https://twitter.com/oksap_spain"} blog={true} />
                    <FooterLinksBlock link={"https://www.linkedin.com/company/oksap-spain/"} mail={true} />
                    <FooterLinksBlock link={"https://twitter.com/oksap_spain"} facebook={true} />
                    <FooterLinksBlock link={"https://www.linkedin.com/company/oksap-spain/"} instagram={true} />
                </FooterLinks>
            </div>
            <FooterCopyright text={copyrightText} link={copyrightLink} />
        </footer>
    )
}

export default Footer;