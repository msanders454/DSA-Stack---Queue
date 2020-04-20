const Stack = require('./stack');


const smashbros = new Stack();
starTrek.push('Mario');
starTrek.push('Link');
starTrek.push('Kirby');
starTrek.push('Pikachu');
starTrek.push('Donkey Kong');
starTrek.push('Samus');
starTrek.push('Fox');
starTrek.push('Marth');


const peek = stack => {
    if(stack.top === null){return null}
    return stack.top.data
}

const isEmpty = stack => {
    return stack.top === null
}

const display = stack => { 
    let current = stack.top;
    while (current !== null) { 
        console.log(current.data);
        current = current.next;
    }
 }



starTrek.pop();
starTrek.pop();


function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const chars = new Stack();
    for(let i = 0; i < s.length; i++){
        chars.push(s[i]);
    }

    let palandrome = true;
    let i = 0
    while(chars.top !== null){
        const char = chars.pop();
        if(char !== s[i]){
            palandrome = false;
            break; 
        }
        i++
    }
    return palandrome
}

const sort = stack => {
    const newStack = new Stack();

    while(!isEmpty(stack)){
        
        if(isEmpty(newStack)){
            
            newStack.push(stack.pop())
        }else if(peek(stack) <= peek(newStack)){
           
            newStack.push(stack.pop())
        }else if(peek(stack) > peek(newStack)){
            const tempVar = stack.pop();
           
            while(!isEmpty(newStack) && tempVar > peek(newStack)){
                
                stack.push(newStack.pop())
            }
            newStack.push(tempVar)
        }

        
    }

    return newStack
}


function matchingParentheses(s) {
    const parens = new Stack();
    for (let i = 0; i < s.length; i++) { 
        if (s[i] === "(") {
            parens.push({
                data: s[i],
                index: i});
        }
        else if (s[i] === ")") { 
            try {
                parens.pop();
            }
            catch(error) { 
                return "Open parentheses at char " + i
            }
            
        }
        
    }
    if (parens.top !== null) { 
        return "Open parentheses at " + parens.top.data.index;
    }
    return "Matching parentheses"
  
}
let numStack = new Stack()
numStack.push(3)
numStack.push(4)
numStack.push(2)
numStack.push(5)
numStack.push(1)
numStack.push(7)
numStack = sort(numStack)
display(numStack)
