import React from "react";

const ConnectingButton = ({
  createRoomButton = false,
  buttonText,
  onClickHandler,
}) => {
  const ButtonClass = createRoomButton
    ? "create_room_button"
    : "join_room_button";
  return (
    <button className={ButtonClass} onClick={onClickHandler}>
      {buttonText}
    </button>
  );
};

export default ConnectingButton;
