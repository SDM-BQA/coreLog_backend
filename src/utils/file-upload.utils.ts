import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs";
import { Request, Response } from "express";

// 1. Use memory storage to process the file in RAM before saving
const storage = multer.memoryStorage();

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Limit 5MB
    },
    fileFilter: (_req, file, cb) => {
        const filetypes = /jpeg|jpg|png|webp/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error("Error: File upload only supports the following filetypes - " + filetypes));
    },
});

export const handleImageUpload = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const filename = `img-${Date.now()}.webp`;
        const outputPath = path.join(process.cwd(), "public", "uploads", filename);

        // 2. Compress the image using Sharp
        // We convert to webp as it has better compression
        await sharp(req.file.buffer)
            .resize(800, 800, { fit: "inside", withoutEnlargement: true }) // Optional resizing
            .webp({ quality: 80 }) // Compress to 80% quality
            .toFile(outputPath);

        // 3. Return the public URL
        const fileUrl = `/uploads/${filename}`;
        
        return res.status(200).json({
            message: "Image uploaded and compressed successfully",
            url: fileUrl,
        });
    } catch (error: any) {
        console.error("Upload error:", error);
        return res.status(500).json({ message: error.message || "Internal Server Error" });
    }
};
