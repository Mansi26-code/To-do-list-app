// let btn=document.querySelector("button");
// let inp=document.querySelector("input");
// let ul=document.querySelector("ul");


// btn.addEventListener("click",function()
// {

//     let dltbtn=document.createElement("button");
//     dltbtn.innerText="Delete";
//     dltbtn.classList.add("delete");

//     if(inp.value==='')
//     {
//         alert("Tou must write something!");
//         return;
//     }
//     else{
//     let item=document.createElement("li");
    
//     item.innerText=inp.value;
//     item.appendChild(dltbtn);
//     ul.appendChild(item);
//     }
//     inp.value=" ";
//     saveData();
    



// let dltbtns=document.querySelectorAll(".delete");
// for(dltbtn of dltbtns)
// {
// dltbtn.addEventListener("click",function()

   
//     {
//         let par=this.parentElement;
//         par.remove();
//         saveData();
      
    
// })
// }
// });

// ul.addEventListener("click",function(e)
// {
//     if(e.target.tagName==="LI")
//     {
//         e.target.classList.toggle("checked");
//         saveData();
//     }
// },false);

// function saveData()
// {
//     localStorage.setItem("data",ul.innerHTML);
// }

// function showTask(){
//     ul.innerHTML=localStorage.getItem("data");
// }
// showTask();



let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let imgDropdown = document.getElementById("imgDropdown"); // Assuming you have an element with the id "imgDropdown"

btn.addEventListener("click", function () {
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("delete");

    if (inp.value === '') {
        alert("You must write something!");
        return;
    } else {
        let item = document.createElement("li");

        item.innerText = inp.value;
        item.appendChild(dltbtn);
        ul.appendChild(item);
    }
    inp.value = " ";
    saveData();

    let dltbtns = document.querySelectorAll(".delete");
    for (dltbtn of dltbtns) {
        dltbtn.addEventListener("click", function () {
            let par = this.parentElement;
            par.remove();
            saveData();
        });
    }
});

ul.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
        checkAllTasks();
    }
}, false);

function checkAllTasks() {
    let allTasks = document.querySelectorAll("li");
    let allChecked = true;

    allTasks.forEach(task => {
        if (!task.classList.contains("checked")) {
            allChecked = false;
        }
    });

    if (allChecked) {
        // Display the image dropdown or perform any other action
        body.style.backgroundImage=url("checked.png");
    } 
}

function saveData() {
    localStorage.setItem("data", ul.innerHTML);
}

function showTask() {
    ul.innerHTML = localStorage.getItem("data");
    checkAllTasks();
}
showTask();
