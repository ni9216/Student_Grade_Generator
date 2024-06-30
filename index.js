`Gross Salary: ${grossSalary.toFixed(2)})
    NSSF Deduction: ${nssfDeduction.toFixed(2)}
    NHIF Deduction: ${nhifDeduction.toFixed(2)}
     paye (tax): ${paye.toFixed(2)}
     Net Salary: ${netSalary.toFixed(2)}`
     grossSalary = basicSalary + benefits;
     const
         //calculate NSSF deduction
         const nssfDeduction = Math.min(grossSalary * 0.06, 1800 * 0.06);
     
         //calculate nhifDeduction
         let  nhifDeduction;
         if(grossSalary <= 5999) nhifDeduction = 150;
         else if(grossSalary <= 7999) nhifDeduction =300;
         else if(grossSalary <= 11999) nhifDeduction =400;
         else if(grossSalary <= 14999) nhifDeduction =500;
         else if(grossSalary <= 19999) nhifDeduction =600;
         else if(grossSalary <= 24999) nhifDeduction =750;
         else if(grossSalary <= 29999) nhifDeduction =850;
         else if(grossSalary <= 34999) nhifDeduction =900;
         else if(grossSalary <= 39999) nhifDeduction =950;
         else if(grossSalary <= 44999) nhifDeduction =1000;
         else if(grossSalary <= 49999) nhifDeduction =1100;
         else if(grossSalary <= 59999) nhifDeduction =1200;
         else if(grossSalary <= 69999) nhifDeduction =1300;
         else if(grossSalary <= 79999) nhifDeduction =1400;
         else if(grossSalary <= 89999) nhifDeduction =1500;
         else if(grossSalary <= 99999) nhifDeduction =1600;
         else nhifDeduction =1700;
     
         //calculate PAYE(tax)
         let taxableIncome = grossSalary - nssfDeduction;
         let paye;
         if(taxableIncome <= 24000) {
             paye = taxableIncome * 0.1;
         } else if (taxableIncome <=32333){
             paye = 2400 + (taxableIncome - 24000) * 0.25;
         } else {
             paye = 2400 + 2083.25 + (taxableIncome - 32333) *0.3;
         }
     
         //Net salary calculation
         const netSalary = grossSalary - nssfDeduction - nhifDeduction - paye;
     
         console.log(`GrossSalary: ${grossSalary.toFixed(2)}`);
         console.log(`PAYE: ${paye.toFixed(2)}`);
         console.log(`NHIF Deduction: ${nhifDeduction.toFixed(2)}`);
         console.log(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`);
         console.log(`NetSalary: ${netSalary.toFixed(2)}`);
     
     }
     
     netSalaryCalculator(30000, 5000);