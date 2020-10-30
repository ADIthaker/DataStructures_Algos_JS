const MAX = 5;
class CircularQ {
    constructor(){
        this.items = [];
        this.front = -1;
        this.end = -1;
        this.size = 0;
    }
    isEmpty(){
        return this.size===0; 
    }
    enqueue(val){
        if(this.isEmpty())
        {
            this.front = 0;
            this.end = 0;
            this.items.push(val);
            this.size++;
            return;
        }
        else if(this.front===0 && this.end===MAX-1){
            console.log("QUEUE OVERFLOW");
            return;
        }
        this.items[(this.end+1)%MAX]=val;
        if(this.front<=this.end ){
            this.end = (this.end+1)% MAX;
        }
        else if(this.end<this.front){
            this.front = (this.front-1)%MAX;
        }
        this.size++;
        
    }
    getFront(){
        return this.items[this.front];
    }
    dequeue(){
        if(this.isEmpty()){
            console.log('Empty QUEUE');
        }
        else if(this.end<=MAX-1){
            this.size--;
            this.items[this.front] = 0;
            this.front++;
        }
        else if(this.front>this.end){
            this.size--;
            this.items[this.rear] = 0;
            this.rear--;
        }
    }
    print(){
        if(this.isEmpty()){
            console.log('Empty');
            return;
        }
        if(this.front<=this.end){
            for (let i=this.front;i<=this.end;i++){
                console.log(this.items[i]);
            }
        }
        else{
            for(let i =this.front;i<MAX;i++){
                console.log(this.items[i]);
            }
            for(let i = 0;i<=this.end;i++){
                console.log(this.items[i]);
            }
        }
    }
}
const q = new CircularQ();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.dequeue();
console.log(q.getFront());
q.print();