//DEBUT SIGN UP
function signupStudent() {
  

    var firstName = document.getElementById("fName").value;
    var isfirstNameValid = isvalid(firstName, 3);
    if (isfirstNameValid == false) {
        document.getElementById("fNameError").innerHTML = "check your first name!";
    } else {
        document.getElementById("fNameError").innerHTML = "";
    }
    var lastName = document.getElementById("lName").value;
    var islastNameValid = isvalid(lastName, 4);
    if (islastNameValid == false) {
        document.getElementById("lNameError").innerHTML = "check your last name!";
    } else {
        document.getElementById("lNameError").innerHTML = "";
    }
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var isPassValid = isvalid(password, 8);
    if (isPassValid == false) {
        document.getElementById("pwdError").innerHTML = "Check your password!";
    } else {
        document.getElementById("pwdError").innerHTML = "";
    }
    var telephone = document.getElementById("tlf").value;
    var isTlfValid = isTel(telephone, 8);
    if (isTlfValid == false) {
        document.getElementById("tlfError").innerHTML = "Check your Telephone Number!";
    } else {
        document.getElementById("tlfError").innerHTML = "";
    }
    var Adresse = document.getElementById("adresse").value;
    var CIN = document.getElementById("cin").value;
    var isCinValid = isvalid(CIN, 8);
    if (isCinValid == false) {
        document.getElementById("cinError").innerHTML = "Check your CIN Number!";
    } else {
        document.getElementById("cinError").innerHTML = "";
    }
    var City = document.getElementById("city").value;
    var isCityValid = isvalid(City, 10);
    if (isCityValid == false) {
        document.getElementById("cityError").innerHTML = "Check your City!";
    } else {
        document.getElementById("cityError").innerHTML = "";
    }

   if (isfirstNameValid && islastNameValid && isPassValid && isTlfValid && isCinValid && isCityValid) {
    var usersTab = JSON.parse(localStorage.getItem("allUsers") || "[]");
    var student = {
        id: checkId(usersTab) + 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        telephone: telephone,
        Adresse: Adresse,
        CIN: CIN,
        City: City,
        role:"Student",
    }

    console.log(student);
    usersTab.push(student);
    localStorage.setItem("allUsers", JSON.stringify(usersTab));

   }

   
 

}

function signupProfessor() {
    

    var firstName = document.getElementById("fProfName").value;
    var isfirstNameValid = isvalid(firstName, 3);
    if (isfirstNameValid == false) {
        document.getElementById("fNameProfError").innerHTML = "check your first name!";
    } else {
        document.getElementById("fNameProfError").innerHTML = "";
    }
    var lastName = document.getElementById("lProfName").value;
    var islastNameValid = isvalid(lastName, 4);
    if (islastNameValid == false) {
        document.getElementById("lNameProfError").innerHTML = "check your last name!";
    } else {
        document.getElementById("lNameProfError").innerHTML = "";
    }
    var email = document.getElementById("emailProf").value;

    var password = document.getElementById("pwdProf").value;
    var isPassValid = isvalid(password, 8);
    if (isPassValid == false) {
        document.getElementById("pwdProfError").innerHTML = "Check your password!";
    } else {
        document.getElementById("pwdProfError").innerHTML = "";
    }
    var telephone = document.getElementById("tlfProf").value;
    var isTlfValid = isTel(telephone, 8);
    if (isTlfValid == false) {
        document.getElementById("tlfProfError").innerHTML = "Check your Telephone Number!";
    } else {
        document.getElementById("tlfProfError").innerHTML = "";
    }
    var Adresse = document.getElementById("adresseProf").value;

    var isAdresseValid = isvalid(Adresse, 10);
    if (isAdresseValid == false) {
        document.getElementById("adresseProfError").innerHTML = "Check your Adresse";
    } else {
        document.getElementById("adresseProfError").innerHTML = "";
    }
    var Speciality = document.getElementById("speciality").value;
    var Experience = document.getElementById("experience").value;
    var isExperienceValid = isvalid(Experience, 0);
    if (isExperienceValid == false) {
        document.getElementById("experienceError").innerHTML = "Check your Experience";
    } else {
        document.getElementById("experienceError").innerHTML = "";
    }
    
    if (isfirstNameValid && islastNameValid && isPassValid && isTlfValid && isAdresseValid && isExperienceValid ) {
        var usersTab = JSON.parse(localStorage.getItem("allUsers") || "[]");


        var professor = {
            id: checkId(usersTab) + 1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            telephone: telephone,
            Adresse: Adresse,
            Speciality: Speciality,
            Experience: Experience,
            role:"Professor",
        }
    
        console.log(professor);
        usersTab.push(professor);
        localStorage.setItem("allUsers", JSON.stringify(usersTab));  
    
    }
       
    

}


function signupAdmin() {
    
    var firstName = document.getElementById("fAdminName").value;
    var isfirstNameValid = isvalid(firstName, 3);
    if (isfirstNameValid == false) {
        document.getElementById("fNameAdminError").innerHTML = "check your first name!";
    } else {
        document.getElementById("fNameAdminError").innerHTML = "";
    }
    var lastName = document.getElementById("lAdminName").value;
    var islastNameValid = isvalid(lastName, 4);
    if (islastNameValid == false) {
        document.getElementById("lNameAdminError").innerHTML = "check your last name!";
    } else {
        document.getElementById("lNameAdminError").innerHTML = "";
    }
    var email = document.getElementById("emailAdmin").value;

    var password = document.getElementById("pwdAdmin").value;
    var isPassValid = isvalid(password, 8);
    if (isPassValid == false) {
        document.getElementById("pwdAdminError").innerHTML = "Check your password!";
    } else {
        document.getElementById("pwdAdminError").innerHTML = "";
    }

     if (isfirstNameValid && islastNameValid && isPassValid) {
        var usersTab = JSON.parse(localStorage.getItem("allUsers") || "[]");


        var admin = {
            id: checkId(usersTab) + 1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role:"Admin",
    
        }
    
        console.log(admin);
        usersTab.push(admin);
        localStorage.setItem("allUsers", JSON.stringify(usersTab));  
     }

        

        
    
   

}


function checkId(t) {
    var max;
    if (t.length == 0) {
        max = 0;
    }
    else {
        max = t[0].id;
        for (var i = 1; i < t.length; i++) {
            if (t[i].id > max) {
                max = t[i].id;
            }

        }
    }
    return (max);
}


function isvalid(ch, x) {
    if (ch.length < x) {
        return false;
    }
    return true;
}


function isTel(r, v) {
    return (r.length == v);
}



function checkEmail(t, email) {
    var email = document.getElementById("email").value;
    var test = false;
    for (var i = 0; i < t.length; i++) {
        if (t[i].email == email) {
            test = true;
            break;
        }

    }
    return test; 
}

function isPrice(t) {
    return (t > 0);
}
// FIN SIGN UP




function checkUser(Tab, user, pass) {
    var findedUser;
    for (var i = 0; i < Tab.length; i++) {
        if ((Tab[i].email == user) && (Tab[i].password == pass)) {
            findedUser = Tab[i];
            break;
        }
    }
    return findedUser;
}


