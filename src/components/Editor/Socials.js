import ToggleButton from "./ToggleButton";
import { useState, useContext, useEffect } from "react";
import { BuilderContext } from "./../../App";
import TextInput from "./TextInput";

const Socials = () => {
  const ctx = useContext(BuilderContext);
  const [socials, setSocials] = useState(ctx.getSocials());
  console.log(socials);
  
  const handleSocialChange = (type, property, value) => {
    const updatedItems = socials.items.map((item) => {
      if (item.type === type) {
        return { ...item, [property]: value };
      }
      return item;
    });

    const updatedSocials = { ...socials, items: updatedItems };
    setSocials(updatedSocials);
    ctx.updateInfo(updatedSocials);
  };

  return (
    <div className="flex flex-col space-evenly">
      {socials.items.map((item, index) => (
        <div className="flex flex-col pb-2" key={index}>
          <a className="text-gray-800 text-sm">{item.type}</a>
          <div className="flex flex-row gap-x-5">
            <TextInput
              placeholder={`${item.type} url`}
              defaultValue={item.url}
              handleChange={(e) => {
                handleSocialChange(item.type, "url", e.target.value);
              }}
            />

            <ToggleButton
              name={item.type}
              handleChange={(value) => {
                handleSocialChange(item.type, "enabled", value);
              }}
              defaultValue={item.enabled}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Socials;
