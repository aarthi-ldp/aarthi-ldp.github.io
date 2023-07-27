import React from 'react';

interface CheckboxBoxProps {
  onApply: (checkedItems: any) => void;
  checkedItems: {
    allStatus: boolean,
    clear: boolean,
    consider: boolean,
  }
}

const CheckboxBox: React.FC<CheckboxBoxProps> = (props) => {
  const { onApply,checkedItems } = props;




  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const temp = {
      ...checkedItems,
      [event.target.name]: event.target.checked,
    }
  
    onApply(temp);
  };
  

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="allStatus"
          checked={checkedItems.allStatus}
          onChange={handleCheckboxChange}
        />
        All status
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="clear"
          checked={checkedItems.clear}
          onChange={handleCheckboxChange}
        />
        Clear
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="consider"
          checked={checkedItems.consider}
          onChange={handleCheckboxChange}
        />
        Consider
      </label>
      <br />
      </div>
  );
};

export default CheckboxBox;