function loginUser(){
    var email = document.getElementById("emailUser").value;
    var password = document.getElementById("passUser").value;
    var usersTab = JSON.parse(localStorage.getItem("allUsers"));
    var findedUser = checkUser(usersTab, email, password);

    if (findedUser) {
       

        if (findedUser.role=="Student") {
            location.replace("reserve_courses.html");
            
        }else if(findedUser.role == "Professor"){
            location.replace("all_courses1.html");
        }else{
            location.replace("admin_dashboard.html");
        }
    

       
    } else {
        document.getElementById("passUserError").innerHTML = "Verify your Password";
    }

    localStorage.setItem("connected", JSON.stringify(findedUser.id));
}

function searchUser(id) {
    var usersTab = JSON.parse(localStorage.getItem("allUsers") || "[]");
    var findedUser;
    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].id == id) {
            findedUser = usersTab[i];
            break;
        }

    }
    return (findedUser)
}


// Début CRUD STUDENT
function displayStudent() {


    var usersTab = JSON.parse(localStorage.getItem("allUsers") || "[]");
    
    var content = "";
   

    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].role == "Student") {
            
            content = content + ` <tr>
        <td>${usersTab[i].firstName}</td>
        <td>${usersTab[i].telephone}</td>
        <td>${usersTab[i].Adresse}</td>
        <td>${usersTab[i].CIN}</td>
        <td>${usersTab[i].City}</td>
        
        <td>
            <span class="label label-success" onclick="deleteStudent(${i})">Delete</span>
        </td>
        <td><a href="up_date_student.html" class="ad-st-view"  onclick="upDate(${i})">Edit</a></td>
    </tr>`;
        }

    }
   
   
    document.getElementById("studentDIV").innerHTML = content;
}

function deleteStudent(i) {
    var usersTab = JSON.parse(localStorage.getItem("allUsers")|| "[]");
    usersTab.splice(i,1);
    localStorage.setItem("allUsers", JSON.stringify(usersTab));
    location.reload();
}

function updateStudent(id) {
    var content = "";
    var studentsTab = JSON.parse(localStorage.getItem("students") || "[]");

    for (var i = 0; i < studentsTab.length; i++) {
        var studentsTab = JSON.parse(localStorage.getItem("students") || "[]");
        if (studentsTab[i].id == id) {
            content = content + `
            
            <div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="newFirstName" type="text" class="validate"  value=${studentsTab[i].firstName} >
                    <label for="list-title" class="">Course Name</label>
                </div>
                <span id="courseNameError"></span>
                <div class="input-field col s12">
                    <input id="newLastName" type="text" class="validate" value=${studentsTab[i].lastName}>
                    <label for="list-name">Price</label>
                </div>
                <span id="priceError"></span>
                <div class="input-field col s12">
                    <input id="newEmail" type="text" class="validate" value=${studentsTab[i].email}>
                    <label for="list-name">Number of Hours</label>
                </div>
                <span id="nbHourError"></span>
                <div class="input-field col s12">
                    <input id="newTlf" type="text" class="validate" value=${studentsTab[i].telephone}>
                    <label for="list-name">Number of Place</label>
                </div>
                <span id="nbPlaceError"></span>
                <div class="input-field col s12">
                    <input id="newAdress" type="text" class="validate" value=${studentsTab[i].Adresse}>
                    <label for="list-name">Number of Place</label>
                </div>
                <div class="input-field col s12">
                    <input id="newCity" type="text" class="validate" value=${studentsTab[i].City}>
                    <label for="list-name">Number of Place</label>
                </div>
            </div>
          
           <div class="row">
            <button  onclick="upDateStud(${studentsTab[i].id})">Add Student</button>
           </div>
            
        </div> 
            `
            break;
        }
    }
    document.getElementById("studentDIV").innerHTML = content;
}

function upDateStud(id) {
    var studentsTab = JSON.parse(localStorage.getItem("students") || "[]");
     var firstName = document.getElementById("newFirstName").value;
     var lastName = document.getElementById("newLastName").value;
     var email = document.getElementById("newEmail").value;
     var telephone = document.getElementById("newTlf").value;
     var Adresse = document.getElementById("newAdress").value;
     var City = document.getElementById("newCity").value;
    
 
     for (var i = 0; i < studentsTab.length; i++) {
 
         if (usersTab[i].id == id) {
            studentsTab[i].firstName=firstName;    
            studentsTab[i].lastName=lastName;    
            studentsTab[i].email=email;   
            studentsTab[i].telephone=telephone;   
            studentsTab[i].Adresse=Adresse;   
            studentsTab[i].City=City;   
            localStorage.setItem("students", JSON.stringify((studentsTab))); 
            location.reload();
         }
         
     }
     
}

// function upDate(id) {
//    var studentsTab = JSON.parse(localStorage.getItem("students") || "[]");
//     var firstName = document.getElementById("newFirstName").value;
//     var lastName = document.getElementById("newLastName").value;
//     var email = document.getElementById("newEmail").value;
//     var Adresse = document.getElementById("newAddress").value;
//     var CIN = document.getElementById("newCIN").value;
//     var City = document.getElementById("newCity").value;

//     for (var i = 0; i < productsTab.length; i++) {

//         if (studentsTab[i].id == id) {
//             studentsTab[i].firstName=firstName;    
//             studentsTab[i].lastName=lastName;    
//             studentsTab[i].email=email;   
//             studentsTab[i].Adresse=Adresse;   
//             studentsTab[i].CIN=CIN;   
//             studentsTab[i].City=City;   
//             studentsTab.setItem("students", JSON.stringify((studentsTab))); 
//            location.reload();
//         }
        
//     }
    
// }

// function upDate1(id) {
//     var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
//      var name = document.getElementById("newNameCourse").value;
//      var price = document.getElementById("newPrice").value;
//      var nbHours = document.getElementById("newHours").value;
//      var nbPlaces = document.getElementById("newPlaces").value;
 
//      for (var i = 0; i < formationsTab.length; i++) {
 
//          if (formationsTab[i].id == id) {
//             formationsTab[i].NameCourse=name;    
//             formationsTab[i].Price=price;    
//             formationsTab[i].nbHours=nbHours;   
//             formationsTab[i].nbPlaces=nbPlaces;   
//             localStorage.setItem("formations", JSON.stringify((formationsTab))); 
//             location.reload();
//          }
         
//      }
     
// }
// Fin CRUD STUDENT


// DEBUT AVIS
function studentInformation() {
    var avisTab = JSON.parse(localStorage.getItem("avisProfessor")||"[]");
  
    var note = document.getElementById("studentNote").value;
    var isNoteValid = isvalid(note,2);
    if (isNoteValid== false) {
        document.getElementById("studentNoteError").innerHTML="check your note!";
    } else {
        document.getElementById("studentNoteError").innerHTML="";

    }
    var descriptionStudent = document.getElementById("studentDescription").value;
    var isDescriptionStudValid = isvalid(note,30);
    if (isDescriptionStudValid== false) {
        document.getElementById("studentDescriptionError").innerHTML="Your description should contain 30 lettres!";
    } else {
        document.getElementById("studentDescriptionError").innerHTML="";

    }
    var avisProf ={
        id: checkId(avisTab)+1,
        note: note,
        descriptionStudent: descriptionStudent
    }
    console.log(avisProf);
    avisTab.push(avisProf);
    localStorage.setItem("avisProfessor",JSON.stringify(avisTab));

}

