import React, { useState } from "react";
import axios from "axios";
// import store from "./Redux/Store";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Age } from "./Action/action";

function Api(props: any) {
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [nerr, setnErr] = useState("");
  const [derr, setdErr] = useState("");

  const onname = (e: any) => {
    setname(e.target.value);
  };

  const ondate = (e: any) => {
    const Datee = new Date(e.target.value);
    const dob = (Datee.toLocaleDateString("en-GB") as any)?.replaceAll(
      "/",
      "-"
    );
    setdate(dob);
  };

  async function Click() {
    if (name === "") {
      setnErr("Enter your name");
    } else if (date === "") {
      setdErr("Enter your date of birth");
    } else if (name.length < 3) {
      setnErr("Name should be minimum 3 character");
    } else {
      const API =
        "https://cors-anywhere.herokuapp.com/https://backend-for-test-1.herokuapp.com/age";

      const response = await axios.post(API, {
        name: name,
        dateOfBirth: date,
      });
      const result = await response.data;

      props.Age(result);
      // store.dispatch({
      //   type: "USER",
      //   payload: result,
      // });
      console.log("result", result);
    }
  }

  return (
    <div className="Api">
      <h1>
        <i>Age Calculator</i>
      </h1>
      <br />

      <form
        style={{
          width: "40%",
          marginLeft: "30%",
          border: "2px solid pink",
        }}
      >
        <TextField
          label="Name"
          id="namee"
          onChange={(e) => onname(e)}
          style={{
            width: "90%",
            margin: "3%",
          }}
        />
        <span style={{ color: "red" }}>*{nerr}</span>

        <TextField
          type="date"
          id="datt"
          onChange={(e) => ondate(e)}
          style={{
            width: "90%",
            margin: "3%",
          }}
        />
        <span style={{ color: "red" }}>*{derr}</span>

        <br />
        <br />
        <Button variant="contained" color="primary" id="btt" onClick={Click}>
          POST
        </Button>
        <br />
        <br />
      </form>

      <TableContainer
        component={Paper}
        style={{ margin: "5%", marginLeft: "15%", width: "70%" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontSize: "29px",
                  fontFamily: "bold",
                  color: "purple",
                }}
                align="center"
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  fontSize: "29px",
                  fontFamily: "bold",
                  color: "purple",
                }}
                align="center"
              >
                Age
              </TableCell>
              <TableCell
                style={{
                  fontSize: "29px",
                  fontFamily: "bold",
                  color: "purple",
                }}
                align="center"
                colSpan={4}
              >
                Color
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.storeData.map((item: any, i: any) => {
              return (
                <TableRow key={i}>
                  <TableCell
                    style={{ color: item.color.label }}
                    component="th"
                    scope="row"
                  >
                    {item.name}
                  </TableCell>
                  <TableCell style={{ color: item.color.label }} align="center">
                    {item.age}
                  </TableCell>
                  <TableCell align="center" style={{ color: item.color.label }}>
                    {item.color.label}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ color: item.color.primary }}
                  >
                    {item.color.primary}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ color: item.color.primaryDark }}
                  >
                    {item.color.primaryDark}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ color: item.color.primaryLight }}
                  >
                    {item.color.primaryLight}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default connect(
  (store: any) => {
    return {
      storeData: store.userReducer.userInformation,
    };
  },
  { Age }
)(Api);
