function PostSummaryItem(post) {
    return(`
        <li class="list-group-item">
            <div class="row p-1">
              <div class="col-10">
                <p class="mb-0 text-secondary">
                  ${post.topic}
                </p>
                <div class="d-flex">
                  <p class="fw-bold mb-0">${post.userName}</p>
                  <i class="fas fa-check-circle ms-2 mt-1 white"></i>
                  <p class="text-secondary ps-2 mb-0">- ${post.time}</p>
                </div>
                <p class="fw-bold mb-0">
                  ${post.title}
                </p>
              </div>
              <div class="col-2 p-0">
                <img class="w-100 h-auto rounded" style="float:right" src="${post.image}">
              </div>
            </div>
        </li>
    `)
}
export default PostSummaryItem;