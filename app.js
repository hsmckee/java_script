// Variable Declaration
let tbody = d3.select("tbody");
// From data.js
const tableData = data;

// Build Table the Table
function buildTable(data){
    // Start By Clearing Existing Data
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        // Append Table Row to the Table Body 
        let row = tbody.append("tr");
        // Iterate Through Values
        Object.values(dataRow).forEach((val) => {
            // add a row
            let cell = row.append("td");
            cell.text(val);
        });
    })
}
// Click the button to trigger the search
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;


    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Filtered Data table
    buildTable(filterData);
}
