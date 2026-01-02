import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import Blog_Table from "./Blog_table";
import { useState } from "react";
import Editor from "./Editor";

export default function Blog() {
    const [openmodel, setopenmodel] = useState(false);
    return (
        <div className="flex md:flex-col gap-5">
            <div className="flex justify-between items-center">
                <div>

                    <h1>Blog</h1>
                </div>
                <div className="flex gap-4">
                    <input type="text" className="rounded text-md text-gray-600 font-light border-[#ff6637]" placeholder="Search Blog ..." />
                    <Button  onClick={() => setopenmodel(true)}  className="bg-[#ff6637] text-lg flex gap-2 cursor-pointer"> <i className="fa-solid fa-plus"></i>Add Blog</Button>


                    <Modal show={openmodel} size="xl" popup={true} position="center"  onClose={() => setopenmodel(false)} >
                        <ModalHeader className=" text-white"><h2 className="text-2xl text-[#ff6637]!">Add New Blog</h2></ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col justify-between gap-4">
                                <div className="flex flex-col  gap-2">
                                    <label className="text-gray-600 font-semibold">Blog Title</label>
                                    <input type="text" className="border border-gray-300 rounded-md p-2" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 font-semibold">Blog Description</label>
                                    <Editor/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 font-semibold">Featured Image</label>
                                    <input type="file" className="border border-gray-300 rounded-md p-2" />
                                </div>
                               
                                <div className="flex gap-4">
                                    <button className="bg-[#ff6637] text-white p-4 text-lg rounded">Save</button>
                                    <button className="bg-[#ff6637] text-white p-4 text-lg rounded" onClick={() => setopenmodel(false)}>Cancel</button>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
            <Blog_Table />
        </div>
    );
}