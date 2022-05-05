import React from "react";
import NavBar from "./navbar"
import SEO from "./SEO"

export default function layout ({ children, title }){
    return(<div>
                <SEO title={title}/>
                <header>
                    <div>
                        <NavBar/>
                    </div>
                </header>
                <main className="text-center" style={{'marginTop': '90px'}}>
                    {children}
                </main>
            </div>
            );
};