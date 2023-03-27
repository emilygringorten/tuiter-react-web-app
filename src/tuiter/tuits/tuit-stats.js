import React from "react";

const TuitStats = (tuit) => {
    return(
        <div className="row">
            <div className="col-3 row">
                <div className="col-6">
                    <i className="fa-solid fa-comment pe-2 text-black"></i>
                </div>
                <div className="col-6 p-0">
                    {tuit.tuits.replies}
                </div>
            </div>
            <div className="col-3 row">
                <div className="col-6">
                    <i className="fa-solid fa-retweet pe-2"></i>
                </div>
                <div className="col-6 p-0">
                    {tuit.tuits.retuits}
                </div>
            </div>
            <div className="col-3 row">
                <div className="col-6 float-end">
                    <i className="fa-solid fa-heart pe-2"></i>
                </div>
                <div className="col-6 float-start p-0">
                    {tuit.tuits.likes}
                </div>
            </div>
            <div className="col-3 row">
                <div className="col-3 row">
                    <i className="fa-solid fa-share pb-0"></i>
                </div>
            </div>

        </div>
    );
};
export default TuitStats;