function professorInformation() {
    var avisStudTab= JSON.parse(localStorage.getItem("avisStudent")||"[]");
     

    var firstName = document.getElementById("professorName").value;
    var isfirstNameValid= isvalid(firstName,4);
    var descriptionProfessor = document.getElementById("professorDescription").value;
    var isDescriptionProfValid = isvalid(descriptionProfessor,20);
    if (isDescriptionProfValid== false) {
        document.getElementById("professorNameError").innerHTML="Check Your Name";
    } else {
        document.getElementById("professorNameError").innerHTML="";

    }
    if (isDescriptionProfValid== false) {
        document.getElementById("professorDescriptionError").innerHTML="Your description should contain 30 lettres!"
    } else {
        document.getElementById("professorDescriptionError").innerHTML="";

    }
    var avisStud ={
        id: checkId(avisStudTab)+1,
        firstName : firstName,
        descriptionProfessor : descriptionProfessor
    }
    console.log(avisStud);
    avisStudTab.push(avisStud);
    localStorage.setItem("avisStudent", JSON.stringify(avisStudTab));
}
// FIN AVIS 









// DEBUT CRUD FORMATION 
function displayFormation() {

    
    var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
    

    var content = "";
    for (var i = 0; i < formationsTab.length; i++) {
        content = content + ` <tr>
        <td>${formationsTab[i].NameCourse}</td>
        <td>${formationsTab[i].Price}</td>
        <td>${formationsTab[i].nbHours}</td>
        <td>${formationsTab[i].nbPlace}</td>
        <td>${formationsTab[i].professorId}</td>
        
        <td>
            <span class="label label-success" onclick="deleteFormation(${formationsTab[i].id})">Delete</span>
        </td>
        <td><a href="add_formation.html" class="ad-st-view"  onclick="updateFormation(${formationsTab[i].id})">Edit</a></td>
    </tr>`;
    }
    document.getElementById("formationsDIV").innerHTML = content;
} 
function addFormation() {
    var professorId= JSON.parse(localStorage.getItem("connected") || "[]");
    var NameCourse= document.getElementById("courseName").value;
    var isNameValid= isvalid(NameCourse,4);
    if (isNameValid== false) {
        document.getElementById("courseNameError").innerHTML="Name of course is invalid!";
    } else {
        document.getElementById("courseNameError").innerHTML="";
    }
    var Price= document.getElementById("price").value;
    var isPriceValid =isPrice(Price)
    if (isPriceValid== false) {
        document.getElementById("priceError").innerHTML="Price of course is invalid!";
    } else {
        document.getElementById("priceError").innerHTML="";
    }
    var nbHours= document.getElementById("nbHours").value;
    var isNbHoursValid = isvalid(nbHours,4);
    if (isNbHoursValid == false) {
        document.getElementById("nbHourError").innerHTML="Hours of course is invalid!";
    } else {
        document.getElementById("nbHourError").innerHTML="";
    }
    var nbPlace= document.getElementById("nbPlace").value;
    var isNbPlacesValid = isvalid(nbPlace,15);
    if (isNbPlacesValid == false) {
        document.getElementById("nbPlaceError").innerHTML="Places of course is invalid!";
    } else {
        document.getElementById("nbPlaceError").innerHTML="";
    }
    // if (isNameValid && isPriceValid && isNbHoursValid && isNbPlacesValid ) {}
        var formationsTab= JSON.parse(localStorage.getItem("formations")||"[]");

        var formation={
            id: checkId(formationsTab)+1,
            NameCourse: NameCourse,
            Price: Price,
            nbHours: nbHours,
            nbPlace: nbPlace,
            professorId:professorId,
           
        }
        
        formationsTab.push(formation);
        localStorage.setItem("formations",JSON.stringify(formationsTab));
        console.log(formation);
       
    
}

function updateFormation(id) {
    var content = "";
    var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");

    for (var i = 0; i < productsTab.length; i++) {
        var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
        if (formationsTab[i].id == id) {
            content = content + `
            
            <div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="newCourseName" type="text" class="validate"  value=${formationsTab[i].NameCourse} >
                    <label for="list-title" class="">Course Name</label>
                </div>
                <span id="courseNameError"></span>
                <div class="input-field col s12">
                    <input id="newPrice" type="text" class="validate" value=${formationsTab[i].Price}>
                    <label for="list-name">Price</label>
                </div>
                <span id="priceError"></span>
                <div class="input-field col s12">
                    <input id="newNbHours" type="text" class="validate" value=${formationsTab[i].nbHours}>
                    <label for="list-name">Number of Hours</label>
                </div>
                <span id="nbHourError"></span>
                <div class="input-field col s12">
                    <input id="newNbPlace" type="text" class="validate" value=${formationsTab[i].nbPlace}>
                    <label for="list-name">Number of Place</label>
                </div>
                <span id="nbPlaceError"></span>
            </div>
          
           <div class="row">
            <button onclick="upDateForm(${formationsTab[i].id})">Add Formation</button>
           </div>
            
        </div> 
            `
            break;
        }
    }
    document.getElementById("formationsDIV").innerHTML = content;
}

function upDateForm(id) {
    var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
     var NameCourse = document.getElementById("newCourseName").value;
     var Price = document.getElementById("newPrice").value;
     var nbHours = document.getElementById("newNbHours").value;
     var nbPlace = document.getElementById("newNbPlace").value;
    
 
     for (var i = 0; i < formationsTab.length; i++) {
 
         if (productsTab[i].id == id) {
            formationsTab[i].NameCourse=NameCourse;    
            formationsTab[i].Price=Price;    
            formationsTab[i].nbHours=nbHours;   
            formationsTab[i].nbPlace=nbPlace;   
            localStorage.setItem("formations", JSON.stringify((formationsTab))); 
            location.reload();
         }
         
     }
     
}

function deleteFormation(id) {
    var formationsTab = JSON.parse(localStorage.getItem("formations")|| "[]");
    formationsTab.splice(id,1);
    localStorage.setItem("formations", JSON.stringify(formationsTab));
    location.reload();
}

function displayFormationStudent() {

    
    var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");
    

    var content = "";
    for (var i = 0; i < formationsTab.length; i++) {
        content = content + ` <tr>
        <td>${formationsTab[i].NameCourse}</td>
        <td>${formationsTab[i].Price}</td>
        <td>${formationsTab[i].nbHours}</td>
        <td>${formationsTab[i].nbPlace}</td>
       
        
        <td>
        <button class="label label-success" onclick="bookFormation(${formationsTab[i].id})">RESERVE</button>
    </td>
    <td>
    <button class="label label-info"  onclick="displaydashStudent(${formationsTab[i].id})" >DISPLAY</button>
</td>
    
    </tr>`;
    }
    document.getElementById("courseReserved").innerHTML = content;
} 

