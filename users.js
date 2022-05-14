

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