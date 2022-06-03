"use strict";

////var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

//////Disable send button until connection is established
////document.getElementById("sendButton").disabled = true;

////connection.on("ReceiveMessage", function (user, message) {
////    var li = document.createElement("li");
////    document.getElementById("messagesList").appendChild(li);
////    // We can assign user-supplied strings to an element's textContent because it
////    // is not interpreted as markup. If you're assigning in any other way, you 
////    // should be aware of possible script injection concerns.
////    li.textContent = `${user} says ${message}`;
////});

////connection.start().then(function () {
////    document.getElementById("sendButton").disabled = false;
////}).catch(function (err) {
////    return console.error(err.toString());
////});

////document.getElementById("sendButton").addEventListener("click", function (event) {
////    var user = document.getElementById("userInput").value;
////    var message = document.getElementById("messageInput").value;
////    connection.invoke("SendMessage", user, message).catch(function (err) {
////        return console.error(err.toString());
////    });
////    event.preventDefault();
////});
let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

socket.onopen = function (e) {
    //alert("[open] Connection established");
    //alert("Sending to server");
    //socket.send("My name is John");
    document.getElementById("status").innerHTML = "online";
    document.getElementById("status").classList.remove("btn-danger");
    document.getElementById("status").classList.add("btn-success");
};

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();


connection.on("ReceiveMessage", function (user, message) {
    console.log("test");
    let li = `<li class="list-group" style="">
                    <b>${user}</b>
                    <p style="color:black;">${message}</p>
                </li>`;
    document.getElementById("MessageBox").innerHTML += li;

   

});

connection.onopen = function () {
    $("#status").css("color", "green");
    console.log("alo")
}
connection.start().then(function () {
    if (localStorage.getItem("user")) {
        toBeOrNotToBe();
    }
    let user = JSON.parse(localStorage.getItem("user"));

    connection.invoke("AddGroupAsync", user.group);


}).catch(function (err) {
    return console.error(err.toString());
});


let eneterGroupForm = document.getElementById("eneterGroupForm");
let leaveGroupButton = document.getElementById("leaveGroupButton");
let sendMessageForm = document.getElementById("sendMessageForm");

eneterGroupForm.addEventListener("submit", function (ev) {

    ev.preventDefault();
    let user =
    {
        username: document.getElementById("userName").value,
        group: document.getElementById("group").value
    }
    localStorage.setItem("user", JSON.stringify(user));
    toBeOrNotToBe();
    connection.invoke("AddGroupAsync", user.group);

})
leaveGroupButton.addEventListener("click", function () {
    localStorage.removeItem("user");
    document.getElementById("joinArea").classList.remove("d-none");
    document.getElementById("messageArea").classList.add("d-none");
    let user = JSON.parse(localStorage.getItem("user"));
    connection.invoke("RemoveGroupAsync", user.group)
})
function toBeOrNotToBe() {
    document.getElementById("messageArea").classList.remove("d-none")
    document.getElementById("joinArea").classList.add("d-none")

}
sendMessageForm.addEventListener("submit", function (ev) {
    (ev).preventDefault();
    let message = document.querySelector("textarea").value;
    let user = JSON.parse(localStorage.getItem("user"));
    connection.invoke("SendMessage", user.username, message, user.group);
   

    document.querySelector("textarea").value = "";

})