function display(x) {
    localStorage.setItem("displayedFormation", x); 
    alert(x);
    location.replace("add_formation.html");

}

function displaydashStudent(x) {
    localStorage.setItem("displayedFormation", x); 
    alert(x);
    location.replace("show_courses_student.html");

}

// FIN CRUD FORMATION

// DEBUT BOOK FORMATION

function displayReservation() {
    var connectedUserId = localStorage.getItem("connected");
    var reservationTab = JSON.parse(localStorage.getItem("reservations") || "[]");
    var reservations = [];
    var content = "";

    for (var i = 0; i < reservationTab.length; i++) {
        if (reservationTab[i].userId == connectedUserId) {
            reservations.push(reservationTab[i]);
        }
    }
    for (var i = 0; i < reservations.length; i++) {
        content = content + `
    <tr >
                                
    <td>${reservations[i].id}</td>
    <td> ${searchObj(reservations[i].userId, "allUsers").firstName} </td>
 
    <td> ${reservations[i].formationId} </td>
    <td> ${searchProduct(reservations[i].formationId).NameCourse} </td>
    <td> ${searchProduct(reservations[i].formationId).price}</td>
    <td> ${searchProduct(reservations[i].formationId).nbHours}</td>
   
    <td>  <button class="btn btn-primary me-md-2" onclick="addToBasket(${reservationTab[i].id})" type="button">DELETE</button>
    </td>
   
  

</tr>`

    }

    document.getElementById("courseReserved").innerHTML = content;

}


function searchObj(id, key) {

    var T = JSON.parse(localStorage.getItem(key) || "[]");
    var finded;
    for (let i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            finded = T[i];
            break;
        }

    }
    return (finded);
}


// FIN BOOK FORMATION

function goToDisplayFormation() {
    var formationId = localStorage.getItem("displayFormation");
    var formationsTab = JSON.parse(localStorage("formations") || "[]");
    var findedFormation;


    for (var i = 0; i < formationsTab.length; i++) {
        if (formationsTab[i].id == formationId) {
            findedFormation = formationId[i];
            break;
        }

    }
    document.getElementById("courseName").innerHTML = findedFormation.NameCourse;
    document.getElementById("price").innerHTML = findedFormation.Price;
    document.getElementById("nbHours").innerHTML = findedFormation.nbHours;
    document.getElementById("nbPlace").innerHTML = findedFormation.nbPlace;
}

