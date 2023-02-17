import posts from "../PostSummaryList/posts.js"
import PostSummaryList from "../PostSummaryList/index.js";

function ExploreComponent() {
    return(`
            <div class="row">
                 <div class="col-11">
                    <i class="fa fa-search position-relative black" style=" bottom: -30px; left:15px"></i>
                    <input type="text" class="form-control ps-5 rounded-pill" placeholder="Search Twitter">
                 </div>
                 <div class="col-1 p-0">
                      <i class="fa fa-cog position-relative fa-2x" style="color: #0d6efd; top:28px"></i>
                 </div>
           </div>
            <!--  nav tabs  -->
           <ul class="nav mb-2 mt-2 nav-tabs">
              <li class="nav-item">
                <a href="for-you.html" class="nav-link active">For You</a>
              </li>
              <li class="nav-item">
                <a href="trending.html" class="nav-link">Trending</a>
              </li>
              <li class="nav-item">
                <a href="news.html" class="nav-link">News</a>
              </li>
              <li class="nav-item">
                <a href="sports.html" class="nav-link">Sports</a>
              </li>
              <li class="nav-item d-sm-none d-md-block">
                <a href="entertainment.html" class="nav-link">Entertainment</a>
              </li>
           </ul>
           <!-- image with overlaid text -->
              <div class="position-relative align-text-bottom">
                  <img class="w-100 pt-2" src="../../images/starship.png">
                  <h4>
                    <div class="position-absolute text-xl" style="bottom: 8px; left: 16px;">SpaceX's Starship</div>
                  </h4>
               </div>
        ${PostSummaryList(posts)}     
    `);
}
export default ExploreComponent;
