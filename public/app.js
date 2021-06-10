


//ITEMS

const months = document.querySelectorAll('.month');


//Months Ids
const january = document.getElementById('january');
const february = document.getElementById('february');
const march = document.getElementById('march');
const april = document.getElementById('april');
const may = document.getElementById('may');
const june = document.getElementById('june');
const july = document.getElementById('july');
const august = document.getElementById('august');
const september = document.getElementById('september');
const october = document.getElementById('october');
const november = document.getElementById('november');
const december = document.getElementById('december');
//Dates
const januaryDates = january.querySelectorAll('button');
const februaryDates = february.querySelectorAll('button');
const marchDates = march.querySelectorAll('button');
const aprilDates = april.querySelectorAll('button');
const mayDates = may.querySelectorAll('button');
const juneDates = june.querySelectorAll('button');
const julyDates = july.querySelectorAll('button');
const augustDates = august.querySelectorAll('button');
const septemberDates = september.querySelectorAll('button');
const octoberDates = october.querySelectorAll('button');
const novemberDates = november.querySelectorAll('button');
const decemberDates = december.querySelectorAll('button');

//Array with month dates
const dates = [januaryDates, februaryDates, marchDates, aprilDates, mayDates, juneDates, julyDates, augustDates, septemberDates, octoberDates, novemberDates, decemberDates];




//Setting curent day/month (red border)
let today = new Date();
let monthToday = today.getMonth();
let dayToday = today.getDate();


//Info section 

const total = document.getElementById('total').querySelector('h4');
const thisMonth = document.getElementById('thisMonth').querySelector('h4');
//const nextBirthday = document.getElementById('nextBirthday').querySelector('h4');


//Changing effects and shadow on curent month

months[monthToday].style.border = "4px ridge #cc0000";

function changeColor(currentMonth){
    currentMonth.addEventListener('mouseenter', e => {
        currentMonth.style.boxShadow = "0px 0px 42px 2px #ffc2c2";
        currentMonth.getElementsByTagName("H1")[0].style.color = "#cc0000";
        currentMonth.getElementsByClassName('animate')[0].style.background = "linear-gradient(to right, transparent, #cc0000)";
        currentMonth.getElementsByClassName('animate')[1].style.background = "linear-gradient(to bottom, transparent, #cc0000)";
        currentMonth.getElementsByClassName('animate')[2].style.background = "linear-gradient(to left, transparent, #cc0000)";
        currentMonth.getElementsByClassName('animate')[3].style.background = "linear-gradient(to top, transparent, #cc0000)";
      })
      currentMonth.addEventListener('mouseleave', e => {
        currentMonth.style.boxShadow = "none";
        currentMonth.getElementsByTagName("H1")[0].style.color = "black";
      })
  };

switch(monthToday){
    case(0):
        januaryDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(january);

        break;
    case(1):
        februaryDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(february);

        break;
    case(2):
        marchDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(march);

        break;
    case(3):
        aprilDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(april);

        break;
    case(4):
        mayDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(may);

        break;
    case(5):
        juneDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(june);

        break;
    case(6):
        julyDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(july);

        break;
    case(7):
        augustDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(august);

        break;
    case(8):
        septemberDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(september);

        break;
    case(9):
        octoberDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(october);

        break;
    case(10):
        novemberDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(november);

        break;
    case(11):
        decemberDates.forEach(e=>{
            if(e.innerText ==dayToday){
                e.style.border = "2px ridge #cc0000";
                e.style.background = "#ffc2c2";
            }
        })
        changeColor(december);

        break;

}



const wrapper = document.querySelector('.addNew');
const form = wrapper.querySelectorAll('.form');
const submitInput = form[0].querySelector('input[type="submit"]');




const birthdayMaker = (fname, lname, month, day, color) => {
    return{
        first_name: fname,
        last_name: lname,
        month: month,
        day: day,
        color: color
    };
};





