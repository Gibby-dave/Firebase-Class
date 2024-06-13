 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { 
    getDatabase,
    ref,
    set,

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyBgaX9KBdRNiofZahXhJwWCqsYyaxpSR1s",
    authDomain: "fir-first-class-9bbfc.firebaseapp.com",
    databaseURL: "https://fir-first-class-9bbfc-default-rtdb.firebaseio.com",
    projectId: "fir-first-class-9bbfc",
    storageBucket: "fir-first-class-9bbfc.appspot.com",
    messagingSenderId: "1070095959880",
    appId: "1:1070095959880:web:34c005965108f1f3e1957d",
    
  };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   // Initialize Realtime Database and get a reference to the service

   const db = getDatabase(app);


 let productName = document.getElementById("productName");
 let productPrice = document.getElementById("productPrice");
 let productDescription = document.getElementById("productDescription");
 let productCategory = document.getElementById("productCategory");
 let productImage = document.getElementById("productImage");
 let submitButton = document.getElementById("submitButton");
 let productForm = document.getElementById("form");
 let selectedImage = "";


 productImage.addEventListener("change", function (ev){
    let file = ev.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () =>{
        console.log ("Selected Image : ", reader.result);
        selectedImage = reader.result;
    };
    reader.readAsDataURL(file);
 })

 submitButton.addEventListener("click", function (ev){
    ev.preventDefault();
    let productDetails = {
        productName: productName.value,
        productDescription: productDescription.value,
        productCategory: productCategory.value,
        productPrice: productPrice.value,
        productImage: selectedImage,
    };
    console.log("product Details : ",productDetails);

    set (ref(db,"Product/" + productDetails.productName), productDetails)
        .then(()=>{
            alert("It has been successfully Submitted");
            productForm.reset();
        })
    .catch((error)=>{
        console.log("Error Posting Product:", error)
    });
});
