const tabs = document.getElementById("tabs-container");
const content = document.getElementById("content");

for (const child of tabs.children) {
  //console.log(tabs.children);
  child.addEventListener("click", (e) => {
    // Remove all the active classes
    for (let i of tabs.children) i.classList.remove("active");
    for (let c of content.children) c.classList.remove("content-active");
    // set the active class to the tab
    e.target.classList = "active";

    for (let i = 0; i <= content.children.length - 1; i++) {
      if (i == e.target.id) {
        content.children[i].classList.add("content-active");
        break;
      }
    }
  });
}
