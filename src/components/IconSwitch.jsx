import React from "react";

export default function IconSwith(props) {
  const { icon } = props;

  const onSwitch = () => {
    props.onSwitch();
  };

  return (
    <div className="set-icon">
      <div className="material-icons" onClick={onSwitch}>
        {icon}
      </div>
    </div>
  );
}
