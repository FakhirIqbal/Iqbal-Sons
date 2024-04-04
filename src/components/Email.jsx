import "./style.css";
import Mail_png from "./../assest/mail.png";
import { React } from "react";
// import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { TbSend } from "react-icons/tb";

export default function Mail() {
  return (
    <>
      <div className="mail flex flex-col items-center w-full h-[60vh] bg-slate-600">
        <img
          src={Mail_png}
          alt="Mail Icon"
          className="h-[100px] w-[100px] mt-14"
        />
        <h1 className="text-2xl font-semibold pt-3">Subscibe Newsletter</h1>
        <p className="text-[#323232] text-xs ">
          Subscribe to our email and get updates right in your inbox
        </p>

        <Paper
          component="form"
          sx={{
            display: "flex",
            // justifyContent: "space-between",
            width: 400,
            bgcolor: "#F7F7F7",
            height: "70px",
            borderRadius: "35px",
          }}
        >
          <InputBase
            sx={{ ml: 3, flex: 1 }}
            placeholder="Enter Your Mail"
            inputProps={{ '"Ubuntu", sans-serif': "Enter Your Mail" }}
          />
          <IconButton
            type="button"
            sx={{
                position: "relative",
                marginTop:"3px",
                left: "5px",
              height: "63px",
              bgcolor: "#fbd103",
              width: "65px",
              ":hover": { 
                backgroundColor: "#fbd103"
              }
            }}
            aria-label="search"
          >
            <TbSend  className="text-3xl" />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
      </div>
    </>
  );
}
