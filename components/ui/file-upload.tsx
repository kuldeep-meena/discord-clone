"use client";

interface FileUploadProps {
  onChange:(url?: string)=>void;
  value:string;
  endpoint:"messageFile"|"serverImage"
}

const FileUpload = (props:FileUploadProps) => {
    const {endpoint,value,onChange}=props;
    return ( <div>this is a file upload components</div> );
}
 
export default FileUpload;