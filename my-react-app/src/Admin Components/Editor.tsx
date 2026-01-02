import{ useState } from "react";
import ReactQuill from "react-quill";

export default function Editor() {
  const [value, setValue] = useState("");
   const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"], // remove formatting
    ],
  };

  return (
    <ReactQuill 
      theme="snow" 
      value={value} 
      modules={modules}
      onChange={setValue} 
      placeholder="Write something..."
       style={{height:"200px" }}
    />
  );
}
