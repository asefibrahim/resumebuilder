import { BuilderContext } from "./../../App";
import { useContext, useState } from "react";
import TextArea from "./TextArea";
import ToggleButton from "./ToggleButton";
const KeySkills = () => {
  const ctx = useContext(BuilderContext);

  const [skills, setSkills] = useState(ctx.getComponentData("KeySkills"));
  const handleChange = (e) => {
    setSkills({ ...skills, text: e.target.value });
    ctx.updateInfo(skills);
  };

  return (
    <>
      <TextArea
        placeholder="Key Skills"
        style="px-5 py-3"
        defaultValue={skills.text}
        handleChange={handleChange}
      />
      <ToggleButton
        style="px-5 pb-2"
        defaultValue={skills.display}
        handleChange={(name, prop, isEnabled) => {
          ctx.updateInfo({ ...skills, display: isEnabled });
        }}
      />
    </>
  );
};

export default KeySkills;
