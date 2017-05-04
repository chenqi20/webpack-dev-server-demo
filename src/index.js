let a = 9;
console.log("握草"+a);

class Air{
    constructor(){
        this.name = "chenqi";
        this.fetchPage();
    }
    fetchPage(){
        this.test(...{
            a:"chenqi",
            b:"25"
        })
    }
    test(param){
        console.log(param);
    }
}
new Air();
