function demo():void{
    console.log("abc");
    let a:HTMLInputElement = <HTMLInputElement>document.getElementById("min");
    let min:number=Number(a.value);
    let b:HTMLInputElement = <HTMLInputElement>document.getElementById("max");
    let max:number=Number(b.value);
    let result:number=Math.floor(Math.random()*(max-min+1))+min;
    let output:HTMLParagraphElement=<HTMLParagraphElement>document.getElementById("result");
    output.innerHTML=String(result);
}
export{};