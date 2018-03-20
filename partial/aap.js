angular.module("app",['ngRoute'])
       .config(config)
       .controller("firstctrl",firstctrl)
       .controller("secondctrl",secondctrl)
       .controller("navCtrl",navCtrl)
function config($routeProvider){

   $routeProvider
    .when("/home",{
    templateUrl:'home.html',
    controller:'firstctrl',
    controllerAs:'first'
    })

    .when("/form",{
        templateUrl:'second.html',
        controller:'secondctrl',
        controllerAs:'second'
        })
}
function navCtrl()
{
    var nav = this 
}


function firstctrl($http)
{
    var first=this

    first.tasks=[]

    $http.get("/home").then(function(results){
        first.tasks=results.data
        console.log(first.tasks)
    })



    first.check=function()
    {   for(var i=0;i<first.tasks.length;i++)
        {
            if(first.tasks[i].username==first.user)
            {
                first.login()

            }
        }
        
    }




    // first.correct=false
   first.login=function()
 {
     return true
// first.user=[] 
// first.user.push({username:"abhi",password:"abhi"})
    // if(first.user=="abhi"&& first.password=="abhi")
    // {
    //     // console.log("bdsjbs")
    //     console.log("correct")
    //     return true
    //     //  $location.path('/form')

    // }
    // else
    // { 
    //     console.log("error")
    //     return false    
    // }
  }


  first.alert=function()
  {
      alert("You have succesfully Sign up Your account now Please login ")
  }





 }


 function secondctrl()
 {
    var second=this
    second.data=[]
 }