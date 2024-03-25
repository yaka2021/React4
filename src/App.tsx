import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./App.scss";

export const App = () => {
  const name: string = "";
  const profile: string = "持っている資格：基本情報技術者";
  return (
    <div className="App">
      <h1>Portfolio</h1>
      <Card sx={{ width: 500, height: 500 }} className="card">
        <CardContent>
          <Avatar
            alt="sample"
            src=""
            sx={{ width: 200, height: 200 }}
            className="img"
          />
          <Typography variant="h4" className="name">
            {name}
          </Typography>
          <Typography variant="h5" className="profile">
            {profile}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
