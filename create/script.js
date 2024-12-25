function updateSubBranches() {
    // Get the selected degree
    const degreeSelect = document.getElementById('degree');
    const subBranchSelect = document.getElementById('sub-branch');
    const selectedDegree = degreeSelect.value;

    // Sub-branches for each degree
    const subBranches = {
        bsc: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "Environmental Science"],
        ba: ["English", "History", "Political Science", "Economics", "Sociology", "Philosophy"],
        bcom: ["Accounting", "Finance", "Marketing", "Taxation", "Economics"],
        btech: ["Computer Science", "Indataation Technology", "Electronics", "Mechanical", "Civil", "Electrical"],
        msc: ["Physics", "Mathematics", "Chemistry", "Biotechnology", "Data Science", "Computer Science"],
        ma: ["English", "History", "Political Science", "Psychology", "Economics", "Linguistics"],
        mcom: ["Accounting", "Finance", "Management", "Marketing", "Taxation"],
        mtech: ["Artificial Intelligence", "Machine Learning", "Big Data", "IoT", "Cybersecurity"]
    };

    // Clear existing options
    subBranchSelect.innerHTML = '<option value="" disabled selected>Select a sub-branch</option>';

    // Populate sub-branch options
    if (selectedDegree in subBranches) {
        subBranches[selectedDegree].forEach(branch => {
            const option = document.createElement('option');
            option.setAttribute('value',branch)
            option.value = branch.toLowerCase().replace(/ /g, "_");
            option.textContent = branch;
            subBranchSelect.appendChild(option);
        });

        
    } 
}
const subBranchSelect = document.getElementById('sub-branch');
subBranchSelect.innerHTML = '<option value="" disabled selected>Select a sub-branch</option>';


window.onload = function () {
    // Clear all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);

    // Reset all select dropdowns to the first option
    const selects = document.querySelectorAll('select');
    selects.forEach(select => select.selectedIndex = 0);
};
