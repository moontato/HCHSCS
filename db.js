document.addEventListener("DOMContentLoaded",()=>{

  studentTable = document.getElementById("studentTable")
  let firebaseRef = firebase.database().ref()

  // Attach an asynchronous callback to read the data at our posts reference
  firebaseRef.on("value", function (snapshot) {
  
      // Setting firebase data to a variable called "data"
      data = snapshot.val()
  
      dataArray = []
  
      idArray = Object.keys(data)
      dataArrayValues = Object.values(data)

      for (i = 0; i < idArray.length; i++) {
        $("#studentTable tbody").append("<tr>" + 
        `<td>${idArray[i]}</td>` +
        `<td>${dataArrayValues[i].name.split(" ")[0]}</td>` +
        `<td>${dataArrayValues[i].name.split(" ")[1]}</td>` +
        `<td>${dataArrayValues[i].email}</td>` +
        `<td>${dataArrayValues[i].subscription}</td>` + 
        "</tr>");
      }
      
  }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
  });

})
