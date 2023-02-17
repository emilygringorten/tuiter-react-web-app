
const NavigationSidebar = () => {
    return (`
    <ul class="list-group pt-3 d-none d-lg-none d-xl-block d-xxl-block">
      <li class="list-group-item"><i class="p-1 fab fa-twitter"></i></li>
      <li class="list-group-item"><i class="p-1 fa fa-home"></i>Home</li>
      <li class="list-group-item active"><i class="p-1 fa fa-hashtag"></i>Explore</li>
      <li class="list-group-item"><i class="p-1 fa fa-bell"></i>Notifications</li>
      <li class="list-group-item"><i class="p-1 fa fa-envelope"></i>Messages</li>
      <li class="list-group-item"><i class="p-1 fa fa-bookmark"></i>Bookmarks</li>
      <li class="list-group-item"><i class="p-1 fa fa-list"></i>Lists</li>
      <li class="list-group-item"><i class="p-1 fa fa-user"></i>Profile</li>
      <li class="list-group-item"><i class="p-1 fa fa-ellipsis-h"></i>More</li>
      <div class="pt-2">
        <button type="submit" class="btn btn-primary rounded-pill w-100">Tweet</button>
      </div>
    </ul>
    <ul class="list-group pt-3 d-block d-lg-block d-xl-none">
      <li class="list-group-item"><i class="p-1 fab fa-twitter"></i></li>
      <li class="list-group-item"><i class="p-1 fa fa-home"></i></li>
      <li class="list-group-item active"><i class="p-1 fa fa-hashtag"></i></li>
      <li class="list-group-item"><i class="p-1 fa fa-bell"></i></li>
      <li class="list-group-item"><i class="p-1 fa fa-envelope"></i></li>
      <li class="list-group-item"><i class="p-1 fa fa-bookmark"></i></li>
      <li class="list-group-item"><i class="p-1 fa fa-list"></i></li>
      <li class="list-group-item"><i class="p-1 fa fa-user"></i></li>
      <li class="list-group-item"><i class="p-1 fa fa-ellipsis-h"></i></li>
      <div class="pt-2">
        <button type="submit" class="btn btn-primary rounded-pill ms-auto w-100">
        <span class="position-relative" style="right:10px">
        Tweet
        </span></button>
      </div>
    </ul>
   `);
}

// $('#wd-left').append(`
//    <div class="container">
//        ${NavigationSidebar()}
//    </div>
// `);

export default NavigationSidebar;