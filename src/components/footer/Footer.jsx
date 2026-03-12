import FooterCompany from "./FooterCompany.jsx";
import FooterInfoBlock from "./FooterInfoBlock.jsx";
import FooterInfo from "./FooterInfo.jsx";
import FooterLinks from "./FooterLinks.jsx";
import FooterLink from "./FooterLink.jsx";
import FooterCopyright from "./FooterCopyright.jsx";
import {useTranslation} from "react-i18next";

/**
 * Elemento que representa el footer de la página.
 *
 * @param companyName nombre de la compañía a mostrar.
 * @param copyrightText texto de copyright a mostrar.
 * @param copyrightLink URL que acompaña al texto de copyright.
 * @returns {React.JSX.Element}
 * @constructor
 */
function Footer({ companyName, copyrightText, copyrightLink }) {

    const { t } = useTranslation();

    return (
        <footer>
            <div className="footer">
                <FooterCompany company={companyName} />

                <FooterInfoBlock>
                    <FooterInfo text={"www.sap.com"} link={"https://www.sap.com"} />
                    <FooterInfo text={t("footerPrivacyStatement")} link={"https://oksap.es/politicas.php"} />
                    <FooterInfo text={t("footerPrivacyNotice")} link={"https://oksap.es/politicas_notice.php"} />
                </FooterInfoBlock>

                <FooterInfoBlock>
                    <FooterInfo text={"Calle Matías Lara 24. 29640 Fuengirola (España)"} />
                    <FooterInfo text={"info@oksap.es"} mail={"info@oksap.es"} />
                    <FooterInfo text={t("footerIndustryNews")} link={"https://blog.oksap.es/"} />
                </FooterInfoBlock>

                <FooterLinks>
                    <FooterLink link={"https://twitter.com/oksap_spain"} twitter={true} />
                    <FooterLink link={"https://www.linkedin.com/company/oksap-spain/"} linkedin={true} />
                </FooterLinks>
            </div>
            <FooterCopyright text={copyrightText} link={copyrightLink} />
        </footer>
    )
}

export default Footer;