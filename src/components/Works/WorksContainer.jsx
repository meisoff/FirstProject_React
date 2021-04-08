import React from 'react';
import Works from "./Works";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        works: state.worksList,
    }
}

const WorksContainer = connect(mapStateToProps)(Works);

export default WorksContainer;