import React,{Fragment} from "react";
import CauseTemplate from "./CauseTemplate";

const CauseList =(props)=>{
    console.log(props);

    const renderCauseList = props.causes.map((cause) => {
        return(
            <CauseTemplate cause={cause}></CauseTemplate>
        )
    })
    return(
        <Fragment>
            <div className="ui celled list">
            {renderCauseList}
        </div>
        <div>
            <a href="/">
            <button className="ui button red"> Home </button>
            </a>    
        </div>
        </Fragment>
        
    );
};
export default CauseList;