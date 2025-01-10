function updateSubBranches() {
    // Get the selected degree
    const degreeSelect = document.getElementById('degree');
    const subBranchSelect = document.getElementById('sub-branch');
    const selectedDegree = degreeSelect.value;

    // Sub-branches for each degree
    const subBranches = {
        BSC: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "Environmental Science"],
        BA: ["English", "History", "Political Science", "Economics", "Sociology", "Philosophy"],
        BCom: ["Accounting", "Finance", "Marketing", "Taxation", "Economics"],
        BTech: ["Computer Science", "Indataation Technology", "Electronics", "Mechanical", "Civil", "Electrical"],
        MSC: ["Physics", "Mathematics", "Chemistry", "Biotechnology", "Data Science", "Computer Science"],
        MA: ["English", "History", "Political Science", "Psychology", "Economics", "Linguistics"],
        MCom: ["Accounting", "Finance", "Management", "Marketing", "Taxation"],
        MTech: ["Artificial Intelligence", "Machine Learning", "Big Data", "IoT", "Cybersecurity"]
    };

    // Clear existing options
    //subBranchSelect.innerHTML = '<option value="" disabled selected>Select a sub-branch</option>';

    // Populate sub-branch options
    if (selectedDegree in subBranches) {
        subBranches[selectedDegree].forEach(branch => {
            const option = document.createElement('option');
            option.setAttribute('value', branch)
            option.value = branch.toLowerCase().replace(/ /g, "_");
            option.textContent = branch;
            subBranchSelect.appendChild(option);
        });


    }
}
//const subBranchSelect = document.getElementById('sub-branch');
//subBranchSelect.innerHTML = '<option value="" disabled selected>Select a sub-branch</option>';


//window.onload = function () {
//    // Clear all checkboxes
//    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//    checkboxes.forEach(checkbox => checkbox.checked = false);
//
//    // Reset all select dropdowns to the first option
//    const selects = document.querySelectorAll('select');
//    selects.forEach(select => select.selectedIndex = 0);
//
//    document.getElementById('file-upload').value=''
//};

const data = document.querySelectorAll("data"),
    nextBtn = data[0].querySelector(".nextBtn"),
    subBtn = data[1].querySelector('.submit'),
    backBtn = data[1].querySelector(".backBtn"),
    allInputs = data[0].querySelectorAll(".first input, .first select"), // Target all inputs and selects in `.first`
    allInputs2 = data[1].querySelectorAll(".second input , .second select , .second textarea")
    let check_box;

subBtn.addEventListener("click", (event) => {
    let checks = 0;
    let open = true;

    allInputs2.forEach(input => {


        if (open == false) {
            input.classList.remove('err')
            return;
        }
        else if (input.tagName === "TEXTAREA") {
            if (input.value.length < 180 || input.value.length > 300) {
                input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                input.focus();
                input.classList.add('err')
                open = false
            }
        }
        else if (input.value.trim() === "") {
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            input.focus();
            input.classList.add('err')
            open = false;
            return;
        }

    });


    if (open) {
        submit()
    }
});

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
nextBtn.addEventListener("click", (event) => {
    let checks = 0;
    let open = true;
    const checkboxes = data[0].querySelectorAll('input[type="checkbox"]');
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    check_box =  check_box = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    allInputs.forEach(input => {
        if (input.getAttribute('type') === 'email' && open == true) {
            if (!emailRegex.test(input.value)) {
                input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                input.focus();
                input.classList.add('err')
                open = false
                return;
            }
        }
        else if (input.getAttribute('type') === 'number' && open == true) {

            if (input.value.length !== 10) {
                input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                input.focus();
                input.classList.add('err')
                open = false
                return;
            }
        }
        else if (input.getAttribute('type') === 'checkbox' && checkedCount < 3 && open == true) {
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            input.focus();
            data[0].querySelector('.checkBox').classList.add('err');
            open = false
            return;
        }
        else if (open == false) {
            input.classList.remove('err')
            return;
        }
        else if (input.value.trim() === "") {
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            input.focus();
            input.classList.add('err')
            open = false;
            return;
        }

    });


    if (open) {
        data[0].classList.remove('active')
        data[1].classList.add('active')
    }
});

