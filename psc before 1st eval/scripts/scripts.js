document.querySelector("#student_form").addEventListener("submit", addDataToStore);
var arr = JSON.parse(localStorage.getItem("data")) || [];

function Product(n, c, i, u, b) {
    this.name = n;
    this.course = c;
    this.image = i;
    this.unit = u;
    this.batch = b;
}

function addDataToStore() {
    event.preventDefault();

    let form = document.querySelector("form");

    let name = form.student_name.value;
    let batch = form.student_batch.value;
    let image = form.student_image.value;
    let unit = form.student_unit.value;
    let course = form.student_course.vale;

    console.log(name, batch, image, unit, course);

    let Addsdata = new Product(name, batch, image, unit, course);
    arr.push(Addsdata);

    localStorage.setItem("data", JSON.stringify(arr));
    window.location.reload();
}