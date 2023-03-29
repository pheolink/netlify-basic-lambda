const getUsers = async () => {
  const res = await fetch("/getusers");
  const { users } = await res.json();

  users.forEach((user) => {
    const list = document.createElement("li");
    list.className = "list-group-item";

    const link = document.createElement("a");
    link.appendChild(document.createTextNode(user.login));
    link.href = user.html_url;
    link.target = "_blank";

    list.appendChild(link);
    document.getElementById("users").appendChild(list);
  });
};

getUsers();
