import React, {useEffect} from "react";
import {updateTuitThunk}
    from "../../services/tuits-thunks";
import {useDispatch, useSelector} from "react-redux";

const TuitStats = (tuit) => {
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
                <div className="col-6 float-start p-0">
                    {/*<button onClick={() => console.log('test')}*/}
                    {/*   className="bi bi-heart-fill me-2 text-danger"/>*/}
                    { console.log(tuit.tuits.likes) }
                    <button onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.tuits.likes + 1
                    }))} className="bi bi-heart-fill me-2 text-danger"></button>
                    { console.log(tuit.tuits.likes) }
                </div>
                <div className="col-6 float-end">
                    {tuit.tuits.likes}
                </div>
                {/* DISLIKES????? */}
                {/*    Link to*/}
                {/*    const updates = {*/}
                {/*    ...post,*/}
                {/*    likes: post.likes + 1,*/}
                {/*    liked: true*/}
                {/*};*/}
                {/*    dispatch(updateTuitThunk(updates));*/}
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