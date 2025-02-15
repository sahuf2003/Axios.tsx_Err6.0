import React from "react";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-blue-600">DocX</h1>
            <p className="text-gray-600 mt-4">Welcome to the document sharing page! Here you can upload and manage your documents.</p>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800">Upload a Document</h2>
                <form className="mt-4">
                    <input type="file" className="border p-2 rounded-lg" />
                    <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">Upload</Button>
                </form>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800">Your Documents</h2>
                <div className="mt-4">
                    <p>No documents uploaded yet.</p>
                </div>
            </div>
        </div>
    );
};

export default DocumentsPage;
