import React from "react";

const CauseTemplate = (props) => {
    const {id,name,Description} = props.cause;
    return(
        <div className="item">
                <div className="content">
                    <div className="header">
                        {
                           name 
                        }
                    </div>
                    <div className="header">
                        {
                           Description 
                        }
                    </div>
                    <button className="ui button red">Donate</button>
                </div>
            </div>
    );
};

export default CauseTemplate