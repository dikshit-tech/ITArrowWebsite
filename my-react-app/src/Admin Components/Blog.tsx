import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import Blog_Table from "./Blog_table";
import { useState } from "react";
import Editor from "./Editor";
import axios from "axios";
import { url } from "../Config/config";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Blog() {
    const navigate = useNavigate();
    const [openmodel, setopenmodel] = useState(false);
    const [blogfields,setblogfields] = useState(
        {
            blogTitle: "",
            blogDescription: "",
           blogImage:null
        }
    )
    const handlechange = (e:React.ChangeEvent<HTMLInputElement>)=>
    {
        const {name,type}=e.target;
        const value =type === "file"?e.target.files![0]:e.target.value;
        setblogfields(
            prev =>({
                ...prev,
                [name]:value
            })
        )

    }
    const blognotifications =()=>
    {
        setopenmodel(false);
        toast.success("Blog Added Successfully");
        setblogfields(({
            blogTitle: "",
            blogDescription: "",
           blogImage:null}))
        navigate("/about-us");
        
    }
    const handelsubmit = (e:React.FormEvent<HTMLFormElement>)=>
    {
        e.preventDefault();
        // alert("Field Title is : "+blogfields.blogTitle +" Field Description is : "+blogfields.blogDescription);
        const formData:FormData = new FormData(); 
        formData.append("blogTitle",blogfields.blogTitle);
        formData.append("blogDescription",blogfields.blogDescription);
       if(blogfields.blogImage)
       {
        formData.append("blogImage",blogfields.blogImage);
       }

     axios.post(`${url}/blog`,formData)
       .then(
        (res)=>
        {
            (res.data ?blognotifications(): alert("something went wrong"));
            
        }
       )
    }

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
                            <form onSubmit={handelsubmit}>
                            <div className="flex flex-col justify-between gap-4">
                                <div className="flex flex-col  gap-2">
                                    <label className="text-gray-600 font-semibold">Blog Title</label>
                                    <input type="text" name="blogTitle" onChange={handlechange} required className="border border-gray-300 rounded-md p-2" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 font-semibold">Blog Description</label>
                                    <Editor value={blogfields.blogDescription} onChange={(e) => setblogfields(prev => ({ ...prev, blogDescription: e }))} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 font-semibold">Featured Image</label>
                                    <input type="file" name="blogImage" required onChange={handlechange} className="border border-gray-300 rounded-md p-2" />
                                </div>
                               
                                <div className="flex gap-4">
                                    <button type="submit" className="bg-[#ff6637] text-white p-4 text-lg rounded">Save</button>
                                    <button className="bg-[#ff6637] text-white p-4 text-lg rounded" onClick={() => setopenmodel(false)}>Cancel</button>
                                </div>
                            </div>
                            </form>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
            <Blog_Table />
        </div>
    );
}