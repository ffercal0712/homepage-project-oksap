export function LanguageSelect() {
    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">
                    LANGUAGE
                </button>

                <div className="dropdown-content">
                    <a href="#">
                        <img src="/src/img/lang/eng.png" alt="English flag"
                             width="20" height="20"/> ENGLISH</a>
                    <a href="#">
                        <img src="/src/img/lang/espana.png" alt="Bandera Española"
                             width="20" height="20"/> ESPAÑOL</a>
                    <a href="#">
                        <img src="/src/img/lang/alemania.png" alt="Deutsche flagge"
                             width="20" height="20"/> DEUTSCH</a>
                    <a href="#">
                        <img src="/src/img/lang/francia.png" alt="Drapeau Français"
                             width="20" height="20"/> FRANÇAIS</a>
                    <a href="#">
                        <img src="/src/img/lang/noruega.png" alt="Norsk flagg"
                             width="20" height="20"/> NORSK</a>
                    <a href="#">
                        <img src="/src/img/lang/suecia.png" alt="Svenska flaggan"
                             width="20" height="20"/> SVENSKA</a>
                </div>
            </div>
        </>
    )
}