//a code for when the page opens
const btnactivepage =  document.getElementById("IChome")

btnactivepage.style.padding = "4px";
btnactivepage.style.borderBottom ="#d08e63 solid 4px" ;
btnactivepage.style.borderRadius = "30%";


///
import { setdata , addnewrecord , display } from "./index.js"

//geting items from HTML 
const schedulediv = document.getElementById("schedulediv")
const scheduledul = document.getElementById("Dayplanul")


//geting time and date 
function format(item){
    if (item < 10 ) {
        return '0'+item
    }
}
function getdate(){
    const  currentDate = new Date();
    let cyear = currentDate.getFullYear() ;
    let cmonth = format(currentDate.getMonth() +1 );
    let cday = format(currentDate.getDate() )
    let fulldate = cyear+'-'+cmonth+'-'+cday
    return fulldate
}
function gettime(){
    const  currentDate = new Date();
    let chours = currentDate.getHours()
    let cminutes = currentDate.getMinutes()
    let fulltime = chours+":"+cminutes
    return fulltime
}
console.log(getdate())
console.log(gettime())



//To make the list scrollable with out having the scrollbar there
schedulediv.scrollTop = 0 ;
schedulediv.addEventListener('wheel',function(e){
    this.scrollTop += e.deltaY;
    e.preventDefault();
})

//creating the check box for when you done events
function createcheckbox (){
    const statuscbx = document.createElement("div")
    statuscbx.classList.add("myCheckbox")
    statuscbx.onclick= function()
    {
        togglechebox(statuscbx)
    }
 return statuscbx
}

//add the tick to the checkbox
function togglechebox(checkbox){
    checkbox.classList.toggle('Checked')
}

//Displays the plan to the list 
async function frmdisplay(duration,pevent,Astatus) { 
    //getting the elements 
    const planli = document.createElement("li")
    const durationlbl = document.createElement("label")
    const eventlbl = document.createElement("label")
    const checkbox = createcheckbox()
    
    //setting the class's of the elemets 
    durationlbl.classList.add("lbltime")
    eventlbl.classList.add("lblevent")
    durationlbl.textContent = duration 
    eventlbl.textContent = pevent 

    if (Astatus === true){
       togglechebox(checkbox)
    }

    planli.append(durationlbl , eventlbl ,checkbox)
    
    scheduledul.append(planli)

}


frmdisplay("09:00 10:00","Go shopping",true)
frmdisplay("10:15 11:15","Read Time",false)
frmdisplay("10:15 11:15","Read Time",false)
frmdisplay("10:15 11:15","Read Time",false) 

const btneditdbm = document.getElementById("addpageIC")

btneditdbm .addEventListener("click",()=>{
    btnactivepage.style.border = "none" ;
    window.location.href = 'dayplan.html';
    
} )




