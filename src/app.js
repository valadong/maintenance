import "./style.css";
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector(".modalContent");

const table = document.getElementById("resizeMe");
const tbody = document.querySelector("tbody");
// Query all headers
const cols = table.querySelectorAll("th");

// // let x, y, w, h;
// // table.addEventListener("mousedown", (e) => {
// //   e.preventDefault();
// //   console.log(e.target.tagName);
// //   const style = window.getComputedStyle(e.target);
// //   x = e.clientX;
// //   y = e.clientY;
// //   w = parseInt(style.width, 10);
// //   h = parseInt(style.height, 10);
// //   console.log(style.width);
// //   console.log(x, y, w, h);
// //   console.log(e.target);
// //   table.addEventListener("mousemove", mouseMove);
// //   table.addEventListener("mouseup", mouseUp);
// // });
// // function mouseMove(e) {
// //   const dx = e.clientX - x;
// //   //const dy = e.clientY - y;
// //   console.log(`mouseMove => dx: ${dx}, clientX:${e.clientX},x:${x} `);
// //   e.target.style.width = `${w + dx}px`;
// //   //reSizeUnit.style.height = `${h + dy}px`;
// //   console.log(`resizeWidth ${e.target.style.width}, ${e.target.style.heigth}`);
// // }

// // function mouseUp() {
// //   table.removeEventListener("mousemove", mouseMove);
// //   table.removeEventListener("mouseup", mouseUp);
// // }
// // h1.addEventListener("click", (e) => {
// //   e.preventDefault();

// //   modal.style.display = "block";
// //   h1.innerHTML = "ecnanetniaM";
// //   modal.addEventListener("click", (e) => {
// //     e.preventDefault();
// //     // if (e.target.tagName === "BUTTON") {
// //     //   modal.style.display = "none";
// //     // }
// //     if (e.target.classList.value === "save") {
// //       console.log(modal.children[0].children[0].value);
// //       modal.style.display = "none";
// //       console.log("save");
// //     } else if (e.target.tagName === "BUTTON") {
// //       modal.style.display = "none";
// //       console.log("un");
// //     }
// //   });
// // });

// console.log(h1.textContent);
// const h2 = document.createElement("h2");
// const h3 = document.querySelector("h3");
// h2.textContent = "h2";
// body.prepend(h2);

// h3.addEventListener("click", (e) => {
//   e.preventDefault();
//   h2.classList.toggle("vision");
// });
// const fragment = new DocumentFragment();
// const tr = document.createElement("tr");
// const td = document.createElement("td");
// td.textContent = "hell";
// tr.appendChild(td);
// fragment.appendChild(tr);
// tbody.appendChild(fragment);

// const h4 = document.querySelector("h4");
// const startDate = "1617235200000";
// h4.textContent = Math.floor((Date.now() - startDate) / 86400000) + " ago";
// // function reNam(select, name) {
// //   const rename = document.querySelector(select);
// //   const dataSet = rename.dataset.mainName;

// //   console.log(dataSet);
// // }
// // const div = document.createElement("div");
// // div.innerHTML = `<div id="modal">
// // <div class="modalContent">
// // <input type="text" placeholder="name" value="name" />
// // <br />
// // <button>save</button>
// // <button>cancel</button>
// // </div>
// // </div>`;
// // body.appendChild(div);

// // const inputTest = document.querySelector("#inputTest");
// // document.body.addEventListener("click", (e) => {
// //   if (e.target.tagName === "BUTTON") {
// //     console.log(inputTest.value);
// //   }
// // });
// window.onload = function () {
//   (function () {
//     var col_element,
//       next_element,
//       cursorStart = 0,
//       dragStart = false,
//       width,
//       height,
//       th_width,
//       next_width = undefined,
//       next_height,
//       resize,
//       resize_left,
//       table_wt,
//       resizeCheck;
//     var container = document.getElementById("container"),
//       table = document.getElementById("table_resize"),
//       table_th = table.getElementsByTagName("th"),
//       bodyRect = document.body.getBoundingClientRect();

//     container.style.position = "relative";

//     function mouseDown() {
//       resize = this;
//       resizeCheck = resize.classList.contains("y_resize");
//       var col_index = parseInt(resize.getAttribute("data-resizecol")) - 1;
//       col_element = table_th[col_index];
//       next_element = table_th[col_index + 1];
//       dragStart = true;
//       cursorStart = resizeCheck ? event.pageX : event.pageY;
//       var elm_bound = col_element.getBoundingClientRect();
//       width = elm_bound.width;
//       table_wt = table.offsetWidth;
//       if (next_element != undefined) {
//         var next_bound = next_element.getBoundingClientRect();
//         next_width = next_bound.width;
//       }
//       resize_left = this.getBoundingClientRect().left - bodyRect.left;
//     }
//     function mouseMove() {
//       if (dragStart) {
//         var cursorPosition = resizeCheck ? event.pageX : event.pageY;
//         var mouseMoved = cursorPosition - cursorStart;
//         var newLeft = resize_left + mouseMoved;
//         var newWidth = width + mouseMoved;
//         var new_nextWidth, new_nextHeight;
//         if (next_element != undefined) {
//           new_nextWidth = next_width - mouseMoved;
//         }
//         if (
//           newWidth > 30 &&
//           (new_nextWidth > 30 || next_element == undefined)
//         ) {
//           col_element.style.cssText = "width: " + newWidth + "px;";
//           if (next_element != undefined) {
//             next_element.style.cssText = "width: " + new_nextWidth + "px";
//           } else {
//             table.style.width = table_wt + mouseMoved + "px";
//           }
//           resize.style.cssText = "left: " + newLeft + "px;";
//         }
//       }
//     }
//     function mouseUp() {
//       if (dragStart) {
//         dragStart = false;
//       }
//     }
//     function initEvents(table_th) {
//       var tb_resize = container.getElementsByClassName("tb_resize");
//       var th_length = table_th.length;
//       for (var i = 0; i < th_length; i++) {
//         document.body.addEventListener("mousemove", mouseMove);
//         tb_resize[i].addEventListener("mousedown", mouseDown);
//         tb_resize[i].addEventListener("mouseup", mouseUp);
//         table_th[i].style.width = th_width + "px";
//       }
//     }
//     function setTdWidth() {
//       var elm_bound = table.getBoundingClientRect();
//       var table_wt = elm_bound.width;
//       var th_length = table_th.length;
//       th_width = table_wt / th_length;
//     }
//     function createResizeDiv() {
//       var cont = document.getElementById("container");
//       var th_length = table_th.length;
//       for (var i = 1; i <= th_length; i++) {
//         var yDiv = document.createElement("div");
//         yDiv.className = "y_resize tb_resize";
//         yDiv.setAttribute("data-resizecol", i);
//         var leftPos = i * th_width + 0.5;
//         yDiv.style.cssText = "left: " + leftPos + "px;";
//         cont.append(yDiv);
//       }
//     }

//     setTdWidth(table);
//     createResizeDiv();
//     initEvents(table_th);
//   })();
// };
