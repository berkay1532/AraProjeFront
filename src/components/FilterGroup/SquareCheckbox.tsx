import { Checkbox } from "@chakra-ui/react";
import React from "react";

export const SquareCheckbox = ({
  text,
  checked,
  setChecked,
}: {
  text: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full flex items-center gap-x-2 py-2">
      <Checkbox
        isChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      >
        {text}
      </Checkbox>
    </div>
  );
};
