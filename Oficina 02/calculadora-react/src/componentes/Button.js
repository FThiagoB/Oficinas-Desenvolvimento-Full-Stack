function Button({str, typeButton="light", click=undefined}){
    let estiloBotão = "btn w-100 ";

    switch( typeButton ){
        case "light":
            estiloBotão += "btn-outline-secondary button-light";
            break;
        
        case "dark":
            estiloBotão += "btn-outline-dark button-dark";
            break;

        case "blue":
            estiloBotão += "btn-info button-blue";
            break;
    }

    return (
        <button type="button" className={estiloBotão} onClick={click}>{str}</button>
    );
}

export default Button