let obj = {
    name:"student",
    course: "FDS",
    accountBalance:10000,
    get balance(){
        console.log(this.accountBalance);
    },
    set updateBalance(value){
        this.accountBalance=value;
    }
}
obj.balance