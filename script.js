const calcy = () =>{
    let cd= document.getElementById ('cd').value;
    let ml= document.getElementById ('ml').value;
    let iot= document.getElementById ('iot').value;
    let wc= document.getElementById ('wc').value;
    let grades = "";
    
    let totalGrades = parseFloat(cd) + parseFloat(ml) + parseFloat(iot) + parseFloat(wc);
    alert(totalGrades);
    
    let parc = (totalGrades/400) * 100;
    alert(parc);

    if(parc <= 100  && parc >= 80){
        grades = 'A';
      }
       else if(parc <= 79  && parc >= 60){
           grades = 'B';
       }
       else if(parc <= 59  && parc >= 33){
           grades = 'C';
       }
       else{
           grades = 'F';
       }
       document.getElementById('showdata').innerHTML = `Out of 400 ypur total is ${totalGrades} amd your percentage is ${parc}%.  <br> Your grades is ${grades}.`
    }