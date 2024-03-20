import TextArea from "./TextArea";
import TextInput from "./TextInput";
import { useState, useContext, useEffect } from "react";
import { BuilderContext } from "./../../App";

const Profile = () => {
  const ctx = useContext(BuilderContext);
  const [profile, setProfile] = useState(ctx.getComponentData("Profile"));
  console.log(profile);
  useEffect(() => {
    setProfile(ctx.getComponentData("Profile"));
  }, [ctx]);

  const handleChange = (key, value) => {
    const updatedProfile = { ...profile, [key]: value };
    setProfile(updatedProfile);
    ctx.updateInfo(updatedProfile);
  };

  return (
    <div className="pb-11">
      {/* Name Section */}
      <div className="pb-3 ps-1">
        <label className="font-medium " htmlFor="Name">
          Name
        </label>
      </div>
      <TextArea
        placeholder="Full name"
        handleChange={(e) => handleChange("name", e.target.value)}
        style="pb-3"
        rows="2"
        defaultValue={profile.name}
      />

      {/* Profession Section */}
      <div className="pb-3 ps-1">
        <label className="font-medium " htmlFor="Profession">
          Role
        </label>
      </div>
      <TextInput
        placeholder="Profession"
        handleChange={(e) => handleChange("profession", e.target.value)}
        style="pb-3"
        defaultValue={profile.profession}
      />

      {/* Image URL Section */}
      <div className="pb-3 ps-1">
        <label className="font-medium " htmlFor="ImageUrl">
          Image Url
        </label>
      </div>
      <div className="flex flex-row">
        <TextInput
          placeholder="Profile Image Url"
          handleChange={(e) => handleChange("profileImageURL", e.target.value)}
          style="pb-3 pr-3"
          defaultValue={profile.profileImageURL}
        />
      </div>
    </div>
  );
};

export default Profile;
