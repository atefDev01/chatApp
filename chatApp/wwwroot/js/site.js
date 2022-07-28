var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();


//client side
connection.on("ReceiveMessage", function (fromUser, messgae) {
    var msg = fromUser + ": " + messgae;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li);
});

connection.start();

//server
$("#btnSend").on("click", function () {
    var fromUser = $("#txtUser").val();
    var message = $("#txtMessage").val();

    connection.invoke("sendMessage", fromUser, message);
});