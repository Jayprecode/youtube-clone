import React from "react"
import "./HeaderButtons.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";


function HeaderButtons() {
    const useStyles = makeStyles({
        next: {
            position: "absolute",
            left: "97%",
            color: "white",
            // @ts-ignore
            zIndex: "10",
            top: "19px",
            fontSize:"10px",
        }
    })
    const classes = useStyles();
    return (
      <>
        <div className="recommendedVideoButtons">
          <button className=" btn selected">All</button>
          <button className=" btn">Lo-fi music</button>
          <button className=" btn">CSS</button>
          <button className=" btn">React</button>
          <button className=" btn">Adobe XD</button>
          <button className=" btn">Javascript</button>
          <button className=" btn">Gary V</button>
          <button className=" btn">Coding music</button>
          <button className=" btn">Tesla, Inc.</button>
          <button className=" btn">Andela</button>
          <button className=" btn">DEFCON</button>
          <button className=" btn">Git</button>
          <ArrowForwardIosIcon className={classes.next} />
          <div className="button_faderight" />
        </div>
      </>
    );
}

export default HeaderButtons
