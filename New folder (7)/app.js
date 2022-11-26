//chapter  21
// var input =prompt("type your name");
// input =input.toUpperCase();
// console.log(input);

//  var input =prompt("type your name");
// var firstletter = input.slice(0,1).toUpperCase();
// var lower =input.slice(1,input.length).toLowerCase();
// alert(firstletter+lower)

// chapter 22
// var newInput =prompt("Enter any Word")
// var lastCharachter=newInput.slice(newInput.length-1,newInput.length)
// console.log(lastCharachter);

// var mobile = prompt("Your Favourite Mobile Brand");
// alert("your mobile brand  length is " +mobile.length);

//chapter 23
// var country =("Pakistani");
// var  name =country.indexOf("n");
// alert(name);

// var enterdata =prompt("Enter Your Username")
// var datatype =enterdata.indexOf("@") ;
// if(datatype !== -1){
//     prompt("please enter a valid user name")
// }

// var string =("The quick brown fox jumps over the lazy dog”");
// var find =string.indexOf("The");
// console.log(find);


// chapter 24
// var index = ("Pakistani")
// var fine =(index.charAt(3));
// document.write(fine);

// var text =("Hyderabad");
// var newtext =(text.replace("Hyder","Islam"))
// document.write(newtext);

//  var text = ("Ali and Sami are best friends. They play cricket and football together");
//  var newtext =(text.replace(/and/g,"&"))
//  document.write(newtext);


// chapter 25
//  var value1 =prompt("enter your number");
//  document.write(value1);

// var value2 =prompt("Enter Your Number");
// newvalues = Math.round(value2);
//  document.write(newvalues);

// var value3 =prompt("Enter Your Number"); 
// newvaluess = Math.ceil(value3);
//  document.write(newvaluess);

//  var value4 =prompt("Enter Your Number");
//  newvaluesss = Math.floor(value4);
//  document.write(newvaluesss);

// chapter 26
// var number = (Math.random());
// var extra = (number * 6) +1 ;
// var round = Math.floor(extra);
// console.log(round);


//  var number = (Math.random());
//  var extra = (number * 2) +1 ;
//  var round = Math.floor(extra); 
//   if ( round == 2 ){
//      document.write("Tails");
//   }else  document.write("heads"); 

// var input = prompt("enter your lucky number from 1 to 10");
// var number = (Math.random());
// var another =(number * 10) + 1;
// var round = Math.floor(another);
// if (input == round){
//     alert("Congrajulation U Win");
// }


// chapter 28
//  var input = prompt("Please enter your Weight");
//  var weight = parseInt(input);
// // var final =weight + " kgs";
// document.write(final,(weight));


//chapter 29
// var number = ("272");
// var second = Number(number);
// document.write(second,typeof(second));

// var numbertonumber =5736;
// var numbertostring =numbertonumber.toString();
// document.write(numbertostring);

//chapter 30
// var percentage = (30 / 45 * 100);
// var newpercent =percentage.toFixed(2);
// document.write(newpercent); 

// chapter 31 to 34
// var date = new Date();
// document.write(date);

// var month = ["January","Feburary","March","April","May","June","July","August","September","October","november","december"]
// var  now =new Date();
// var themonth = now.getMonth();
// var presentmonth =month[themonth];
// document.write(presentmonth);

// var day = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat",];
// var  now =new Date();
// var theday = now.getDay();
// var presentday =day[theday];
// document.write(presentday);

//  var day = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat",];
//  var  now =new Date();
//  var theday = now.getDay();
//  var presentday =day[theday];
// if (presentday == "Sat","Sun"){
//     document.write("its fun Day")
// }else document.write("its working day");

// var date = new Date();
// var current =date.getDate();
// if (current < 16 ){
// document.write("first fifteen days of the month")
// }else document.write("the last days  of the month");

// var time = new Date();
// var current =time.getHours();
// if (current >=12 ){
//     document.write("PM")
//     }else document.write("AM");

// var oldate =new Date ("december30,2020");
// document.write(oldate);

