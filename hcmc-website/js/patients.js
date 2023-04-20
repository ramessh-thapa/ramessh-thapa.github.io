document.getElementById("btnRegisterPatient")
.addEventListener("click", function(event){
    console.log("test");
    event.preventDefault();
    console.log("test _fdafasd");
    let patientId = document.getElementById("patientIdNumber").value;
    console.log(patientId);
    let firstName = document.getElementById("firstName").value;
    let middleInitials = document.getElementById("middleInitials").value;
    let lastName = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let ddlDepartment = document.getElementById("ddlDepartment");
    let radioIsOutPatientYes = document.getElementById("radioIsOutPatientYes");
    

    let ageDifMs = Date.now() - new Date(dateOfBirth).getTime();
    let ageDate = new Date(ageDifMs); 
    let age =  Math.abs(ageDate.getUTCFullYear() - 1970);

    let newRow = document.createElement("tr");

    if(age < 65){
        newRow.classList.add("young-patient");
    }

    if(!radioIsOutPatientYes.checked ){
        newRow.classList.add("in-patient");
    }
  
    newRow.innerHTML = `
          <td>${patientId}</td>
          <td>${firstName}</td>
          <td>${middleInitials}</td>
          <td>${lastName}</td>
          <td>${dateOfBirth}</td>
          <td>${ddlDepartment}</td>
          <td>${radioIsOutPatientYes.checked ? "Yes" : "No"}</td>
      `;
  
    document.getElementById("tbodyPatientsList").appendChild(newRow);
    document.getElementById("btnReset").click();
});



document.getElementById('chkElderlyPatients')
        .addEventListener('change', (event) => {
            let youngPatients = document.getElementsByClassName("young-patient");
            let isChecked = event.currentTarget.checked;
            let chkShowOutPatients = document.getElementById('chkShowOutPatients');

            for (var i = 0; i < youngPatients.length; i++) {
                if(isChecked){
                    youngPatients[i].classList.add("hide");
                }
                else{
                    if(!youngPatients[i].classList.contains("in-patient") 
                    || (youngPatients[i].classList.contains("in-patient") && !chkShowOutPatients.checked)){
                        youngPatients[i].classList.remove("hide");
                    }
                }
            }
            });

document.getElementById('chkShowOutPatients')
        .addEventListener('change', (event) => {
            let inPatients = document.getElementsByClassName("in-patient");
            let isChecked = event.currentTarget.checked;
            let elderlyChkbox = document.getElementById('chkElderlyPatients');

            for (var i = 0; i < inPatients.length; i++) {
                if(isChecked){
                    inPatients[i].classList.add("hide");
                }
                else{
                    if(!inPatients[i].classList.contains("young-patient") 
                        || (inPatients[i].classList.contains("young-patient") && !elderlyChkbox.checked)){
                            inPatients[i].classList.remove("hide");
                        }
                   
                }
            }
            });