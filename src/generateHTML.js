const generateEmployees = employeeData => {
    var employees = []

    for (let i = 0; i < employeeData.length; i++){
        if(employeeData[i].teamMemberOptions === 'Add Engineer'){
            employees[i] = 
            ` 
            <div class="column is-one-fifth">
                    <div class="box box-title">
                        <h2>${employeeData[i].engineerName}</h2>
                        <h3>Engineer</h4>
                    </div>
                    <div class="box box-body">
                        <table class="table is-bordered">
                            <tbody>
                                <tr>
                                    <th >ID: </th>
                                    <td> ${employeeData[i].employeeID} </td>
                                </tr>
                                <tr>
                                    <th >Email: </th>
                                    <td> <a href="mailto:${employeeData[i].employeeEmail}" target="blank"> ${employeeData[i].employeeEmail} </a></td>
                                </tr>
                                <tr>
                                    <th >Github: </th>
                                    <td> <a href="https://github.com/${employeeData[i].engineerGithub}" target="blank"> ${employeeData[i].engineerGithub} </a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        }
        else {
            employees[i] = 
            ` 
            <div class="column is-one-fifth">
                    <div class="box box-title">
                        <h2>${employeeData[i].internName}</h2>
                        <h3>Intern</h4>
                    </div>
                    <div class="box box-body">
                        <table class="table is-bordered">
                            <tbody>
                                <tr>
                                    <th >ID: </th>
                                    <td> ${employeeData[i].employeeID} </td>
                                </tr>
                                <tr>
                                    <th >Email: </th>
                                    <td> <a href="mailto:${employeeData[i].employeeEmail}" target="blank"> ${employeeData[i].employeeEmail} </a></td>
                                </tr>
                                <tr>
                                    <th >School: </th>
                                    <td> ${employeeData[i].internSchool} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        }
    }
    return employees.join('')
}

function generateHTML(data){
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./stylesheet/bulma.css">
            <link rel="stylesheet" href="./stylesheet/style.css">
            <title>Team Portfolio</title>
    </head>

    <header>
       <h1> My Team </h1>
    </header>

    <body>
            <main class="content columns">
                <div class="column is-one-fifth">
                    <div class="box box-title">
                        <h2>${data.managerName}</h2>
                        <h3>Manager</h4>
                    </div>
                    <div class="box box-body">
                        <table class="table is-bordered">
                            <tbody>
                                <tr>
                                    <th >ID: </th>
                                    <td> ${data.managerID} </td>
                                </tr>
                                <tr>
                                    <th >Email: </th>
                                    <td> <a href="mailto:${data.managerEmail}"> ${data.managerEmail} </a></td>
                                </tr>
                                <tr>
                                    <th >Office Number: </th>
                                    <td> ${data.managerOffice} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                ${generateEmployees(data.employees)}

            </main>
    </body>
    </html>
    `
};

module.exports = generateHTML;