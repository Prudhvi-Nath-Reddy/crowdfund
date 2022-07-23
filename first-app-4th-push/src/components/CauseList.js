import React from "react";
import CauseTemplate from "./CauseTemplate";

const CauseList =(props)=>{
    console.log(props);

    const renderCauseList = props.causes.map((cause) => {
        return(
            <CauseTemplate cause={cause}></CauseTemplate>
        )
    })
    return(
        <div className="ui celled list">
            {renderCauseList}
        </div>
    );
};
export default CauseList;