console.log ("hello , FizzBuzz!")

for (let i=1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log("fizzbuzz") 
    }  
    if (i % 3 == 0)
    {
        console.log("fizz");
    }
    else if (i % 5 == 0)
    {
        console.log("buzz")
    }
//    else if (i % 3 && 5 == fizzbuzz)
    else 
    {
        console.log (i);                                    
    }
}
