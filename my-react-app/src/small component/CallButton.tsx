import { Link } from "react-router-dom";

export default function CallButton() {
    return (
        <>
          <Link to={"tel:+13074295622"}>  <button className="bg-[#ff6637] p-3 rounded-xl text-white cursor-pointer">(307) 429 5622</button></Link>
        </>
    );
}