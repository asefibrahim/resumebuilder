import { Add } from "./Icons/Add";
import { Remove } from "./Icons/Remove";
const ActionMenu = ({
  style,

  handleAddClick,
  handleRemoveClick,
}) => {
  return (
    <div className={`flex py-2 flex-row justify-between ${style}`}>
      <div className="flex flex-row pt-[5px]">
        <Add color="#d1d5db" handleClick={handleAddClick} />

        <Remove color="#d1d5db" handleClick={handleRemoveClick} />
      </div>
    </div>
  );
};

export default ActionMenu;
