const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompTodo(inputText);
};

const createIncompTodo = (todo) => {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list__row";

  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  const compBtn = document.createElement("button");
  compBtn.innerText = "完了";
  compBtn.className = "btn";
  compBtn.addEventListener("click", () => {
    const moveTarget = compBtn.closest("li");
    compBtn.nextElementSibling.remove();
    compBtn.remove();
    // backBtn戻すボタン
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.className = "btn";
    backBtn.addEventListener("click", () => {
      const todoText = backBtn.previousElementSibling.innerText;
      createIncompTodo(todoText);
      backBtn.closest("li").remove();
    });
    moveTarget.firstElementChild.appendChild(backBtn);
    document.getElementById("out__comp-list").appendChild(moveTarget);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.className = "btn";
  deleteBtn.addEventListener("click", () => {
    const deleteTarget = deleteBtn.closest("li");
    document.getElementById("in__comp-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(compBtn);
  div.appendChild(deleteBtn);
  li.appendChild(div);

  document.getElementById("in__comp-list").appendChild(li);
};
document.getElementById("add-btn").addEventListener("click", onClickAdd);
