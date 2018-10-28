$(document).ready(function() 
{    $("#results").click(function() {                

if (!$("input[@name=q1]:checked").val() ||            
!$("input[@name=q2]:checked").val() ||            
!$("input[@name=q3]:checked").val() ||            
!$("input[@name=q4]:checked").val() ||            
!$("input[@name=q5]:checked").val() ||            
!$("input[@name=q6]:checked").val() ||            
!$("input[@name=q7]:checked").val() ||            
!$("input[@name=q8]:checked").val() ||            
!$("input[@name=q9]:checked").val() ||            
!$("input[@name=q10]:checked").val()            
) {            
alert("You're not done yet!");        
}        

else {            
var prob2 = "2";            
var prob3 = "3";            
var prob4 = "4";            
var prob5 = "5";            
var prob6 = "6";            
var prob7 = "7";            
var prob8 = "8";            
var prob9 = "9";            
var prob10 = "10";            
var prob11 = "None";            
            

var cat1 = ($("input[@name=q1]:checked").val() != "a"); 
           
var cat2 = ($("input[@name=q2]:checked").val() != "b");  

var cat3 = ($("input[@name=q3]:checked").val() != "c");  

var cat4 = ($("input[@name=q4]:checked").val() != "d");  

var cat5 = ($("input[@name=q5]:checked").val() != "a"); 

var cat6 = ($("input[@name=q6]:checked").val() != "b");  

var cat7 = ($("input[@name=q7]:checked").val() != "c"); 

var cat8 = ($("input[@name=q8]:checked").val() != "d");  

var cat9 = ($("input[@name=q9]:checked").val() != "a"); 

var cat10 = ($("input[@name=q10]:checked").val() != "b");  

var cat11 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5 && !cat6 && !cat7 && !cat8 && !cat9 && !cat10); 
var quiz = [];                        

if (cat1) { quiz.push(prob1) };            
if (cat2) { quiz.push(prob2) };            
if (cat3) { quiz.push(prob3) };            
if (cat4) { quiz.push(prob4) };            
if (cat5) { quiz.push(prob5) };            
if (cat6) { quiz.push(prob6) };           
if (cat7) { quiz.push(prob7) };            
if (cat8) { quiz.push(prob8) };            
if (cat9) { quiz.push(prob9) };            
if (cat10) { quiz.push(prob10) };            
if (cat11) { quiz.push(prob11) };                        

var wrong = 'You answered the following questions incorrectly: ' + quiz.join(', ') + '';                     
$("#categorylist").text(wrong);                        
$("#categorylist").show("slow");            

if (cat1) { $("#category1").show("slow"); };            
if (cat2) { $("#category2").show("slow"); };            
if (cat3) { $("#category3").show("slow"); };            
if (cat4) { $("#category4").show("slow"); };            
if (cat5) { $("#category5").show("slow"); };            
if (cat6) { $("#category6").show("slow"); };            
if (cat7) { $("#category7").show("slow"); };            
if (cat8) { $("#category8").show("slow"); };            
if (cat9) { $("#category9").show("slow"); };            
if (cat10) { $("#category10").show("slow"); };            
if (cat11) { $("#category11").show("slow"); };
{ $("#closing").show("slow"); };
}
});});