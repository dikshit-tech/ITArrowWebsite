import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import Testimonials_Table from "./Testimonials_Table";
import Editor from "./Editor";
import { useState } from "react";

export default function Testimonials() {
    const [openmodel, setopenmodel] = useState(false);


    return (
        <div className="flex md:flex-col gap-5">
            <div className="flex justify-between items-center">
                <div>

                    <h1>Testimonials</h1>
                </div>
                <div className="flex gap-4">
                    <input type="text" className="rounded text-md text-gray-600 font-light border-[#ff6637]" placeholder="Search Testimonials ..." />
                    <Button className="bg-[#ff6637] text-lg flex gap-2" onClick={() => setopenmodel(true)}> <i className="fa-solid fa-plus"></i>Add Testimonials</Button>
                </div>
            </div>
            <Testimonials_Table />

            <Modal show={openmodel} size="xl" popup={true} position="center" onClose={() => setopenmodel(false)} >
                <ModalHeader className=" text-white"><h2 className="text-2xl text-[#ff6637]!">Add New Testimonials</h2></ModalHeader>
                <ModalBody>
                    <div className="flex flex-col justify-between gap-4">
                        <div className="flex justify-between flex-wrap gap-1">
                            <div className="flex flex-col ">
                                <label className="text-gray-600 font-semibold">Author Name</label>
                                <input type="text" className="border border-gray-300 rounded-md p-2 placeholder:text-gray-500 placeholder:italic" placeholder="Enter Author name Here.." />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-600 font-semibold">Author Designation</label>
                                <input type="text" className="border border-gray-300 rounded-md p-2 placeholder:text-gray-500 placeholder:italic" placeholder="Author Designation Here.." />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-600 font-semibold">Testimonials Description</label>
                            {/* <Editor  /> */}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-600 font-semibold">Featured Image</label>
                            <input type="file" className="border border-gray-300 rounded-md p-2" />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => setopenmodel(false)}>
                        Save
                    </Button>
                    <Button color="failure" onClick={() => setopenmodel(false)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}