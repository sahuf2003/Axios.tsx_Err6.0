"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const FreelancerProfileCreation: React.FC = () => {
    const [projects, setProjects] = useState([{ title: '', description: '', link: '' }]);
    const [socialLinks, setSocialLinks] = useState(['']);
    const [skills, setSkills] = useState<string[]>([]);
    const [skillInput, setSkillInput] = useState('');
    const [document, setDocument] = useState<File | null>(null);

    const addProject = () => {
        setProjects([...projects, { title: '', description: '', link: '' }]);
    };

    const removeProject = (index: number) => {
        const newProjects = projects.filter((_, i) => i !== index);
        setProjects(newProjects);
    };

    const addSocialLink = () => {
        setSocialLinks([...socialLinks, '']);
    };

    const handleProjectChange = (index: number, field: 'title' | 'description' | 'link', value: string) => {
        const newProjects = [...projects];
        newProjects[index][field] = value;
        setProjects(newProjects);
    };

    const handleSocialLinkChange = (index: number, value: string) => {
        const newSocialLinks = [...socialLinks];
        newSocialLinks[index] = value;
        setSocialLinks(newSocialLinks);
    };

    const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setDocument(event.target.files[0]);
        }
    };

    const addSkill = () => {
        if (skillInput.trim() !== '') {
            setSkills([...skills, skillInput.trim()]);
            setSkillInput('');
        }
    };

    const removeSkill = (index: number) => {
        const newSkills = skills.filter((_, i) => i !== index);
        setSkills(newSkills);
    };

    return (
        <div className="p-5 max-w-lg mx-auto font-sans">
            <h1 className="text-center mb-5 font-bold text-md">Create Your Profile</h1>
            <div className="mb-5 text-center">
                <Image src="/person2.jpg" alt="Avatar" width={96} height={96} className="rounded-full mx-auto" />
            </div>
            <div className="mb-5">
                <label className="text-sm font-semibold block mb-1">Name:</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div className="mb-5">
                <label className="text-sm font-semibold block mb-1">Education:</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate</option>
                    <option value="non-experienced">Non-Experienced</option>
                </select>
            </div>
            <div className="mb-5">
                <label className="text-sm font-semibold block mb-1">Age:</label>
                <input type="number" min="0" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div className="mb-5">
                <label className="text-sm font-semibold block mb-1">Gender:</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="mb-5">
                <h3 className="mb-2 text-sm font-semibold">Previous Projects</h3>
                {projects.map((project, index) => (
                    <div key={index} className="mb-5 p-3 border border-gray-300 rounded-md bg-gray-50">
                        <div className="flex justify-between items-center mb-2">
                            <input
                                type="text"
                                placeholder="Title"
                                value={project.title}
                                onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md"
                            />
                            <button
                                onClick={() => removeProject(index)}
                                className="ml-2 text-red-500 text-sm font-semibold cursor-pointer"
                            >
                                Remove
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="Description"
                            value={project.description}
                            onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                            className="w-full mb-2 border border-gray-300 p-2 rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Link"
                            value={project.link}
                            onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                ))}
                <button onClick={addProject} className="w-full text-sm font-semibold text-black mt-2 cursor-pointer text-right">Add Project</button>
            </div>
            <div className="mb-5">
                <h3 className="mb-2 text-sm font-semibold">Skills</h3>
                <div className="flex mb-2">
                    <input
                        type="text"
                        placeholder="Add a skill"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                    <button onClick={addSkill} className="ml-2 text-sm font-semibold text-black cursor-pointer">Add</button>
                </div>
                <div className="flex flex-wrap">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
                            <span className="text-sm">{skill}</span>
                            <button
                                onClick={() => removeSkill(index)}
                                className="ml-2 text-red-500 text-sm font-semibold cursor-pointer"
                            >
                                &#x2715;
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-5">
                <h3 className="mb-2 text-sm font-semibold">Social Links</h3>
                {socialLinks.map((link, index) => (
                    <div key={index} className="mb-2">
                        <input
                            type="text"
                            placeholder="Link"
                            value={link}
                            onChange={(e) => handleSocialLinkChange(index, e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                ))}
                <button onClick={addSocialLink} className="w-full text-sm font-semibold text-black mt-2 cursor-pointer text-right">Add Social Link</button>
            </div>
            <div className="mb-5">
                <h4 className="mb-2 text-sm font-semibold">Upload Document (Resume/Other Important Documents)</h4>
                <input type="file" onChange={handleDocumentUpload} className="w-full border border-gray-300 p-2 rounded-md" />
                {document && <p className="mt-2">Uploaded: {document.name}</p>}
            </div>
            <button className="w-full bg-blue-500 text-white rounded-md p-2 cursor-pointer">Create Account</button>
        </div>
    );
};

export default FreelancerProfileCreation;