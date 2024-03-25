import Header from "./Header";
import FooterNow from "./footerNow";
import NowContent from "./NowContent";
import { useState } from "react";
import Dates from "./Date";

function BookNow(){



    return(
        <>
        <Header/>
        <NowContent />
        <FooterNow />
        </>
    )
}


export default BookNow;