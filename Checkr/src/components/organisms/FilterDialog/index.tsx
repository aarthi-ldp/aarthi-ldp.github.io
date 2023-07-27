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

// useEffect (() => {
//   onApply(checkedItems)
// }, [checkedItems]); 


  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const temp = {
      ...checkedItems,
      [event.target.name]: event.target.checked,
    }
  //  setcheckedItems(temp);
    onApply(temp);
  };
  // const handleApplyClick = () => {
  //   onApply(checkedItems);

  // };

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
      {/* <button onClick={handleApplyClick}>Apply</button> */}
      </div>
  );
};

export default CheckboxBox;