allInputs2.forEach(input => {
    input.addEventListener('input', () => {
        // For inputs that are not empty, perform individual validations
        if (input.value.trim() !== "" || (input.tagName === "SELECT" && input.value !== "") || (input.tagName === "TEXTAREA" && input.value !== "")) {
            // For number input, ensure the length is exactly 10
            if (input.tagName === 'TEXTAREA') {
                if (input.value.length < 180 || input.value.length > 300) {
                    input.classList.add('err');
                } else {
                    input.classList.remove('err');
                }
            }
            else if (input.tagName === 'SELECT') {
                if (input.value === "") {
                    input.classList.add('err');
                } else {
                    input.classList.remove('err');
                }
            }
            // For other types of inputs (text, password, etc.), just remove error if not empty
            else {
                input.classList.remove('err');
            }
        } else {
            // If input is empty or unselected, add the error class
            input.classList.add('err');
        }
    });

});
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        // For inputs that are not empty, perform individual validations
        if (input.value.trim() !== "" || (input.tagName === "SELECT" && input.value !== "")) {
            // For number input, ensure the length is exactly 10
            if (input.getAttribute('type') === 'number') {
                if (input.value.length !== 10) {
                    input.classList.add('err');
                } else {
                    input.classList.remove('err');
                }
            }
            // For email input, validate the email format
            else if (input.getAttribute('type') === 'email') {
                if (emailRegex.test(input.value)) {
                    input.classList.remove('err');
                } else {
                    input.classList.add('err');
                }
            }
            else if (input.getAttribute('type') === 'checkbox') {
                const checkboxes = data[0].querySelectorAll('input[type="checkbox"]');

                const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
                if (checkedCount < 3) {
                    data[0].querySelector('.checkBox').classList.add('err');
                }
                else {
                    data[0].querySelector('.checkBox').classList.remove('err');
                }

            }
            // For select input, ensure a valid value has been selected
            else if (input.tagName === 'SELECT') {
                if (input.value === "") {
                    input.classList.add('err');
                } else {
                    input.classList.remove('err');
                }
            }
            // For other types of inputs (text, password, etc.), just remove error if not empty
            else {
                input.classList.remove('err');
            }
        } else {
            // If input is empty or unselected, add the error class
            input.classList.add('err');
        }
    });
});
backBtn.addEventListener("click", () => {
    data[1].classList.remove('active')
    data[0].classList.add('active')
});
function updateDistricts() {
    // Get the selected state
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const selectedState = stateSelect.value;

    // Districts for each state/UT
    const districtsByState = {
        andhra_pradesh: ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "Kadapa"],
        arunachal_pradesh: ["Anjaw", "Changlang", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Tawang", "Tirap", "Upper Dibang Valley", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],
        assam: ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
        bihar: ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran (Motihari)", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur (Bhabua)", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger (Monghyr)", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia (Purnea)", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
        chhattisgarh: ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada (South Bastar)", "Dhamtari", "Durg", "Gariyaband", "Gaurela Pendra Marwahi", "Janjgir-Champa", "Jashpur", "Kabirdham (Kawardha)", "Kanker (North Bastar)", "Kondagaon", "Korba", "Koriya (Korea)", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
        goa: ["North Goa", "South Goa"],
        gujarat: ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha (Palanpur)", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang (Ahwa)", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda (Nadiad)", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada (Rajpipla)", "Navsari", "Panchmahal (Godhra)", "Patan", "Porbandar", "Rajkot", "Sabarkantha (Himmatnagar)", "Surat", "Surendranagar", "Tapi (Vyara)", "Vadodara", "Valsad"],
        haryana: ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram (Gurgaon)", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
        himachal_pradesh: ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul & Spiti", "Mandi", "Shimla", "Sirmaur (Sirmour)", "Solan", "Una"],
        jharkhand: ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela-Kharsawan", "Simdega", "West Singhbhum"],
        karnataka: ["Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum (Belagavi)", "Bellary (Ballari)", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru (Chikmagalur)", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Gulbarga (Kalaburagi)", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore (Mysuru)", "Raichur", "Ramanagara", "Shimoga (Shivamogga)", "Tumkur (Tumakuru)", "Udupi", "Uttara Kannada (Karwar)", "Vijayapura (Bijapur)", "Yadgir"],
        kerala: ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
        madhya_pradesh: ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
        maharashtra: ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
        manipur: ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
        meghalaya: ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri-Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
        mizoram: ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
        nagaland: ["Chumoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Noklak", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
        odisha: ["Angul", "Balangir", "Balasore (Baleswar)", "Bargarh (Baragarh)", "Bhadrak", "Boudh (Bauda)", "Cuttack", "Debagarh (Deogarh)", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghapur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar (Keonjhar)", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur (Sonepur)", "Sundergarh"],
        punjab: ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Pathankot", "Patiala", "Rupnagar (Ropar)", "S.A.S. Nagar (Mohali)", "Sangrur", "Shaheed Bhagat Singh Nagar (Nawanshahr)", "Sri Muktsar Sahib", "Tarn Taran"],
        rajasthan: ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
        sikkim: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
        tamil_nadu: ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi (Tuticorin)", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
        telangana: ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhoopalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
        tripura: ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
        uttar_pradesh: ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi (Chatrapati Sahuji Mahraj Nagar)", "Amroha (J.P. Nagar)", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun (Badaun)", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Ayodhya (Faizabad)", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur (Panchsheel Nagar)", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar (Padrauna)", "Lakhimpur - Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj (Allahabad)", "RaeBareli", "Rampur", "Saharanpur", "Sambhal (Bhim Nagar)", "Sant Kabir Nagar", "Shahjahanpur", "Shamali (Prabuddh Nagar)", "Shrawasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
        uttarakhand: ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
        west_bengal: ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur (South Dinajpur)", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman (West Bardhaman)", "Paschim Medinipur (West Medinipur)", "Purba Bardhaman (East Bardhaman)", "Purba Medinipur (East Medinipur)", "Purulia", "South 24 Parganas", "Uttar Dinajpur (North Dinajpur)"],

    };


    // Clear the current district options
    //districtSelect.innerHTML = '<option value="" disabled selected>Select a district</option>';

    // Populate district options if the selected state exists
    if (selectedState in districtsByState) {
        districtsByState[selectedState].forEach(district => {
            const option = document.createElement('option');
            option.value = district.toLowerCase().replace(/ /g, "_");
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}
let base64URL= null;
    document.getElementById('file-upload').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the uploaded file

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
             base64URL = e.target.result; // Base64 URL of the image

        };

        reader.onerror = function(e) {
            console.error("Error reading file", e);
        };

        reader.readAsDataURL(file); // Read file as Data URL (Base64)
    } else {
        console.warn("No file selected");
    }
});


function submit() {
    const All_inputs = document.querySelectorAll('.container input, .container select, .container textarea');
    const data = {};
    All_inputs.forEach(input => {
        if (input.type === 'checkbox') {
            data[input.name] = check_box;
        }
        else if(input.type ==="file"){
            data[input.name] =base64URL;
        }
        else {
            data[input.name] =cap(input.value);
        }
    });
    localStorage.setItem('data',JSON.stringify(data))
    window.location='/menu/template' 
    return;
}


function cap(input) {
    return input.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}