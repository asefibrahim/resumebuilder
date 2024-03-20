import React, { useContext, useState, useEffect } from "react";
import { BuilderContext } from "./../../App";
import Education from "./Education";
import Socials from "./Socials";
import TextArea from "./TextArea";
import TextSelect from "./TextSelect";
import Skills from "./Skills";
import EmploymentHistory from "./EmploymentHistory";
import KeySkills from "./KeySkills";
import Projects from "./Projects";
import Profile from "./Profile";
import Contact from "./Contact";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumeTemplate } from "../PDF/ResumeTemplate";

const ResumeEdit = () => {
  const ctx = useContext(BuilderContext);

  const profile = ctx.getComponentData("Profile");

  const handleSubmit = async () => {
    const data = {
      profile: ctx.getComponentData("Profile"),
      socials: ctx.getSocials(),
      education: ctx.getComponentData("Education"),
      skills: ctx.getComponentData("Skills"),
      contact: ctx.getComponentData("Contact"),
    };

    try {
      const response = await fetch("http://localhost:5000/resumeinfo", {
        // Replace with your server's URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Server response:", responseData);
      alert("Data successfully stored in database");
    } catch (error) {
      console.error("Failed to send data:", error);
    }
  };
  const handleChange = (e) => {
    ctx.updateInfo({ ...profile, about: e.target.value });
  };

  return (
    <>
      <div className="flex px-20 flex-col w-full ">
        <div className="flex flex-col  px-5 py-16">
          <Profile />
          <div className="pb-3 ps-1">
            <label className="font-medium " htmlFor="Title">
              Social Info
            </label>
          </div>
          <Socials />
          <div className="pb-3 ps-1 pt-6">
            <label className="font-medium " htmlFor="Title">
              Education
            </label>
          </div>
          <Education />
          <div className="pb-3 ps-1 pt-6">
            <label className="font-medium " htmlFor="Title">
              Skills
            </label>
          </div>
          <Skills />
          <div className="pb-3 ps-1 pt-6">
            <label className="font-medium " htmlFor="Title">
              Contact Info
            </label>
          </div>
          <Contact />
        </div>

        <div className=" ">
          <div style={{ paddingLeft: "20px" }} className="pb-3   pt-6">
            <label className="font-medium " htmlFor="Title">
              About
            </label>
          </div>
          <TextArea
            placeholder="About"
            style="px-5 py-3"
            label="Profile"
            defaultValue={profile.about}
            handleChange={(e) => {
              handleChange(e);
            }}
          />

          <div style={{ paddingLeft: "20px" }} className="pb-3 ps-1 pt-6">
            <label className="font-medium " htmlFor="Title">
              Skills
            </label>
          </div>
          <KeySkills />
          <div style={{ paddingLeft: "20px" }} className="pb-3  pt-6">
            <label className="font-medium " htmlFor="Title">
              Projects
            </label>
          </div>
          <Projects />
          <EmploymentHistory />
        </div>

        <div className="text-right py-6 pr-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2  bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <PDFDownloadLink
              document={<ResumeTemplate builder={ctx} />}
              fileName="somename.pdf"
            >
              {({ loading }) =>
                loading ? "Loading document..." : "Save and Download"
              }
            </PDFDownloadLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default ResumeEdit;
