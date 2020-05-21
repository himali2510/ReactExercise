import React from 'react';
//Get Country and city value from user
const FormComponent = props => {
    return (
        <div className="container" >
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.LoadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input
                            type="text"
                            name="Country"
                            className="form-control"
                            autoComplete="off"
                            placeholder="Country"
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            name="City"
                            className="form-control"
                            autoComplete="off"
                            placeholder="City"
                        />
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning" type="submit">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>

    );

}
//Show Message when error occurs
function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Provide Valid values of City and Country
        </div>
    );
}

export default FormComponent;