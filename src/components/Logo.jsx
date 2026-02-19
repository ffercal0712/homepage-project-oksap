import {LanguageSelect} from "./navigation/LanguageSelect.jsx";

export function Logo({ src, alt }) {
    return (
        <>
            <img className="logo" src={src} alt={alt}/>
        </>
    )
}