function generateHeader() {
    var connectedUserId=localStorage.getItem("connected");
    var connectedUser=searchObj(connectedUserId,"allUsers");
    var content="";
    if (connectedUserId) {
        if (connectedUser.role="Student") {
            content=`
            <li><a href="index-2.html">Home</a>
            </li>
            <li class="about-menu">
                <a href="about.html" class="mm-arr">About us</a>
                <!-- MEGA MENU 1 -->
                <div class="mm-pos">
                    <div class="about-mm m-menu">
                        <div class="m-menu-inn">
                            <div class="mm1-com mm1-s1">
                                <div class="ed-course-in">
                                    <a class="course-overlay menu-about" href="admission.html">
                                        <img src="images/h-about.jpg" alt="">
                                        <span>Academics</span>
                                    </a>
                                </div>
                            </div>
                            <div class="mm1-com mm1-s2">
                                <p>Want to change the world? At Berkeley we’re doing just that. When
                                    you join the Golden Bear community, you’re part of an
                                    institution that shifts the global conversation every single
                                    day.</p>
                                <a href="about.html" class="mm-r-m-btn">Read more</a>
                            </div>
                            <div class="mm1-com mm1-s3">
                                <ul>
                                    <li><a href="all-courses.html">All Courses</a></li>
                                    <li><a href="course-details.html">Course details</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="admission.html">Admission</a></li>
                                    <li><a href="awards.html">Awards</a></li>
                                </ul>
                            </div>
                            <div class="mm1-com mm1-s4">
                                <ul>
                                    <li><a href="dashboard.html">Student profile</a></li>
                                    <li><a href="db-courses.html">Dashboard courses</a></li>
                                    <li><a href="db-exams.html">Dashboard exams</a></li>
                                    <li><a href="db-profile.html">Dashboard profile</a></li>
                                    <li><a href="db-time-line.html">Dashboard timeline</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="admi-menu">
                <a href="#" class="mm-arr">Admission</a>
                <!-- MEGA MENU 1 -->
                <div class="mm-pos">
                    <div class="admi-mm m-menu">
                        <div class="m-menu-inn">
                            <div class="mm2-com mm1-com mm1-s1">
                                <div class="ed-course-in">
                                    <a class="course-overlay" href="about.html">
                                        <img src="images/h-about1.jpg" alt="">
                                        <span>Academics</span>
                                    </a>
                                </div>
                                <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros.
                                    Vestibulum congue nec eros quis lacinia. Mauris non tincidunt
                                    lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                <a href="about.html" class="mm-r-m-btn">Read more</a>
                            </div>
                            <div class="mm2-com mm1-com mm1-s1">
                                <div class="ed-course-in">
                                    <a class="course-overlay" href="admission.html">
                                        <img src="images/h-adm1.jpg" alt="">
                                        <span>Admission</span>
                                    </a>
                                </div>
                                <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros.
                                    Vestibulum congue nec eros quis lacinia. Mauris non tincidunt
                                    lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                <a href="admission.html" class="mm-r-m-btn">Read more</a>
                            </div>
                            <div class="mm2-com mm1-com mm1-s1">
                                <div class="ed-course-in">
                                    <a class="course-overlay" href="awards.html">
                                        <img src="images/h-cam1.jpg" alt="">
                                        <span>History & awards</span>
                                    </a>
                                </div>
                                <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros.
                                    Vestibulum congue nec eros quis lacinia. Mauris non tincidunt
                                    lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                <a href="awards.html" class="mm-r-m-btn">Read more</a>
                            </div>
                            <div class="mm2-com mm1-com mm1-s4">
                                <div class="ed-course-in">
                                    <a class="course-overlay" href="seminar.html">
                                        <img src="images/h-res1.jpg" alt="">
                                        <span>Seminar 2018</span>
                                    </a>
                                </div>
                                <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros.
                                    Vestibulum congue nec eros quis lacinia. Mauris non tincidunt
                                    lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                <a href="seminar.html" class="mm-r-m-btn">Read more</a>
                            </div>

                        </div>
                    </div>
                </div>
            </li>
            <li><a href="all-courses.html">All Courses</a></li>
            <!--<li><a class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</a></li>-->
           
            <li><a href="events.html">Events</a>
            </li>
            
            <li><a href="contact-us.html">Contact us</a>
            </li>
            `
        }else if (connectedUser.role="Professor") {
            content=`
            
                                <li><a href="index-2.html">Home</a>
                                </li>
                                <li class="about-menu">
                                    <a href="about.html" class="mm-arr">About us</a>
                                    <!-- MEGA MENU 1 -->
                                    <div class="mm-pos">
                                        <div class="about-mm m-menu">
                                            <div class="m-menu-inn">
                                                <div class="mm1-com mm1-s1">
                                                    <div class="ed-course-in">
                                                        <a class="course-overlay menu-about" href="admission.html">
                                                            <img src="images/h-about.jpg" alt="">
                                                            <span>Academics</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="mm1-com mm1-s2">
                                                    <p>Want to change the world? At Berkeley we’re doing just that. When you join the Golden Bear community, you’re part of an institution that shifts the global conversation every single day.</p>
                                                    <a href="about.html" class="mm-r-m-btn">Read more</a>
                                                </div>
                                                <div class="mm1-com mm1-s3">
                                                    <ul>
                                                        <li><a href="all-courses.html">All Courses</a></li>
                                                        <li><a href="course-details.html">Course details</a></li>
                                                        <li><a href="about.html">About</a></li>
                                                        <li><a href="admission.html">Admission</a></li>
                                                        <li><a href="awards.html">Awards</a></li>
                                                    </ul>
                                                </div>
                                                <div class="mm1-com mm1-s4">
                                                    <ul>
                                                        <li><a href="dashboard.html">Student profile</a></li>
                                                        <li><a href="db-courses.html">Dashboard courses</a></li>
                                                        <li><a href="db-exams.html">Dashboard exams</a></li>
                                                        <li><a href="db-profile.html">Dashboard profile</a></li>
                                                        <li><a href="db-time-line.html">Dashboard timeline</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            
                                <li><a href="all-courses.html">All Courses</a></li>
                                <!--<li><a class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</a></li>-->
                                <li class="cour-menu">
                                    <a href="#!" class="mm-arr">All Pages</a>
                                    <!-- MEGA MENU 1 -->
                                    <div class="mm-pos">
                                        <div class="cour-mm m-menu">
                                            <div class="m-menu-inn">
                                                <div class="mm1-com mm1-cour-com mm1-s3">
													<h4>Frontend pages:1</h4>
                                                    <ul>
                                                        <li><a href="index-2.html">Home</a></li>
														<li><a href="index-1.html">Home - 1</a></li>
														<li><a href="all-courses.html">All Courses</a></li>
														<li><a href="course-details.html">Course Details</a></li>
														<li><a href="about.html">About us</a></li>
														<li><a href="admission.html">admission</a></li>
														<li><a href="awards.html">awards</a></li>
														<li><a href="blog.html">blog</a></li>
														<li><a href="blog-details.html">blog details</a></li>
														<li><a href="contact-us.html">contact us</a></li>
														<li><a href="departments.html">Departments</a></li>
														<li><a href="events.html">events</a></li>
														<li><a href="event-details.html">event details</a></li>
														<li><a href="event-register.html">event register</a></li>
                                                    </ul>
                                                </div>
                                                <div class="mm1-com mm1-cour-com mm1-s3">
													<h4>Frontend pages:2</h4>
                                                    <ul>
														<li><a href="facilities.html">facilities</a></li>
														<li><a href="facilities-detail.html">facilities detail</a></li>
														<li><a href="research.html">research</a></li>
														<li><a href="seminar.html">seminar</a></li>
														<li><a href="gallery-photo.html">gallery photo</a></li>
                                                    </ul>
													<h4 class="ed-dr-men-mar-top">User Dashboard</h4>
                                                    <ul>
                                                        <li><a href="dashboard.html">Student profile</a></li>
                                                        <li><a href="db-courses.html">Dashboard courses</a></li>
                                                        <li><a href="db-exams.html">Dashboard exams</a></li>
                                                        <li><a href="db-profile.html">Dashboard profile</a></li>
                                                        <li><a href="db-time-line.html">Dashboard timeline</a></li>
                                                    </ul>
                                                </div>
                                                <div class="mm1-com mm1-cour-com mm1-s3">
													<h4>Admin panel:1</h4>
                                                    <ul>
														<li><a href="admin.html">admin</a></li>
														<li><a href="admin-add-courses.html">Add new course</a></li>
														<li><a href="admin-all-courses.html">All courses</a></li>
														<li><a href="admin-student-details.html">Student details</a></li>
														<li><a href="admin-user-add.html">Add new user</a></li>
														<li><a href="admin-user-all.html">All users</a></li>
														<li><a href="admin-panel-setting.html">Admin setting</a></li>
														<li><a href="admin-event-add.html">event add</a></li>
														<li><a href="admin-event-all.html">event all</a></li>
														<li><a href="admin-setting.html">Admin Setting</a></li>
														<li><a href="admin-slider.html">Slider setting</a></li>
														<li><a href="admin-slider-edit.html">Slider edit</a></li>
														<li><a href="admin-course-details.html">course details</a></li>
														<li><a href="admin-login.html">admin login</a></li>
                                                    </ul>
                                                </div>
                                                <div class="mm1-com mm1-cour-com mm1-s3">
													<h4>Admin panel:2</h4>
                                                    <ul>
														<li><a href="admin-event-edit.html">event edit</a></li>
														<li><a href="admin-exam-add.html">exam add</a></li>
														<li><a href="admin-exam-all.html">exam all</a></li>
														<li><a href="admin-exam-edit.html">exam edit</a></li>
														<li><a href="admin-export-data.html">export data</a></li>
														<li><a href="admin-import-data.html">import data</a></li>
														<li><a href="admin-job-add.html">Add new jobs</a></li>
														<li><a href="admin-job-all.html">All jobs</a></li>
														<li><a href="admin-job-edit.html">Edit job</a></li>
														<li><a href="admin-main-menu.html">main menu</a></li>
														<li><a href="admin-page-add.html">Add new page</a></li>
														<li><a href="admin-page-all.html">All pages</a></li>
														<li><a href="admin-page-edit.html">Edit page</a></li>
														<li><a href="admin-forgot.html">forgot password</a></li>
                                                    </ul>
                                                </div>
                                                <div class="mm1-com mm1-cour-com mm1-s4">
													<h4>Admin panel:3</h4>
                                                    <ul>
														<li><a href="admin-quick-link.html">quick link</a></li>
														<li><a href="admin-seminar-add.html">Add new seminar</a></li>
														<li><a href="admin-seminar-all.html">All seminar</a></li>
														<li><a href="admin-seminar-edit.html">Edit seminar</a></li>
														<li><a href="admin-seminar-enquiry.html">Semester enquiry</a></li>
														<li><a href="admin-all-enquiry.html">All enquiry</a></li>
														<li><a href="admin-view-enquiry.html">All enquiry view</a></li>
														<li><a href="admin-event-enquiry.html">event enquiry</a></li>
														<li><a href="admin-admission-enquiry.html">Admission enquiry</a></li>
														<li><a href="admin-common-enquiry.html">common enquiry</a></li>
														<li><a href="admin-course-enquiry.html">course enquiry</a></li>
														<li><a href="admin-all-menu.html">menu all</a></li>
														<li><a href="admin-about-menu.html">Menu - About</a></li>
														<li><a href="admin-admission-menu.html">Menu - admission</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="events.html">Events</a>
                                </li>
                                <li><a href="dashboard.html">Student</a>
                                </li>
                                <li><a href="contact-us.html">Contact us</a>
                                </li>
                            
            `
        }else{
            content=`
            
            <ul>
            <li><a href="index-2.html">Home</a>
            </li>
            <li class="about-menu">
                <a href="about.html" class="mm-arr">About us</a>
                <!-- MEGA MENU 1 -->
                <div class="mm-pos">
                    <div class="about-mm m-menu">
                        <div class="m-menu-inn">
                            <div class="mm1-com mm1-s1">
                                <div class="ed-course-in">
                                    <a class="course-overlay menu-about" href="admission.html">
                                        <img src="images/h-about.jpg" alt="">
                                        <span>Academics</span>
                                    </a>
                                </div>
                            </div>
                            <div class="mm1-com mm1-s2">
                                <p>Want to change the world? At Berkeley we’re doing just that. When you join the Golden Bear community, you’re part of an institution that shifts the global conversation every single day.</p>
                                <a href="about.html" class="mm-r-m-btn">Read more</a>
                            </div>
                            <div class="mm1-com mm1-s3">
                                <ul>
                                    <li><a href="all-courses.html">All Courses</a></li>
                                    <li><a href="course-details.html">Course details</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="admission.html">Admission</a></li>
                                    <li><a href="awards.html">Awards</a></li>
                                </ul>
                            </div>
                            <div class="mm1-com mm1-s4">
                                <ul>
                                    <li><a href="dashboard.html">Student profile</a></li>
                                    <li><a href="db-courses.html">Dashboard courses</a></li>
                                    <li><a href="db-exams.html">Dashboard exams</a></li>
                                    <li><a href="db-profile.html">Dashboard profile</a></li>
                                    <li><a href="db-time-line.html">Dashboard timeline</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="admi-menu">
                <a href="#" class="mm-arr">Admission</a>
                <!-- MEGA MENU 1 -->
                <div class="mm-pos">
                    <div class="admi-mm m-menu">
                        <div class="m-menu-inn">
                            <div class="mm2-com mm1-com mm1-s1">
                                <div class="ed-course-in">
                                    <a class="course-overlay" href="about.html">
                                        <img src="images/h-about1.jpg" alt="">
                                        <span>Academics</span>
                                    </a>
                                </div>
                                <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                <a href="about.html" class="mm-r-m-btn">Read more</a>
                            </div>
                            <div class="mm2-com mm1-com mm1-s1">
                                <div class="ed-course-in">
                                    <a class="course-overlay" href="admission.html">
                                        <img src="images/h-adm1.jpg" alt="">
                                        <span>Admission</span>
                                    </a>
                                </div>
                                <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                <a href="admission.html" class="mm-r-m-btn">Read more</a>
                            </div>
                            <div class="mm2-com mm1-com mm1-s1">
                                <div class="ed-course-in">
                                    <a class="course-overlay" href="awards.html">
                                        <img src="images/h-cam1.jpg" alt="">
                                        <span>History & awards</span>
                                    </a>
                                </div>
                                <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                <a href="awards.html" class="mm-r-m-btn">Read more</a>
                            </div>
                            <div class="mm2-com mm1-com mm1-s4">
                                <div class="ed-course-in">
                                    <a class="course-overlay" href="seminar.html">
                                        <img src="images/h-res1.jpg" alt="">
                                        <span>Seminar 2018</span>
                                    </a>
                                </div>
                                <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                <a href="seminar.html" class="mm-r-m-btn">Read more</a>
                            </div>

                        </div>
                    </div>
                </div>
            </li>
            <li><a href="all-courses.html">All Courses</a></li>
            <!--<li><a class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</a></li>-->
            <li class="cour-menu">
                <a href="#!" class="mm-arr">All Pages</a>
                <!-- MEGA MENU 1 -->
                <div class="mm-pos">
                    <div class="cour-mm m-menu">
                        <div class="m-menu-inn">
                            <div class="mm1-com mm1-cour-com mm1-s3">
                                <h4>Frontend pages:1</h4>
                                <ul>
                                    <li><a href="index-2.html">Home</a></li>
                                    <li><a href="index-1.html">Home - 1</a></li>
                                    <li><a href="all-courses.html">All Courses</a></li>
                                    <li><a href="course-details.html">Course Details</a></li>
                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="admission.html">admission</a></li>
                                    <li><a href="awards.html">awards</a></li>
                                    <li><a href="blog.html">blog</a></li>
                                    <li><a href="blog-details.html">blog details</a></li>
                                    <li><a href="contact-us.html">contact us</a></li>
                                    <li><a href="departments.html">Departments</a></li>
                                    <li><a href="events.html">events</a></li>
                                    <li><a href="event-details.html">event details</a></li>
                                    <li><a href="event-register.html">event register</a></li>
                                </ul>
                            </div>
                            <div class="mm1-com mm1-cour-com mm1-s3">
                                <h4>Frontend pages:2</h4>
                                <ul>
                                    <li><a href="facilities.html">facilities</a></li>
                                    <li><a href="facilities-detail.html">facilities detail</a></li>
                                    <li><a href="research.html">research</a></li>
                                    <li><a href="seminar.html">seminar</a></li>
                                    <li><a href="gallery-photo.html">gallery photo</a></li>
                                </ul>
                                <h4 class="ed-dr-men-mar-top">User Dashboard</h4>
                                <ul>
                                    <li><a href="dashboard.html">Student profile</a></li>
                                    <li><a href="db-courses.html">Dashboard courses</a></li>
                                    <li><a href="db-exams.html">Dashboard exams</a></li>
                                    <li><a href="db-profile.html">Dashboard profile</a></li>
                                    <li><a href="db-time-line.html">Dashboard timeline</a></li>
                                </ul>
                            </div>
                            <div class="mm1-com mm1-cour-com mm1-s3">
                                <h4>Admin panel:1</h4>
                                <ul>
                                    <li><a href="admin.html">admin</a></li>
                                    <li><a href="admin-add-courses.html">Add new course</a></li>
                                    <li><a href="admin-all-courses.html">All courses</a></li>
                                    <li><a href="admin-student-details.html">Student details</a></li>
                                    <li><a href="admin-user-add.html">Add new user</a></li>
                                    <li><a href="admin-user-all.html">All users</a></li>
                                    <li><a href="admin-panel-setting.html">Admin setting</a></li>
                                    <li><a href="admin-event-add.html">event add</a></li>
                                    <li><a href="admin-event-all.html">event all</a></li>
                                    <li><a href="admin-setting.html">Admin Setting</a></li>
                                    <li><a href="admin-slider.html">Slider setting</a></li>
                                    <li><a href="admin-slider-edit.html">Slider edit</a></li>
                                    <li><a href="admin-course-details.html">course details</a></li>
                                    <li><a href="admin-login.html">admin login</a></li>
                                </ul>
                            </div>
                            <div class="mm1-com mm1-cour-com mm1-s3">
                                <h4>Admin panel:2</h4>
                                <ul>
                                    <li><a href="admin-event-edit.html">event edit</a></li>
                                    <li><a href="admin-exam-add.html">exam add</a></li>
                                    <li><a href="admin-exam-all.html">exam all</a></li>
                                    <li><a href="admin-exam-edit.html">exam edit</a></li>
                                    <li><a href="admin-export-data.html">export data</a></li>
                                    <li><a href="admin-import-data.html">import data</a></li>
                                    <li><a href="admin-job-add.html">Add new jobs</a></li>
                                    <li><a href="admin-job-all.html">All jobs</a></li>
                                    <li><a href="admin-job-edit.html">Edit job</a></li>
                                    <li><a href="admin-main-menu.html">main menu</a></li>
                                    <li><a href="admin-page-add.html">Add new page</a></li>
                                    <li><a href="admin-page-all.html">All pages</a></li>
                                    <li><a href="admin-page-edit.html">Edit page</a></li>
                                    <li><a href="admin-forgot.html">forgot password</a></li>
                                </ul>
                            </div>
                            <div class="mm1-com mm1-cour-com mm1-s4">
                                <h4>Admin panel:3</h4>
                                <ul>
                                    <li><a href="admin-quick-link.html">quick link</a></li>
                                    <li><a href="admin-seminar-add.html">Add new seminar</a></li>
                                    <li><a href="admin-seminar-all.html">All seminar</a></li>
                                    <li><a href="admin-seminar-edit.html">Edit seminar</a></li>
                                    <li><a href="admin-seminar-enquiry.html">Semester enquiry</a></li>
                                    <li><a href="admin-all-enquiry.html">All enquiry</a></li>
                                    <li><a href="admin-view-enquiry.html">All enquiry view</a></li>
                                    <li><a href="admin-event-enquiry.html">event enquiry</a></li>
                                    <li><a href="admin-admission-enquiry.html">Admission enquiry</a></li>
                                    <li><a href="admin-common-enquiry.html">common enquiry</a></li>
                                    <li><a href="admin-course-enquiry.html">course enquiry</a></li>
                                    <li><a href="admin-all-menu.html">menu all</a></li>
                                    <li><a href="admin-about-menu.html">Menu - About</a></li>
                                    <li><a href="admin-admission-menu.html">Menu - admission</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li><a href="events.html">Events</a>
            </li>
            <li><a href="dashboard.html">Student</a>
            </li>
            <li><a href="contact-us.html">Contact us</a>
            </li>
        </ul>
        
 
                        
                    
        
            `
        }
    }else{
        content=`
        <ul>
        <li><a href="index-2.html">Home</a>
        </li>
        <li class="about-menu">
            <a href="about.html" class="mm-arr">About us</a>
            <!-- MEGA MENU 1 -->
            <div class="mm-pos">
                <div class="about-mm m-menu">
                    <div class="m-menu-inn">
                        <div class="mm1-com mm1-s1">
                            <div class="ed-course-in">
                                <a class="course-overlay menu-about" href="admission.html">
                                    <img src="images/h-about.jpg" alt="">
                                    <span>Academics</span>
                                </a>
                            </div>
                        </div>
                        <div class="mm1-com mm1-s2">
                            <p>Want to change the world? At Berkeley we’re doing just that. When you join the Golden Bear community, you’re part of an institution that shifts the global conversation every single day.</p>
                            <a href="about.html" class="mm-r-m-btn">Read more</a>
                        </div>
                        <div class="mm1-com mm1-s3">
                            <ul>
                                <li><a href="all-courses.html">All Courses</a></li>
                                <li><a href="course-details.html">Course details</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="admission.html">Admission</a></li>
                                <li><a href="awards.html">Awards</a></li>
                            </ul>
                        </div>
                        <div class="mm1-com mm1-s4">
                            <ul>
                                <li><a href="dashboard.html">Student profile</a></li>
                                <li><a href="db-courses.html">Dashboard courses</a></li>
                                <li><a href="db-exams.html">Dashboard exams</a></li>
                                <li><a href="db-profile.html">Dashboard profile</a></li>
                                <li><a href="db-time-line.html">Dashboard timeline</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="admi-menu">
            <a href="#" class="mm-arr">Admission</a>
            <!-- MEGA MENU 1 -->
            <div class="mm-pos">
                <div class="admi-mm m-menu">
                    <div class="m-menu-inn">
                        <div class="mm2-com mm1-com mm1-s1">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="about.html">
                                    <img src="images/h-about1.jpg" alt="">
                                    <span>Academics</span>
                                </a>
                            </div>
                            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                            <a href="about.html" class="mm-r-m-btn">Read more</a>
                        </div>
                        <div class="mm2-com mm1-com mm1-s1">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="admission.html">
                                    <img src="images/h-adm1.jpg" alt="">
                                    <span>Admission</span>
                                </a>
                            </div>
                            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                            <a href="admission.html" class="mm-r-m-btn">Read more</a>
                        </div>
                        <div class="mm2-com mm1-com mm1-s1">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="awards.html">
                                    <img src="images/h-cam1.jpg" alt="">
                                    <span>History & awards</span>
                                </a>
                            </div>
                            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                            <a href="awards.html" class="mm-r-m-btn">Read more</a>
                        </div>
                        <div class="mm2-com mm1-com mm1-s4">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="seminar.html">
                                    <img src="images/h-res1.jpg" alt="">
                                    <span>Seminar 2018</span>
                                </a>
                            </div>
                            <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                            <a href="seminar.html" class="mm-r-m-btn">Read more</a>
                        </div>

                    </div>
                </div>
            </div>
        </li>
        <li><a href="all-courses.html">All Courses</a></li>
        <!--<li><a class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</a></li>-->
        <li class="cour-menu">
            <a href="#!" class="mm-arr">All Pages</a>
            <!-- MEGA MENU 1 -->
            <div class="mm-pos">
                <div class="cour-mm m-menu">
                    <div class="m-menu-inn">
                        <div class="mm1-com mm1-cour-com mm1-s3">
                            <h4>Frontend pages:1</h4>
                            <ul>
                                <li><a href="index-2.html">Home</a></li>
                                <li><a href="index-1.html">Home - 1</a></li>
                                <li><a href="all-courses.html">All Courses</a></li>
                                <li><a href="course-details.html">Course Details</a></li>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="admission.html">admission</a></li>
                                <li><a href="awards.html">awards</a></li>
                                <li><a href="blog.html">blog</a></li>
                                <li><a href="blog-details.html">blog details</a></li>
                                <li><a href="contact-us.html">contact us</a></li>
                                <li><a href="departments.html">Departments</a></li>
                                <li><a href="events.html">events</a></li>
                                <li><a href="event-details.html">event details</a></li>
                                <li><a href="event-register.html">event register</a></li>
                            </ul>
                        </div>
                        <div class="mm1-com mm1-cour-com mm1-s3">
                            <h4>Frontend pages:2</h4>
                            <ul>
                                <li><a href="facilities.html">facilities</a></li>
                                <li><a href="facilities-detail.html">facilities detail</a></li>
                                <li><a href="research.html">research</a></li>
                                <li><a href="seminar.html">seminar</a></li>
                                <li><a href="gallery-photo.html">gallery photo</a></li>
                            </ul>
                            <h4 class="ed-dr-men-mar-top">User Dashboard</h4>
                            <ul>
                                <li><a href="dashboard.html">Student profile</a></li>
                                <li><a href="db-courses.html">Dashboard courses</a></li>
                                <li><a href="db-exams.html">Dashboard exams</a></li>
                                <li><a href="db-profile.html">Dashboard profile</a></li>
                                <li><a href="db-time-line.html">Dashboard timeline</a></li>
                            </ul>
                        </div>
                        <div class="mm1-com mm1-cour-com mm1-s3">
                            <h4>Admin panel:1</h4>
                            <ul>
                                <li><a href="admin.html">admin</a></li>
                                <li><a href="admin-add-courses.html">Add new course</a></li>
                                <li><a href="admin-all-courses.html">All courses</a></li>
                                <li><a href="admin-student-details.html">Student details</a></li>
                                <li><a href="admin-user-add.html">Add new user</a></li>
                                <li><a href="admin-user-all.html">All users</a></li>
                                <li><a href="admin-panel-setting.html">Admin setting</a></li>
                                <li><a href="admin-event-add.html">event add</a></li>
                                <li><a href="admin-event-all.html">event all</a></li>
                                <li><a href="admin-setting.html">Admin Setting</a></li>
                                <li><a href="admin-slider.html">Slider setting</a></li>
                                <li><a href="admin-slider-edit.html">Slider edit</a></li>
                                <li><a href="admin-course-details.html">course details</a></li>
                                <li><a href="admin-login.html">admin login</a></li>
                            </ul>
                        </div>
                        <div class="mm1-com mm1-cour-com mm1-s3">
                            <h4>Admin panel:2</h4>
                            <ul>
                                <li><a href="admin-event-edit.html">event edit</a></li>
                                <li><a href="admin-exam-add.html">exam add</a></li>
                                <li><a href="admin-exam-all.html">exam all</a></li>
                                <li><a href="admin-exam-edit.html">exam edit</a></li>
                                <li><a href="admin-export-data.html">export data</a></li>
                                <li><a href="admin-import-data.html">import data</a></li>
                                <li><a href="admin-job-add.html">Add new jobs</a></li>
                                <li><a href="admin-job-all.html">All jobs</a></li>
                                <li><a href="admin-job-edit.html">Edit job</a></li>
                                <li><a href="admin-main-menu.html">main menu</a></li>
                                <li><a href="admin-page-add.html">Add new page</a></li>
                                <li><a href="admin-page-all.html">All pages</a></li>
                                <li><a href="admin-page-edit.html">Edit page</a></li>
                                <li><a href="admin-forgot.html">forgot password</a></li>
                            </ul>
                        </div>
                        <div class="mm1-com mm1-cour-com mm1-s4">
                            <h4>Admin panel:3</h4>
                            <ul>
                                <li><a href="admin-quick-link.html">quick link</a></li>
                                <li><a href="admin-seminar-add.html">Add new seminar</a></li>
                                <li><a href="admin-seminar-all.html">All seminar</a></li>
                                <li><a href="admin-seminar-edit.html">Edit seminar</a></li>
                                <li><a href="admin-seminar-enquiry.html">Semester enquiry</a></li>
                                <li><a href="admin-all-enquiry.html">All enquiry</a></li>
                                <li><a href="admin-view-enquiry.html">All enquiry view</a></li>
                                <li><a href="admin-event-enquiry.html">event enquiry</a></li>
                                <li><a href="admin-admission-enquiry.html">Admission enquiry</a></li>
                                <li><a href="admin-common-enquiry.html">common enquiry</a></li>
                                <li><a href="admin-course-enquiry.html">course enquiry</a></li>
                                <li><a href="admin-all-menu.html">menu all</a></li>
                                <li><a href="admin-about-menu.html">Menu - About</a></li>
                                <li><a href="admin-admission-menu.html">Menu - admission</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li><a href="events.html">Events</a>
        </li>
        <li><a href="dashboard.html">Student</a>
        </li>
        <li><a href="contact-us.html">Contact us</a>
        </li>
    </ul>
        `
    }
    document.getElementById("headerId").innerHTML=content;
}





