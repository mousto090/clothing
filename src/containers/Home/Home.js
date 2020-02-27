import React from "react";
import Menu from "../../components/Menu/Menu";
import classes from "./Home.module.scss";

const Home = ()=> {
    return (
        <div className={classes.home}>
            <Menu/>
        </div>
    );
}


export default Home;