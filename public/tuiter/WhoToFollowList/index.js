import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = (who) => {
    return (`
        <ul class="list-group">
            <li class="list-group-item">
            Who to Follow
            </li>
            ${who.map(x => {
                return(WhoToFollowListItem(x));
            }).join('')
            }
         </ul>
`); }

$('#wd-who').append(`
<script>
    console.log('hello);
</script>
   <div class="container">
        <li class="list-group-item fw-bold p-1">Who to follow</li>
       ${WhoToFollowList(who)}
   </div>
`);

export default WhoToFollowList;
