import posts from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = (post) => {
    return (`
        <ul class="list-group">
            ${
        post.map(p => {
            return(PostSummaryItem(p));
        }).join('')
    }
        </ul>
    `);
}

$('#wd-post').append(`
   <div class="container">
       ${PostSummaryList(posts)}
   </div>
`);

export default PostSummaryList;

