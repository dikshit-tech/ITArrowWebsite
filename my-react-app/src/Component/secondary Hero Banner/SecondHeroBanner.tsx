import { Link } from "react-router-dom";

export default function SecondHeroBanner({pagename,desc}: {pagename: string,desc:string}) {     
    return (
        <div className="outer secondhero bg-blend-overlay opacity-80 bg-gray-800 bg-cover bg-center  rounded-lg ">
            <div className="inner justify-center! flex-col!"> 
                <div className="flex justify-center items-center h-full  ">
                   <Link className="title text-orange-400!" to={"/"}>  Home </Link> <h1 className="herosubheading"><span>  // </span> {pagename}</h1>
                </div>
                <div>
                    <h2 className="title text-white!">{desc}</h2>
                </div>

            </div>
        </div>
    );
}