/*function getBMI(mass, height){
    let BMI;
    BMI = mass/height**2;
    return BMI;

}

const M_mass = 78;
const M_height = 1.69;

const J_mass = 2;
const J_height = 1.95;

const Mark_BMI = getBMI(M_mass, M_height);
const John_BMI = getBMI(J_mass, J_height);

Mark_BMI>John_BMI?console.log("Mark has higher BMI"):console.log("John has higher BMI");
*/

/*
tip=[];
total=[];
function CalcTip(bill){
    bill>50 && bill<300? tip.push(bill*=0.15):tip.push(bill*=0.20); 

    bill>50 && bill<300? total.push(bill=bill+(bill*0.15)):total.push(bill=bill+(bill*0.20)); 
}

CalcTip(260);
CalcTip(300);
CalcTip(700);
CalcTip(680);
CalcTip(540);
console.log(tip);
console.log(total);
*/

 bills=[22,295,176,440,37,105,10,1100,86,52];


 tips=[];
 totals=[];

function CalcTip(bill){
    bill>50 && bill<300? tips.push(bill*0.15):tips.push(bill*0.20); 

    bill>50 && bill<300? totals.push(bill=bill+(bill*0.15)):totals.push(bill=bill+(bill*0.20)); 
}

    for(let i=0; i<bills.length;i++){
        CalcTip(bills[i]);
 
    }

console.log("Bills =",bills);
console.log("Tips =",tips);
console.log("Total =",totals);


function calcAvarage(arr){
    var sum=0;
    for(i=0;i<arr.length;i++){
        sum=arr[i]+sum;
    }

    let avarage = sum/arr.length;
    return avarage;
}

console.log("Total avarage =",calcAvarage(totals));