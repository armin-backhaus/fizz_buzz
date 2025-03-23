console.log ("hello , FizzBuzz!")

for (let i=1; i <= 200; i++)
{
    let output = "";
    
    if (i % 3 == 0)
    {
        output += "fizz";
    }

    if (i % 5 == 0)
    {
        output += "buzz"
    }
    
    if (i % 7 == 0)
    {
        output += "zipp"
    }
            
    if ("" == output) 
    {
        output = i;                                    
    }

    console.log(output);
}
