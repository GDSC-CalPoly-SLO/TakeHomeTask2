let num = 1
const tags = document.getElementById("container-tags");
const addBtn = document.getElementById("addBtn");
const delBtn = document.getElementById("delBtn");

addBtn.addEventListener("click", () => {
  tags.insertBefore(createTag(), tags.children[tags.children.length - 2]);
})

delBtn.addEventListener("click", () => {
  tags.removeChild(tags.children[tags.children.length - 3]);
})

createTag = () => {
  let tag = document.createElement("p");
  let text = document.createTextNode("Tag " + num);
  tag.appendChild(text);
  tag.classList.add("tag");
  num *= 2;
  return tag;
}