function displayFormStud() {

    
    var formationsTab = JSON.parse(localStorage.getItem("formations") || "[]");

    

    var content = "";
    for (var i = 0; i < formationsTab.length; i++) {
        content = content + ` <a href="course-details.html">
        <h3>${formationsTab[i].NameCourse} </h3>
        </a>
        <h4><span>Professor Name:</span>${formationsTab[i].professorId}</h4>
        <p><span>Place Number:</span> ${formationsTab[i].nbPlace}</p> 
        <div class="hom-list-share">
        <ul>
            <li><a href="course-details.html"><i class="fa fa-bar-chart" aria-hidden="true" onclick="formationReservation()"></i> Book Now</a> </li>
            <li><a href="course-details.html"><i class="fa fa-eye" aria-hidden="true"></i>10 Aavailable</a> </li>
            <li><a href="course-details.html"><i class="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li>
        </ul>
        </div>`;
    }
    document.getElementById("courseRes").innerHTML = content;
}





function logout() {
    localStorage.removeItem("connected");
    location.replace("helloPage.html");
}



function formationReservation(){

    var reservedStudTab=JSON.parse(localStorage.getItem("reservation")||"[]");
     
  var connectedUser=localStorage.getItem("connected");
  var displayedFormation=localStorage.getItem("displayedFormation");
  
  var formationReserved={
  
   id:checkId(reservedStudTab)+1,
   connectedUser:connectedUser,
   displayedFormation:displayedFormation,
   
  
  
  }
  console.log(formationReserved);
  
  reservedStudTab.push(formationReserved);
  localStorage.setItem("reservation",JSON.stringify(reservedStudTab));
  
  
  
}



function studentCoord() {
    
    var usersTab = JSON.parse(localStorage.getItem("allUsers") || "[]");
    var connectedUserId = localStorage.getItem("connected");
    var reservedStudTab=JSON.parse(localStorage.getItem("reservation")||"[]");

    

    var content = "";
    for (var i = 0; i < reservedStudTab.length; i++) {
        content = content + `  <div class="pro-user">
        <img src="images/user.jpg" alt="user">
    </div>
    <div class="pro-user-bio">
        <ul>
            <li>
                <h4>${searchUser(reservedStudTab[i].connectedUser).firstName}</h4>
            </li>
            <li>${(reservedStudTab[i].connectedUser)}</li>
            <li><a href="#!"><i class="fa fa-facebook"></i> Facebook: my sample</a></li>
            <li><a href="#!"><i class="fa fa-google-plus"></i> Google: my sample</a></li>
            <li><a href="#!"><i class="fa fa-twitter"></i> Twitter: my sample</a></li>
        </ul>
    </div>`;
    }
    document.getElementById("studentCoord").innerHTML = content;
}




