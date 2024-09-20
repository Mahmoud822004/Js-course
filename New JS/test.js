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


