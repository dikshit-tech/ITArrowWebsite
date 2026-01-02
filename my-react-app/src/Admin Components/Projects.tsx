import { Button } from "flowbite-react";
import Project_Table from "./Project_Table";

export default function Projects() {
    return (
        <div className="flex md:flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <div>
        
                            <h1>Projects</h1>
                        </div>
                        <div className="flex gap-4">
                            <input type="text" className="rounded text-md text-gray-600 font-light border-[#ff6637]" placeholder="Search Projects ..." />
                            <Button className="bg-[#ff6637] text-lg flex gap-2"> <i className="fa-solid fa-plus"></i>Add Projects</Button>
                        </div>
                    </div>
                    <Project_Table />
                </div>
    );
}