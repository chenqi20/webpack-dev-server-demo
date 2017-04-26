let a = 9;
console.log(a);

class Air{
    constructor(){
        this.name = "chenqi";
        this.fetchPage();
    }
    fetchPage(){
        console.log(this.name)
    }
}
new Air();
