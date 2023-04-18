let students = [
  {
    id: 1,
    Name: "Rikkei",
    Email: "Rikkei@gmail.com",
    Phone: "00000000000000000",
    Adrees: "Ha Noi",
    Gender: "Nam",
    Action: "<button>Edit</button> <button>Delete</button>",
  },
  //   {
  //     id: 2,
  //     Name: "Rikkei",
  //     Email: "Rikkei@gmail.com",
  //     Phone: "00000000000000000",
  //     Adrees: "Ha Noi",
  //     Gender: "Nam",
  //     Action: "<button>Edit</button> <button>Delete</button>",
  //   },
];
let inputElement = document.getElementById("inputttt");
console.log(inputElement);
const tbody = document.getElementById("tbody");
// console.log(tbody);
const form = document.getElementById("main-form");
form.onsubmit = function (e) {
  e.preventDefault();
  //   console.log("Hello World");
  // console.log(form.content.value);
  // console.log(form.dueDate.value);
  // console.log(form.status.value);
  // console.log(form.username.value);
  //   let check = -1;
  let student = {
    id: Math.floor(Math.random() * 1000000000),
    Name: form.Name.value,
    Email: form.Email.value,
    Phone: form.Phone.value,
    Adrees: form.Adrees.value,
    Gender: form.Gender.value,
    // Action: form.Action.value,
  };
  if (
    form.Name.value == "" ||
    form.Email.value == "" ||
    form.Phone.value == "" ||
    form.Adrees.value == "" ||
    form.Gender.value == ""
    // form.Action.value == ""
  ) {
    alert("Hay nhap du thong tin");
  } else if (form.Gender.value == "Nu") {
    alert("Giới tính: default là Nam");
  } else {
    students.push(student);
    alert("ban da them thanh cong");
  }
  renderstudents();
  //   alert("them moi mot phan tu thanh cong");
};

// render students

function renderstudents() {
  tbody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr id="="${students[i].id}">
        <td>${i + 1}</td>
        <td>${students[i].Name}</td>
        <td>${students[i].Email}</td>
        <td>${students[i].Phone}</td>
        <td>${students[i].Adrees}</td>
        <td>${students[i].Gender}</td>
        <td><button>Edit</button> <button class="btn-delete">Delete</button></td>
        <td></td>
      </tr>`;
  }
}
renderstudents();

tbody.onclick = function (e) {
  console.log(e.target);
  if (e.target.classList.contains("btn-delete")) {
    let deleteElement = e.target.parentElement.parentElement;
    console.log(deleteElement);
    deleteElement.remove();
  }
};

inputElement.oninput = function () {
  for (let i = 0; i < students.length; i++) {
    if (inputElement.value == students[i].Name.textContent) {
      students[i].Name.display == "block";
    }
  }
};
