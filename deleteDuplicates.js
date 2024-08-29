class node{
    constractor(data=null,next=null){
     this.data=data
     this.next=value
    }
}
var deleteDuplicates = function(head) {
    let current=head

    while(current && current.next){
        if(current.data===current.next.data){
            current.next=current.next.next
        }else
        {
            current=current.next
        }

    }
return head
};