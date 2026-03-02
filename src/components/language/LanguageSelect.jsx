import { LanguageOption } from "./LanguageOption.jsx";

/**
 * Elemento tipo Dropdown List para seleccionar uno de varios idiomas.
 *
 * @param title Título del DDL.
 * @returns {React.JSX.Element}
 * @constructor
 */
export function LanguageSelect({ title }) {
    return (
        <div className="language-ddl">
            <button className="lang-ddl-btn">
                {title}⯆
            </button>

            <div className="lang-ddl-content">
                <LanguageOption language={"ENGLISH"} src={"/src/img/lang/eng.png"} alt={"English"} />
                <LanguageOption language={"ESPAÑOL"} src={"/src/img/lang/espana.png"} alt={"Español"} />
                <LanguageOption language={"DEUTSCH"} src={"/src/img/lang/alemania.png"} alt={"Deutsch"} />
                <LanguageOption language={"FRANÇAIS"} src={"/src/img/lang/francia.png"} alt={"Français"} />
                <LanguageOption language={"NORSK"} src={"/src/img/lang/noruega.png"} alt={"Norsk"} />
                <LanguageOption language={"SVENSKA"} src={"/src/img/lang/suecia.png"} alt={"Svenska"} />
            </div>
        </div>
    )
}