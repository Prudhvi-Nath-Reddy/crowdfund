import React from "react";

class AddCause extends React.Component{
    render() {
        return(
            <div className="ui main">
                <h2>Add Cause</h2>
                <form className="ui form">
                    <div className="field">
                        <label>
                            Cause Name
                        </label>
                        <input type="text" name="name" placeholder="Name"/>

                    </div>
                    <div className="field">
                        <label>
                            Description
                        </label>
                        <input type="text" name="name" placeholder="Write some info"/>
                        
                    </div>
                    <button className="ui button red">Add Cause</button>
                </form>
            </div>
        )
    };
}
export default AddCause;