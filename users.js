
  // window.onload = createForm();
const createForm = () => {
  const body = document.querySelector("body");
  body.innerHTML = 
'  <h1>Hello :) welcome to the digital postcard</h1><section class="inputBox"><form action=""  method="post" name="myFirstForm" id="inputBox"><ul><h2>Choose event</h2><label for="Anniversary">Anniversary</label><input type="radio" name="event" id="Anniversaryy" class="radioBTN"><label for="Valentines">Valentines</label><input type="radio" name="event" id="Valentiness" class="radioBTN"><label for="Birthday">Birthday</label><input type="radio" name="event" id="Birthdayy" class="radioBTN"></ul><label for="yourName">Name</label><textarea name="yourName" id="name" cols="10" rows="5" placeholder="Name"></textarea><label for="yourMessage">Message</label><textarea name="yourMessage" id="Message" cols="30" rows="5" placeholder="Your Message"></textarea><button type="submit"  onclick="showHide()" id="submit">Submit</button></form></section><div id="myDIV" class="2" style="display:none"><h3 id="eventGreeting"> </h3> <h4></h4><p></p></div>'
}



const eventGreeting = document.querySelector("#eventGreeting")

const Anniversaryy = document.querySelector("#Anniversaryy")
const Valentiness = document.querySelector("#Valentiness")
const Birthdayy = document.querySelector("#Birthdayy") 


const nameInput = document.querySelector("#name")
const nameDisplay = document.querySelector("h4")

const messageInput = document.querySelector("#Message")
const messageDisplay = document.querySelector("p")
  
  Anniversaryy.addEventListener( 'change', function() {
    if(this.checked) {
      eventGreeting.textContent = "Happy Aniversary"
    } 
});
  
   Valentiness.addEventListener( 'change', function() {
    if(this.checked) {
      eventGreeting.textContent = "Happy Valentine"
    } 
});

Birthdayy.addEventListener( 'change', function() {
    if(this.checked) {
      eventGreeting.textContent = "Happy Birthday"
    } 
});
  
  
 myFirstForm.addEventListener('submit', function(event) {
    // Do something with the form's data here
    this.style.display = 'none';
    event.preventDefault();
  }); 
  
   function showHide() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = 'block';
  
         
const displayedName = nameInput.value
nameDisplay.textContent = displayedName
      
         const displayedMessage = messageInput.value
messageDisplay.textContent = displayedMessage


      
    } else {
      x.style.display = "none";
    }
  }