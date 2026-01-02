import{ useState } from "react";
import ReactQuill from "react-quill";
interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
 /// const [Value, setValue] = useState("");
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
      onChange={onChange} 
      placeholder="Write something..."
       style={{height:"200px" }}
    />
  );
}
