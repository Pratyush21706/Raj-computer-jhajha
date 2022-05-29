// 	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//    apiKey: "AIzaSyC5tr4hQMbzcS7TIVDiVpxJKmOG0j1sowA",
//   authDomain: "raj-computers-5c569.firebaseapp.com",
//   projectId: "raj-computers-5c569",
//   storageBucket: "raj-computers-5c569.appspot.com",
//   messagingSenderId: "439187408558",
//   appId: "1:439187408558:web:dbaa2a3da08cfd7b7b8f3f"
// };
// 	firebase.initializeApp(firebaseConfig);
// render();
// function render(){
// 	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
// 	recaptchaVerifier.render();
// }
// 	// function for send message
// function phoneAuth(){
// 	var number = document.getElementById('number').value;
// 	firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
// 		window.confirmationResult = confirmationResult;
// 		coderesult = confirmationResult;
// 		document.getElementById('sender').style.display = 'none';
// 		document.getElementById('verifier').style.display = 'block';
// 	}).catch(function(error){
// 		alert(error.message);
// 	});
// }
// 	// function for code verify
// function codeverify(){
// 	var code = document.getElementById('verificationcode').value;
// 	coderesult.confirm(code).then(function(){
// 		document.getElementsByClassName('p-conf')[0].style.display = 'block';
// 		document.getElementsByClassName('n-conf')[0].style.display = 'none';
// 	}).catch(function(){
// 		document.getElementsByClassName('p-conf')[0].style.display = 'none';
// 		document.getElementsByClassName('n-conf')[0].style.display = 'block';
// 	})
// }
