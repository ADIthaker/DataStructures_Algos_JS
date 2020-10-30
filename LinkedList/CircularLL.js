class Node {
    constructor(data,next=null,prev=null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
class CircularLL{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        if(this.size===0){
            return true;
        }
        return false;
    }
    insertAtHead(val){
        if(this.head===null){
            let node = new Node(val);
            this.head = node;
            node.prev = this.head;
            node.next = this.head;
            this.size++;
            return;
        } 
        let node = new Node(val,this.head,this.head.prev);
        this.head.prev.next = node;
        this.head.prev = node;
        this.head = node;
        this.size++;
    }
    insertAtEnd(val){
        if(this.isEmpty()){
            this.insertAtHead(val);
        }
        else{
            let curr = this.head;
            while( curr.next!==null && curr.next!==this.head){
                curr=curr.next;
            }
            let node = new Node(val,curr.next,curr);
            curr.next.prev = node;
            curr.next = node;
            curr.next = node;
        }
        this.size++;
    }
    insertAtPos(val,pos){
        if(pos > this.size){
            return null;
        }
        if(this.isEmpty()){
            this.insertAtHead(val);
            return;
        }
        if(pos===0 || (pos===this.size && this.size===0)){
            this.insertAtHead(val);
            return;
        }
        if(pos===this.size){
            this.insertAtEnd(val);
            return;
        }
        let current = this.head;
        let cnt = 0;
        while(cnt!==pos-1){
            cnt++;
            current = current.next; //current is the one with already the given index-1.
            console.log(current);
        }
        let node = new Node(val,current.next,current);
        current.next.prev = node; 
        current.next = node;
        this.size++;
    }
    deleteAtHead(){
        if(this.isEmpty()){
            console.log('List is Empty!');
        }
        else{
            let curr = this.head;
            let newHead =  curr.next;
            newHead.prev = curr.prev;
            curr.prev.next = newHead;
            this.head = newHead;
            this.size--;
        }
    }
    deleteAtEnd(){
        if(this.isEmpty()){
            console.log('List is Empty!');
        }
        else if(this.size===1){
            this.deleteAtHead();
            this.size--;
        }
        else{
            let curr = this.head;
            while(curr.next!==null && curr.next!==this.head){
                curr=curr.next;
            }
            let lastNode = curr.prev;
            lastNode.next = curr.next;
            lastNode.next.prev = lastNode;
            this.size--;
        }
    }
    deleteAtPos(pos){
        if(pos > this.size){
            return null;
        }
        if(pos===0 || (pos===this.size && this.size===0)){
            this.deleteAtHead();
            return;
        }
        if(pos===this.size){
            this.deleteAtEnd();
            return;
        }
        let current = this.head;
        let cnt = 0;
        while(cnt!==pos){
            cnt++;
            current = current.next;
        }
        current.next.prev = current.prev;
        current.prev.next = current.next;
        this.size--;
    }
    printList(){
        let current = this.head;
        while(current.next !== this.head ){
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data);
    }
}
const ll = new CircularLL();
ll.insertAtHead(3);
ll.insertAtHead(2);
ll.insertAtPos(1,1)
ll.deleteAtPos(1);
ll.printList();
//console.log(ll.head.next);