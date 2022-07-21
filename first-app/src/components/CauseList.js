import React from "react";

const CauseList =(props)=>{
    console.log(props);

    const renderCauseList = props.causes.map((cause) => {
        return(
            <div className="item">
                <div className="content">
                    <div className="header">
                        {
                           cause.name 
                        }
                    </div>
                    <div className="header">
                        {
                           cause.Description 
                        }
                    </div>
                    <button className="ui button red">Donate</button>
                </div>
            </div>
        )
    })
    return(
        <div className="ui celled list">
            {renderCauseList}
        </div>
    );
};
export default CauseList;