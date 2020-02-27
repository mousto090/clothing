import React from "react";
import Menu from "../../components/Menu/Menu";
import classes from "./Home.module.scss";

const Home = (props)=> {
    console.log(props);
    
    return (
        <div className={classes.home}>
            <Menu/>
        </div>
    );
}


export default Home;