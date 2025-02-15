import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase"; // Ensure this is correctly initialized

export const useUpload = () => {
    const uploadFile = async (file: File): Promise<string> => {
        // Create a reference to the file location in Firebase Storage
        const fileRef = ref(storage, `uploads/${file.name}`);

        // Start the upload task
        const uploadTask = uploadBytesResumable(fileRef, file);

        // Return a promise that resolves with the download URL
        return new Promise<string>((resolve, reject) => {
            uploadTask.on(
                "state_changed",
                null, // No need to handle progress for now
                (error: Error) => {
                    // Handle errors
                    reject(error);
                },
                async () => {
                    // On successful upload, get the download URL
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        resolve(downloadURL);
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    };

    return { uploadFile };
};