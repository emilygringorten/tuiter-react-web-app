function WhoToFollowListItem(who) {
    return(`
        <li class="list-group-item">
            <div class="row">
              <div class="col col-2">
                <img class="rounded-circle h-auto rounded-circle ms-2 me-2 w-100" src=${who.avatarIcon}>
              </div>
              <div class="col-7 p-0 ps-2 ps-lg-2 ps-xl-0 pt-1">
                <div class="d-flex">
                  <p class="fw-bold mb-0">${who.userName}<i class="fas fa-check-circle ms-2 mt-1 white"></i></p>
                </div>
                <p class="m-0 position-relative">${who.handle}</p>
              </div>
              <div class="col-3 p-0">
                <button type="submit" class="btn btn-primary rounded-pill">Follow</button>
              </div>
            </div>
        </li>
    `)
}
export default WhoToFollowListItem;