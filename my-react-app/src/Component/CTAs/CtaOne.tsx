import { Link } from "react-router-dom";

export default function CtaOne() {
    return (
        <div className="background bg-[#050404e8] bg-blend-overlay opacity-80 ">
            <div className="inner justify-center! overflow-hidden " >
                <div className=" w-[70%]  flex flex-col gap-3 items-center">
                    <p className="slogan">Pricing Plan</p>
                    <h2 className="title text-white! text-center!">Check Our Packages & Get a Free Consultation</h2>
                    <p className="description text-white! text-center!">Explore pricing options designed to meet different business needs and budgets.
                         Each package is carefully structured to provide essential tools and premium features that help your business grow efficiently and effectively.</p>
                   <Link className="bg-[#ff6637] text-white p-2 text-lg rounded" to={""}>View Packages</Link>
                </div>
                
            </div>
        </div>
    );
}