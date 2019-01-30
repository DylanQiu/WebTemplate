document.querySelector("#date").textContent = new Date().toLocaleDateString();
// var lis = document.querySelectorAll("li");
//
// for (var i=0; i<lis.length; i++) {
//     lis[i].addEventListener("mouseover", function(){
//         this.classList.add("selected");
//     });
//     lis[i].addEventListener("mouseout", function(){
//         this.classList.remove("selected");
//     });
//     // lis[i].addEventListener("click", function(){
//     //     this.classList.toggle("done");
//     // });
// }

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);

list.addEventListener('mouseover', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('selected');
  }
}, false);

list.addEventListener('mouseout', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.remove('selected');
  }
}, false);



function addTodo() {
    var entry = document.createElement("li");
    var inputValue = document.getElementById("newTodo").value;
    entry.appendChild(document.createTextNode(inputValue));
    document.getElementById("todolist").append(entry);
    document.getElementById("newTodo").value = "";
}

// firstLI.addEventListener("mouseover", function(){
//     firstLI.style.color = "green";
// });
//
// firstLI.addEventListener("mouseout", function(){
//     firstLI.style.color = "black";
// });
