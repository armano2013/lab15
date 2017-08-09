
var app = angular.module("myApp");
app.controller('myCtrl', function($scope) {
        $scope.pictures = {
        waterfall : 'pictureView1.jpg',
        waterpic: 'pictureView2.jpg',
       
    };

   
});

for (var i=1;i<101;i++){

  if(i%15===0){//busca todos los numeros divisibles entre 15
    console.log('FizzBuzz');//y los reemplaza con FizzBuzz

  }else if(i%3===0){// busca todos los numeros divisibles entre 3
    console.log ('Fizz');//y los reemplaza con Fizz

  }else if (i%5===0){// busca todos los numeros divisibles entre 5
    console.log('Buzz');//y los reemplaza con Buzz

    }else{
      console.log(i);
  }

