
            // javascript function to greet theuser
            function greetuser(){
                var name = document.getElementById("name").value;
                if (name) {
                    alert("Hello, " + name + "!");
                }else{
                    alert("Please enter your name.");
                }
            }

            // Javascript function to add two numbers
            function addNumbers(){
                var num1 = parseInt(document.getElementById("num1").value);
                var num2 = parseInt(document.getElementById("num2").value);
                var sum = num1 + num2;
                document.getElementById("result").innerHTML = "the sum is: " + sum;
            }
       