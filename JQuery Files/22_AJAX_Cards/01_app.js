// Call AJAX
let getUser = () => {
    // AJAX Request to Random User API
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let person = data.results[0];
            displayPerson(person);
        }
    });
};

setInterval(getUser,1000);


// display person data on card
let displayPerson = (person) => {
    let fullName = `${person.name.first} ${person.name.last}`;
    let pImage = `${person.picture.large}`;
    let age = `${person.dob.age}`;
    $('#p_image').attr('src',pImage);
    $('#p_name').text(fullName);
    $('#p_age').text(`${age} Yrs`);
};