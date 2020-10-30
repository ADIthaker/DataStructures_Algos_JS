class Node {
    constructor(data,next=null,prev=null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLL{
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
        let node = new Node(val,this.head,null);
        if(this.head!==null){
            this.head.prev = node;
        }
        this.head = node;
        this.size++;
    }
    insertAtEnd(val){
        if(this.isEmpty()){
            this.insertAtHead(val);
        }
        else{
            let curr = this.head;
            while(curr.next!==null){
                curr=curr.next;
            }
            let node = new Node(val,null,curr);
            curr.next  = node;
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
            current = current.next;
            console.log(current);
        }
        let node = new Node(val,current.next,current);
        current.next = node;
        this.size++;
    }
    deleteAtHead(){
        if(this.isEmpty()){
            console.log('List is Empty!');
        }
        else{
            this.head = this.head.next;
            this.head.prev = null;
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
            while(curr.next!==null){
                curr=curr.next;
            }
            let lastNode = curr.prev;
            lastNode.next = null;
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
        current.prev = current.next.prev;
        current.prev.next = current.next;
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

let ll = new DoubleLL();
ll.insertAtEnd(13);
ll.insertAtEnd(13);
ll.insertAtHead(2);
ll.insertAtHead(1);
ll.insertAtPos(12,1);
ll.deleteAtPos(1);
ll.printList();
