let arr = JSON.parse(localStorage.getItem("data")) || [];

let length_ = arr.length;

let sumOfTotal = document.querySelector("#total");
sumOfTotal.innerHTML = `Number Of Students ${length_}`

arr.map(function (element, index) {
    let main_con = document.createElement("div");
    main_con.setAttribute("id", "conten");

    let img = document.createElement("img");
    img.src = element.image;
    img.setAttribute("id", "imge", 'class', "img-thumbnail");

    let name = document.createElement("p");
    name.innerHTML = element.name;

    let unit = document.createElement("p");
    unit.innerHTML = element.unit;

    let course = document.createElement("p");
    course.innerHTML = element.course;

    let batch = document.createElement("p");
    batch.innerHTML = element.batch;

    let btn = document.createElement("button");
    btn.setAttribute("id", "remove_student", 'class', 'btn btn-danger');
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
        removeItem(element, index);
    });

    main_con.append(img, name, unit, course, batch, btn);
    document.querySelector("#student_data").append(main_con);
});



function removeItem(element, index) {
    console.log(element);
    arr.pop();
    localStorage.setItem("Trash", JSON.stringify(arr));
    window.location.reload();
}