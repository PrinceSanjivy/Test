import React from "react";
import { Avatar } from "@mui/material";

export default function LinkCard(props) {
  return (
    <div
      style={{
        margin: "20px",
        backgroundColor: "pink",
        height: 60,
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
      }}
    >
      <Avatar sx={{ marginLeft: "30px", bgcolor: "green" }}>
        {props.icon}
      </Avatar>
      <h4 style={{ color: "white", flex: 1 }}>{props.link}</h4>
    </div>
  );
}
