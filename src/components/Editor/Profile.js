import TextArea from "./TextArea";
import TextInput from "./TextInput";
import { useState, useContext } from "react";
import { BuilderContext } from "./../../App";
import ToggleButton from "./ToggleButton";

const Profile = () => {
  const ctx = useContext(BuilderContext);
  const [profile, setProfile] = useState(ctx.getComponentData("Profile"));

  return (
    <div className="pb-11">
      <div className="pb-3 ps-1">
        <label className="font-medium " htmlFor="Title">
          Name
        </label>
      </div>
      <TextArea
        placeholder="Full name"
        handleChange={(e) =>
          ctx.updateInfo({ ...profile, name: e.target.value })
        }
        style="pb-3"
        rows="2"
        defaultValue={profile.name}
      />
      <div className="pb-3 ps-1">
        <label className="font-medium " htmlFor="Title">
          Role
        </label>
      </div>
      <TextInput
        placeholder="Profession"
        handleChange={(e) =>
          ctx.updateInfo({ ...profile, profession: e.target.value })
        }
        style="pb-3"
        defaultValue={profile.profession}
      />
      <div className="pb-3 ps-1">
        <label className="font-medium " htmlFor="Title">
          Image Url
        </label>
      </div>
      <div className="flex flex-row">
        <TextInput
          placeholder="Profile Image Url"
          handleChange={(e) =>
            ctx.updateInfo({ ...profile, profileImageURL: e.target.value })
          }
          style="pb-3 pr-3"
          defaultValue={profile.profileImageURL}
        />
      </div>
    </div>
  );
};

export default Profile;
