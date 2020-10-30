document.addEventListener("DOMContentLoaded",()=>{
  // deleteAllCookies()


// Variables and Array for getting and saving checkbox values
  checkbox1 = document.getElementById("checkbox1")
  checkbox2 = document.getElementById("checkbox2")
  checkboxes = ["checkbox1","checkbox2"]
  checkboxValueArray = [false,false]

  // When checkbox1 is clicked, save it's value as a position
  checkbox1.addEventListener("click",()=>{
    checkboxValueArray[0] = checkbox1.checked
    document.cookie = `checkbox1=${checkboxValueArray[0]}`
  })

  checkbox2.addEventListener("click",()=>{
    checkboxValueArray[1] = checkbox2.checked
    document.cookie = `checkbox2=${checkboxValueArray[1]}`
  })

  // Check cookies to see if there's progress, and if there is, resume where they left off
  cookie = document.cookie
  checkboxdict = {}
  for(let i = 0; i < checkboxValueArray.length; i++){
    cookie = cookie.replace(" ", "")
  }

  cookieArray = cookie.split(";")
  for(let i = 0; i < cookieArray.length; i++){
    if(cookieArray[i].substr(0,9) == "checkbox1"){
      cookieKey = cookieArray[i].substr(0,9)
      cookieValue = cookieArray[i].substr(10)
      checkboxdict[cookieKey] = cookieValue
    }
    else if(cookieArray[i].substr(0,9) == "checkbox2"){
      cookieKey = cookieArray[i].substr(0,9)
      cookieValue = cookieArray[i].substr(10)
      checkboxdict[cookieKey] = cookieValue
    }
  }


  if(cookieArray.size != 0){
    // For checkbox 1
    checkboxState = checkboxdict["checkbox1"]
    if(checkboxState == "true"){
      checkbox1.checked = 1
    }
    else{
      checkbox1.checked = 0
    }

    // For checkbox 2
    checkboxState = checkboxdict["checkbox2"]
    if(checkboxState == "true"){
      checkbox2.checked = 1
    }
    else{
      checkbox2.checked = 0
    }
  }

  let firebaseRef = firebase.database().ref()

  document.getElementById("submitButton").addEventListener("click",()=>{
    name = `${document.getElementById("firstName").value} ${document.getElementById("lastName").value}`
    email = document.getElementById("email").value
    idNum = document.getElementById("idNum").value
    subscription = document.getElementById("subscription").checked

    firebaseRef.child(idNum).set({"name":name,"email": email, "subscription": subscription,})
  })

  // Redirect after clicking link button and enable checkbox 
  document.getElementById("linkButton1").addEventListener("click",()=>{
    window.open("https://www.google.com")
    checkbox1.disabled = false
  })

  document.getElementById("linkButton2").addEventListener("click",()=>{
    window.open("https://www.youtube.com")
    checkbox2.disabled = false
  })



  // Save all cookies after submission
  // for(let i = 0; i < checkboxes.length; i++){
  //   document.cookie = `checkbox${i}=${checkboxValueArray[i]}`
  // }


  // Delete all cookies
  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
})

// Adding more checkboxes (Replace CHECKBOXNAME with checkbox variable)
// Add this to the "if cookie array size is not equal to zero" function. (Line 44)

// checkboxState = checkboxdict["CHECKBOXNAME"]
// if(checkboxState == "true"){
//   CHECKBOXNAME.checked = 1
// }
// else{
//   CHECKBOXNAME.checked = 0
// }




// Add new checkbox variable name in this array above (Line 8)

// checkboxes = ["checkbox1","checkbox2","CHECKBOXNAME"]




// Add a new "false" boolean to this array above (Line 9)

// checkboxValueArray = [false,false]



// Add a new event listener and change the index to the checkbox name value (eg. checkbox2 is going to use index 1 and checkbox 3 is going to use index 2) (Line 21)
// Replace all indexes with new index

// CHECKBOXNAME.addEventListener("click",()=>{
//   checkboxValueArray[1] = CHECKBOXNAME.checked
//   document.cookie = `CHECKBOXNAME=${checkboxValueArray[1]}`
// })



// Add a new checkbox name to this function and place it in the for function (Line 30)

// else if(cookieArray[i].substr(0,9) == "CHECKBOXNAME"){
//   cookieKey = cookieArray[i].substr(0,9)
//   cookieValue = cookieArray[i].substr(10)
//   checkboxdict[cookieKey] = cookieValue
// }





// Add a new event listener for link buttons and redirection (Line 85)
// Replace LINKBUTTONNUMBER with linkButton variable with it's corresponding number

// document.getElementById("LINKBUTTONNUMBER").addEventListener("click",()=>{
//   window.open("https://www.google.com")
//   CHECKBOXNAME.disabled = false
// })