console.log("app.js loaded...");
function onSubmit(){

    const firstname=document.getElementById("firstname").Value; 
    const lastname=document.getElementById("lastname").Value; 
    const Email=document.getElementById("Email").Value
    const DOB=document.getElementById("DOB").Value; 
    const Password=document.getElementById("Password").Value;


    const user= new User(firstname,lastname,Email,DOB,Password);
    if(typeof(Storage)!=="undefined"){
        sessionStorage.setItem(firstname,lasname,Email,User.toString());
        alert("Storage Loaded Successfully");
    }else{
        alert("Storage Not Supported 1");
    }

    console.log("firstname"+firstname);
    console.log("lastname"+lastname);
    console.log("Email"+Email);
    console.log("DOB"+DOB);
    //return false;
}
//Javascript Object
function User(firstname,lasname, Email, DOB){
    this.firstname=firstname;
    this.lastname=lastname;
    this.Email=Email;
    this.DOB=DOB;
    this.toString=function(){
        return firstname+" "+lastname+" "+Email+" "+DOB;
    }
}
function Validation() {
    const firstname=document.getElementById("firstname").value;
    if (firstname == "") {
      alert("Name must be filled out");
      return false;
    }
  }