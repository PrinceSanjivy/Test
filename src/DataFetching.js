import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkCard from "./LinkCard";

function DataFetching() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("./data.json")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (Object.keys(data).length) {
    return (
      <div>
        <center>
          <Avatar
            sx={{
              marginTop: "30px",
              width: 50,
              height: 50,
              bgcolor: "green",
            }}
          >
            PS
          </Avatar>
          <h1 style={{ color: "green", marginBottom: "10px" }}>{data.name}</h1>
          <h3 style={{ marginBottom: "10px", marginTop: "5px" }}>
            {data.tagline}
          </h3>
          {data.links.map((el, index) => {
            return <LinkCard key={index} index={index} icon={el.icon} link={el.link} />;
          })}
        </center>
      </div>
    );
  } else {
    return <h1 style={{ color: "green", marginBottom: "10px" }}>Loading...</h1>;
  }
}

export default DataFetching;
