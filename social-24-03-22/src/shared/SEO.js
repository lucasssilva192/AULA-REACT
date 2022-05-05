import React from "react";
import Helmet from "react-helmet";

export default function SEO({title}){
    const titleText = title ? title : 'Senacgram'
    return(
        <Helmet>
            <title>{titleText}</title>
        </Helmet>
    )
}