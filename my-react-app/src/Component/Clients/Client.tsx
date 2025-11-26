import { ClientSlider } from "../../small component/Clientslider";

export default function Client()
{
    return (
        <div className="outer bg-[#f9f9f9]">
            <div className="inner overflow-hidden ">
                    <div className=" w-full  flex flex-col gap-3 items-center">
                        <p className="slogan">Clients</p>
                        <h2 className="title"> Our Valued Customer</h2>
                        <ClientSlider/>
                    </div>
            </div>
        </div>
    );
}