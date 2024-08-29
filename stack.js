class stack{
    constructor(){
        this.item=[];
        this.counter=0
    }
    push(item){
     this.item[this.counter]=item
     console.log(`value   ${item} position ${ this.counter}`)
     this.counter++

    }
    pop(){
        if(this.counter ==0 )return
      let remove=  this.item[this.counter-1]
      this.counter--
      console.log(remove)
      return remove
   
    }
    stackLength(){
    console.log(this.counter)
    }
}

var news= new stack
news.push(1)
news.pop()
news.push(2)
news.stackLength()