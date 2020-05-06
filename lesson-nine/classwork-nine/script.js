
$.ajax('employees.json').done(function (response) {
    

    for (let employee of response) {
        if ('employee.inOffice' == true){
            $("#employeeList").addClass("in"); 
        } else {
            $("#employeeList").addClass("out");
        };
    let container = $('<div></div>');
     
    container.append(`
    <ul>${employee.name}</ul>
    `);
    
    $('#employeeList').append(container);
    }
    
    
});