function getDataForm(e){

    e.preventDefault();

    let formData = new FormData(form[0]);
    
    let fname = capitalizeFirstLetter(formData.get('fname'));
    let lname = capitalizeFirstLetter(formData.get('lname'));
    let month = formData.get('month');
    let day = formData.get('day');
    let color = formData.get('colors');

    //Checking if form elements are empty

    if(fname != "" && lname != "" && month != null && day != null && color != null){
        // Get current counter from localStorage and increment it
    let counter = localStorage.getItem('counter');
    let k = localStorage.getItem('k');

    counter++;
    k++;

    //Adding it to local Storage
    localStorage.setItem('birthday-'+k, JSON.stringify(birthdayMaker(fname, lname, month, day, color)));

    // Put back the incremented counter into LS
    localStorage.setItem('counter', counter);
    localStorage.setItem('k', k);

    location.reload();
    } else{
        alert("Please fill all the fields !");
    }
}

document.addEventListener('DOMContentLoaded' , function(){
    submitInput.addEventListener('click', getDataForm, false);
}, false);

// console.log(wrapper);
// console.log(form);
//console.log(months[4]);



//This is how you store objects into localStorage >>>

// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));

// localStorage.clear();
// localStorage.setItem('counter', 0);

console.log(localStorage);

let keysObj = Object.keys(localStorage).filter( key => (key != "counter" && key != "k"));


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
function updateCalendar(){
    total.innerText = localStorage.getItem('counter');
   

    if(localStorage.getItem('counter') > 0){

        for(let i=0; i<localStorage.getItem('counter');i++){

            let key = keysObj[i];
            let retrievedObject = localStorage.getItem(key);
            retrievedObject = JSON.parse(retrievedObject);
            console.log(retrievedObject);
            //Counting birthdays this month
            if(retrievedObject.month == monthToday){
                thisMonth.innerText = parseInt(thisMonth.innerText)+1; 


            }

            dates[retrievedObject.month].forEach( e => {
                if(e.innerText == retrievedObject.day){
                    switch(retrievedObject.color){
                        case "orange":
                        e.style.background = "#FF8C00";
                        e.onmouseover = function(){e.style.color = "white"};
                        e.onmouseout = function(){e.style.color = "black"};
                        break;
                        case "pink":
                        e.style.background = "#FF69B4";
                        e.onmouseover = function(){e.style.color = "white"};
                        e.onmouseout = function(){e.style.color = "black"};
                        break;
                        case "blue":
                        e.style.background = "#4169E1";
                        e.onmouseover = function(){e.style.color = "white"};
                        e.onmouseout = function(){e.style.color = "black"};
                        break;
                    }
                }
            })
        }
        //Next birthday
        let back = dates.slice(0,monthToday);
        let front = dates.slice(monthToday);
        let final = front.concat(back);


        //parseInt(thisMonth.innerText());
        
        // test:if(parseInt(thisMonth.innerText)!=0){
        //     for(let i=dayToday; i<=dates[monthToday].length; i++){
        //         for(let j=1; j<=localStorage.length;j++){

        //             let retrievedObject = localStorage.getItem('birthday-'+j);
        //             retrievedObject = JSON.parse(retrievedObject);

        //             if( parseInt(retrievedObject.month) == monthToday && parseInt(retrievedObject.day) == i){
        //                 nextBirthday.innerText = retrievedObject.first_name;
        //                 switch(retrievedObject.color){
        //                     case "orange":
        //                     nextBirthday.style.color = "#FF8C00";
        //                     break;
        //                     case "pink":
        //                     nextBirthday.style.color = "#FF69B4";
        //                     break;
        //                     case "blue":
        //                     nextBirthday.style.color = "#4169E1";
        //                     break;
        //                 }
        //                 break test;
        //             }
                    
        //         }
        //     }
        // } else {
            
        // }
        
    }
}



console.log(localStorage.length);




