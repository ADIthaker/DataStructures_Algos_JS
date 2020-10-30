class Deque{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items===0;
    }
    enqueue(val){
        this.items.push(val);
    }
    insert_front(val){
        this.items.unshift(val);
    }
    dequeue(){
        return this.items.shift();
    }
    delete_back(){
        return this.items.pop();
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
let q = new Deque();
q.enqueue(2);
q.insert_front(1);
q.enqueue(3);
q.delete_back();
q.print();
console.log("Front of queue:",q.front());