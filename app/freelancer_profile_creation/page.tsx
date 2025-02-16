"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface UserData {
  name: string;
  email: string;
  password: string;
  skills: string[];
  position: string;
  gender: string;
  age: number;
  bio: string;
  education: string;
  socialLinks: string[];
}

const FreelancerProfileCreation: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
    education: 'undergraduate',
    position: '',
    bio: '',
    age: 0,
    gender: 'male',
    skills: [],
    socialLinks: [''],
  });

  const [skillInput, setSkillInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleInputChange = (field: keyof UserData, value: string | number) => {
    setUserData({ ...userData, [field]: value });
  };

  const addSkill = () => {
    if (userData.skills.includes(skillInput.trim())) return;
    setUserData({ ...userData, skills: [...userData.skills, skillInput.trim()] });
    setSkillInput('');
  };

  const removeSkill = (index: number) => {
    const newSkills = userData.skills.filter((_, i) => i !== index);
    setUserData({ ...userData, skills: newSkills });
  };

  const addSocialLink = () => {
    setUserData({ ...userData, socialLinks: [...userData.socialLinks, ''] });
  };

  const handleSocialLinkChange = (index: number, value: string) => {
    const newSocialLinks = [...userData.socialLinks];
    newSocialLinks[index] = value;
    setUserData({ ...userData, socialLinks: newSocialLinks });
  };
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
        const response = await axios.post(
            `${API_BASE_URL}/api/auth/freelancer/register`, 
            userData,
            { headers: { "Content-Type": "application/json" } }
        );

        setSuccess("Freelancer registered successfully!");
        console.log(response.data);
    } catch (error: any) {
        console.error("Error registering freelancer:", error);
        setError(error.response?.data?.message || "Error registering freelancer");
    } finally {
        setLoading(false);
    }
};


  return (
    <div className="p-5 max-w-lg mx-auto font-sans">
      <h1 className="text-center mb-5 font-bold text-md">Create Your Profile</h1>
      <div className="mb-5 text-center">
        <Image src="/person2.jpg" alt="Avatar" width={96} height={96} className="rounded-full mx-auto" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="text-sm font-semibold block mb-1">Name:</label>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label className="text-sm font-semibold block mb-1">Email:</label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label className="text-sm font-semibold block mb-1">Password:</label>
          <input
            type="password"
            value={userData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label className="text-sm font-semibold block mb-1">Education:</label>
          <select
            value={userData.education}
            onChange={(e) => handleInputChange('education', e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate</option>
            <option value="non-experienced">Non-Experienced</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="text-sm font-semibold block mb-1">Age:</label>
          <input
            type="number"
            value={userData.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label className="text-sm font-semibold block mb-1">Gender:</label>
          <select
            value={userData.gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="text-sm font-semibold block mb-1">Position:</label>
          <input
            type="text"
            value={userData.position}
            onChange={(e) => handleInputChange('position', e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label className="text-sm font-semibold block mb-1">Bio:</label>
          <textarea
            value={userData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
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
            <button type="button" onClick={addSkill} className="ml-2 text-sm font-semibold text-black cursor-pointer">
              Add
            </button>
          </div>
          <div className="flex flex-wrap">
            {userData.skills.map((skill, index) => (
              <div key={index} className="flex items-center bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
                <span className="text-sm">{skill}</span>
                <button
                  type="button"
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
          {userData.socialLinks.map((link, index) => (
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
          <button type="button" onClick={addSocialLink} className="w-full text-sm font-semibold text-black mt-2 cursor-pointer text-right">
            Add Social Link
          </button>
        </div>
        {error && <p className="text-red-500 text-center mb-5">{error}</p>}
        {success && <p className="text-green-500 text-center mb-5">{success}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white rounded-md p-2 cursor-pointer" disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};

export default FreelancerProfileCreation;