//Update on refresh
updateCalendar();


//Required on form complete 
const portofolio = document.getElementById('portofolio');

portofolio.addEventListener('click', function(){
    alert("Portofolio out soon ...🤫🤫🤫");
})




///Custom select form (month)
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
////


///Custom select form (day)(1)
const selected1 = document.querySelector(".selected-day");
const optionsContainer1 = document.querySelector(".options-container-day");

const optionsList1 = document.querySelectorAll(".option-day");

selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active-day");
});

optionsList1.forEach(o => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer1.classList.remove("active-day");
  });
});
////




///Your birthdays
const januaryBirthdays = document.querySelector('.januaryBirthdays');
const februaryBirthdays = document.querySelector('.februaryBirthdays');
const marchBirthdays = document.querySelector('.marchBirthdays');
const aprilBirthdays = document.querySelector('.aprilBirthdays');
const mayBirthdays = document.querySelector('.mayBirthdays');
const juneBirthdays = document.querySelector('.juneBirthdays');
const julyBirthdays = document.querySelector('.julyBirthdays');
const augustBirthdays = document.querySelector('.augustBirthdays');
const septemberBirthdays = document.querySelector('.septemberBirthdays');
const octoberBirthdays = document.querySelector('.octoberBirthdays');
const novemberBirthdays = document.querySelector('.novemberBirthdays');
const decemberBirthdays = document.querySelector('.decemberBirthdays');




submitInput.addEventListener('click', updateYourBirthdays());

function updateYourBirthdays(){

    let keysObj = Object.keys(localStorage).filter( key => (key != "counter" && key != "k"));
    //console.log(keysObj);

    for(let i=0; i<localStorage.getItem('counter');i++){
        
            let key = keysObj[i];
            let retrievedObject = localStorage.getItem(key);
            retrievedObject = JSON.parse(retrievedObject);

        const fullName = retrievedObject.first_name.concat(" ",retrievedObject.last_name);
        const day = retrievedObject.day;
        const color = retrievedObject.color;

        switch(retrievedObject.month){
            case("0"):
            addBirthday(januaryBirthdays,fullName,day,color);
            break;
            case("1"):
            addBirthday(februaryBirthdays,fullName,day,color);
            break;
            case("2"):
            addBirthday(marchBirthdays,fullName,day,color);
            break;
            case("3"):
            addBirthday(aprilBirthdays,fullName,day,color);
            break;
            case("4"):
            addBirthday(mayBirthdays,fullName,day,color);
            break;
            case("5"):
            addBirthday(juneBirthdays,fullName,day,color);
            break;
            case("6"):
            addBirthday(julyBirthdays,fullName,day,color);
            break;
            case("7"):
            addBirthday(augustBirthdays,fullName,day,color);
            break;
            case("8"):
            addBirthday(septemberBirthdays,fullName,day,color);
            break;
            case("9"):
            addBirthday(octoberBirthdays,fullName,day,color);
            break;
            case("10"):
            addBirthday(novemberBirthdays,fullName,day,color);
            break;
            case("11"):
            addBirthday(decemberBirthdays,fullName,day,color);
            break;
        }


    }
}


function addBirthday(month,name,day,color) {

    //Birthday Div
    const birthdayDiv = document.createElement('div');
    birthdayDiv.classList.add('birthday');
     //Birthday Day
     const birthdayDay = document.createElement('div');
     birthdayDay.classList.add('day');
     birthdayDay.innerText = day+" ";
     birthdayDiv.appendChild(birthdayDay);
    //Birthday Name
    const birthdayName = document.createElement('div');
    birthdayName.classList.add('name');
    birthdayName.innerText = name;
    birthdayDiv.appendChild(birthdayName);
    // //Birthday color
    // const birthdaycolor = document.createElement('div');
    // birthdaycolor.classList.add('colorDiv');
    // birthdaycolor.innerText = color;
    // birthdayDiv.appendChild(birthdaycolor);
    // //Delete Button
    // const thrashButton = document.createElement('button');
    // thrashButton.innerHTML = '<i class="fas fa-times"></i>';
    // thrashButton.classList.add("thrash-btn");
    // birthdayDiv.appendChild(thrashButton);
    //append to month
    month.appendChild(birthdayDiv);
}

