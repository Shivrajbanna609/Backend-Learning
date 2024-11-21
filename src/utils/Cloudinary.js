import {v2 as cloudinary} from "cloudinary";
import { response } from "express";
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_KEY_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //upload the filr on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        //file has been successfully uploaded
        // console.log("file is uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath)
        return response;
        
    } catch (error) {
        fs.unlink(localFilePath) // remove locally saved temp file 
        return null;
    }
}

export {uploadOnCloudinary}



