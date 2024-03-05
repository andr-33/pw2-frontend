import RadioOption from "../RadioOption/RadioOption";

const RadioGroup = ({ addOption, removeOption }) => {
  return (
    <div className="flex flex-row w-11/12 items-center justify-around rounded-lg h-10 mb-2 bg-gray-300">
      <RadioOption
        label="User"
        value="user"
        addOption={addOption}
        removeOption={removeOption}
      />
      <RadioOption
        label="Admin"
        value="admin"
        addOption={addOption}
        removeOption={removeOption}
      />
      <RadioOption
        label="Moderator"
        value="moderator"
        addOption={addOption}
        removeOption={removeOption}
      />
    </div>
  );
};

export default RadioGroup;