const birthdays = document.querySelectorAll('.birthday');

// birthdays.forEach( o => {
//     o.addEventListener('click', deleteBirthday);
// })

// function deleteBirthday(e){
//    const item = e.target;

//     if(item.classList[0] === 'thrash-btn') {

//         const birthdayToDelete = item.parentElement;

//         let dayFromDelete = item.previousSibling.previousSibling.previousSibling.innerHTML;
//         let monthFromDelete = birthdayToDelete.parentElement.classList[0];
//         let colorFromDelete = item.previousSibling.innerHTML;


        
//         switch(monthFromDelete){

//             case("januaryBirthdays"):
//             monthFromDelete = 0 ;
//             break;

//             case("februaryBirthdays"):
//             monthFromDelete = 1 ;
//             break;

//             case("marchBirthdays"):
//             monthFromDelete = 2 ;
//             break;

//             case("aprilBirthdays"):
//             monthFromDelete = 3 ;
//             break;

//             case("mayBirthdays"):
//             monthFromDelete = 4 ;
//             break;

//             case("juneBirthdays"):
//             monthFromDelete = 5 ;
//             break;

//             case("julyBirthdays"):
//             monthFromDelete = 6 ;
//             break;

//             case("augustBirthdays"):
//             monthFromDelete = 7 ;
//             break;

//             case("septemberBirthdays"):
//             monthFromDelete = 8 ;
//             break;

//             case("octoberBirthdays"):
//             monthFromDelete = 9 ;
//             break;

//             case("novemberBirthdays"):
//             monthFromDelete = 10 ;
//             break;

//             case("decemberBirthdays"):
//             monthFromDelete = 11 ;
//             break;

//         }
        

//         //remove from yourBirthdays
//         birthdayToDelete.remove();

//         //remove from local Storage
//         for(let i=0; i<localStorage.getItem('counter');i++){

//             let key = keysObj[i];
//             let retrievedObject = localStorage.getItem(key);
//             retrievedObject = JSON.parse(retrievedObject);

//         if(retrievedObject.month == monthFromDelete && retrievedObject.day == dayFromDelete && retrievedObject.color == colorFromDelete){
//             localStorage.removeItem(key);

//             //Decrementing the counter
//             let counter = localStorage.getItem('counter');

//             counter--;

//             localStorage.setItem('counter', counter);    
//         }

        
//         }

//     }
//     location.reload();
// }



//   let test1={
//       'a':1,
//       'b':2
//   }

//   let test2={
//     'a':2,
//     'b':3
// }


//   function populateStorage() {
//       localStorage.setItem('counter', 0);
//     localStorage.setItem('key3', JSON.stringify(test1));
//     localStorage.setItem('key56', JSON.stringify(test2));
//   }

//   populateStorage();
//   const keysObjj = Object.keys(localStorage).filter( key => key != "counter");
//   console.log(keysObjj);

//   for(let i=0;i<2;i++){
//       let key = keysObjj[i];
//     let retrievedObject = localStorage.getItem(key);
//     retrievedObject = JSON.parse(retrievedObject);
    
//     console.log(retrievedObject);

//   }


document.getElementById("delete-all-birthdays").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
  });
   
  document.getElementById("no-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });

  document.getElementById("yes-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });

  document.getElementById("yes-popup-btn").addEventListener('click', function(){
    let allTimeTotal = localStorage.getItem('k');
    localStorage.clear();
    localStorage.setItem('counter', 0);
    localStorage.setItem('k', allTimeTotal);
    location.reload();
})

