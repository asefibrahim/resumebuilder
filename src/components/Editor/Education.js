import { useState, useContext, useEffect } from "react";
import { BuilderContext } from "./../../App";
import ActionMenu from "./ActionMenu";
import EducationItem from "./EducationItem";

const Education = () => {
  const ctx = useContext(BuilderContext);
  const newItem = {
    degree: "Software Engineering - University of Sydney",
    date: "Mar 2017 - Dec 2019",
  };
  const [education, setEducation] = useState(ctx.getComponentData("Education"));

  console.log(education);

  const handleChange = (index, e) => {
    const targetName = e.target.name;
    setEducation((prevEducation) => {
      const updatedItems = prevEducation.items.map((item, i) =>
        i === index ? { ...item, [targetName]: e.target.value } : item
      );
      const updatedEducation = { ...prevEducation, items: updatedItems };
      ctx.updateInfo(updatedEducation);
      return updatedEducation;
    });
  };

  const handleAddClick = () => {
    setEducation((prevEducation) => {
      const updatedEducation = {
        ...prevEducation,
        items: [...prevEducation.items, newItem],
      };
      ctx.updateInfo(updatedEducation);
      return updatedEducation;
    });
  };

  const handleRemoveClick = () => {
    setEducation((prevEducation) => {
      const updatedItems = prevEducation.items.slice(0, -1);
      const updatedEducation = { ...prevEducation, items: updatedItems };
      ctx.updateInfo(updatedEducation);
      return updatedEducation;
    });
  };

  return (
    <div>
      {education.items.map((item, index) => (
        <EducationItem
          key={index}
          index={index}
          data={item}
          handleChange={handleChange}
        />
      ))}
      <ActionMenu
        handleAddClick={handleAddClick}
        handleRemoveClick={handleRemoveClick}
      />
    </div>
  );
};

export default Education;
