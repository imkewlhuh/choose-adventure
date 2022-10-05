let answer = prompt("Where would you like to go for vacation? Type 'cold' OR 'hot'.")
if (answer.toLowerCase() === 'cold') {
    answer = prompt("Would you rather go to Alaska or Canada? Type 'Alaska' OR 'Canada'.")
    if (answer.toLowerCase() === 'alaska') {
        answer = prompt("Do you want to go skiing or visit an igloo? Type 'skiing' OR 'igloo'.")
        if (answer.toLowerCase() === 'skiing') {
            alert("You fell so many times.")
        } else if (answer.toLowerCase() === 'igloo') {
            alert("There was a friendly penguin inside.")
        }
    } else if (answer.toLowerCase() === 'canada') {
        answer = prompt("Do you want to get maple syrup or visit Toronto? Type 'syrup' OR 'Toronto'.")
        if (answer.toLowerCase() === 'syrup') {
            alert("It was delicious.")
         } else if (answer.toLowerCase() === 'toronto') {
            alert("Drake was there. You still didn't see him.")
         }
        }
    } else if (answer.toLowerCase() === 'hot') {
        answer = prompt("Would you rather go to Florida or Mexico? Type 'Florida' OR 'Mexico'.") 
        if (answer.toLowerCase() === 'florida') {
            answer = prompt("Do you want to hit the beach or party in Miami? Type 'beach' OR 'Miami'.")
            if (answer.toLowerCase() === 'beach') {
                alert("It started raining.")
            } else if (answer.toLowerCase() === 'miami') {
                alert("Yo is that Bad Bunny in the VIP?")
            }
        } else if (answer.toLowerCase() === 'mexico') {
            answer = prompt("Do you want to stay at the resort or explore into town? Type 'resort' OR 'town'.") 
            if (answer.toLowerCase() === 'resort') {
                alert("You had a blast.") 
            } else if (answer.toLowerCase() === 'town') {
                alert("You were kidnapped and never heard from again.")
            }
        }
    }