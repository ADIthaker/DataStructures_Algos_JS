class Stack{
    constructor(){
        this.size=0;
        this.items = [];
    }
    insert(val){
        this.items.unshift(val);
        this.size++;
    }
    pop(val){
        return this.items.pop();
    }
    peek(){
        return this.items[0];
    }
    print(){
        this.items.forEach(i=>console.log(`${i} `));
    }
}