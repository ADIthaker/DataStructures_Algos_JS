class Queue{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items===0;
    }
    enqueue(val){
        this.items.push(val);
    }
    dequeue(){
        return this.items.shift();
    }
    front(){
        if(this.isEmpty()){
            console.log('Empty Queue');
            return null;
        }
        return this.items[0];
    }
    print(){
        this.items.forEach(i=>console.log(`${i} `));
    }
}
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.print();
console.log("Front of queue:",q.front());