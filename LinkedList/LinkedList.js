class Node {
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}
class SinglyLinkedList {
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        if(size===0){
            return true;
        }
        return false;
    }
    insertAtHead(val){
        this.head = new Node(val, this.head);
        this.size++;
    }
    insertAtEnd(val){
        let current = this.head;
        let node = new Node(val);
        if(!this.head){
            this.head = node;
        }
        else{
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAtPos(pos, val){ // after insert element is at (pos)th position
        if(pos > this.size){
            return null;
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
            current = current.next;
        }
        let node = new Node(val,current.next);
        current.next = node;
        this.size++;
    }
    deleteAtHead(){
        if(!this.head || this.size===0){
            console.log('List is empty');
            return;
        }
        this.head = this.head.next;
        this.size--;
    }
    deleteAtEnd(){
        if(!this.head || this.size===0){
            console.log('List is empty');
            return;
        }
        let current = this.head;
        let previous;
        while(current.next){
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
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
        let previous;
        while(cnt!==pos){
            cnt++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;
    }
    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}
const ll = new SinglyLinkedList();
ll.insertAtHead(11);
ll.insertAtHead(10);
ll.insertAtEnd(12);
ll.insertAtEnd(14);
ll.insertAtPos(1,13);
ll.deleteAtPos(2);
ll.printList();
console.log("Size:",ll.size);