let a = 9;
console.log("握草"+a);

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
