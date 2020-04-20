const Queue = require('./queue')

function main() {
    let smashBrosQ = new Queue

    smashBrosQ.enqueue('Mario');
    smashBrosQ.enqueue('Link');
    smashBrosQ.enqueue('Kirby');
    smashBrosQ.enqueue('Pikachu');
    smashBrosQ.enqueue('Donkey Kong');
    smashBrosQ.enqueue('Samus');
    smashBrosQ.enqueue('Fox');
    smashBrosQ.enqueue('Marth');


    console.log(`Peek at top: `, peek(smashBrosQ))
    console.log(`Is Empty: `, isEmpty(smashBrosQ))

    smashBrosQ.dequeue('Mario')    
    smashBrosQ.dequeue('Link')   
    console.log(display(smashBrosQ))
}
main()

function peek(queue){
    if (queue.first === null) {
        return 'Queue is empty'
    }
    return queue.first.value
}

function isEmpty(queue){
    if (queue.first === null) {
        return true
    }
    return false
}

function display(queue){
    if (!queue.first) {
        return null
    }

    let currNode = queue.first
    let i = 0

    while (currNode !== null){
        console.log(`Display ${i}: `, currNode.value)
        currNode = currNode.next
        i++
    }
}


function doubleQueue() {
    let smashBrosQQ = new QueueDLL()

    smashBrosQQ.enqueue('Mario');
    smashBrosQQ.enqueue('Link');
    smashBrosQQ.enqueue('Kirby');
    smashBrosQQ.enqueue('Pikachu');
    smashBrosQQ.enqueue('Donkey Kong');
    smashBrosQQ.enqueue('Samus');
    smashBrosQQ.enqueue('Fox');
    smashBrosQQ.enqueue('Marth');

    console.log(`First in DLLQueue: `, peek(smashBrosQQ))

}
doubleQueue()