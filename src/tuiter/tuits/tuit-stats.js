import React, {useEffect} from "react";
import {updateTuitThunk}
    from "../../services/tuits-thunks";
import {useDispatch, useSelector} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateTuitThunk());
    }, [])
    return(
        <div className="row">
            <div className="col-3 row">
                <div className="col-6">
                    <i className="fa-solid fa-comment pe-2 text-black"></i>
                </div>
                <div className="col-6 p-0">
                    {tuit.replies}
                </div>
            </div>
            <div className="col-3 row ps-0">
                <div className="col-6">
                    <i className="fa-solid fa-retweet pe-2"></i>
                </div>
                <div className="col-6 p-0">
                    {tuit.retuits}
                </div>
            </div>
            <div className="col-2 row">
                <div className="col-6 float-start p-0">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1
                    }))} className="bi bi-heart-fill me-2 text-danger"></i>
                </div>
                <div className="col-6 float-end ps-0">
                    {tuit.likes}
                </div>
            </div>
            <div className="col-2 row">
                <div className="col-6 float-end p-0">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes + 1
                    }))} className="fa-solid fa-thumbs-down me-2"></i>
                </div>
                <div className="col-6 p-0">
                    {tuit.dislikes}
                </div>
            </div>
            <div className="col-2 row">
                <div className="col-3 row">
                    <i className="fa-solid fa-share pb-0"></i>
                </div>
            </div>

        </div>
    );
};
export default TuitStats;