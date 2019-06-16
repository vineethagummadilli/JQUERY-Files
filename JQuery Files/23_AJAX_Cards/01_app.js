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
    let theCard = `<div class="col-md-3 mt-5">
                        <div class="card text-center t_card animated rotateIn">
                            <div class="card-body">
                                <img src="${pImage}" class="img-fluid img-thumbnail w-50 rounded-circle t_img">
                                <h3 class="mt-2">${fullName}</h3>
                                <p class="lead">${age}</p>
                                <ul class="list-group">
                                    <li class="list-group-item list-group-item-action">
                                        Street : ${person.location.street}
                                    </li>
                                     <li class="list-group-item list-group-item-action">
                                        City : ${person.location.city}
                                    </li>
                                     <li class="list-group-item list-group-item-action">
                                        State : ${person.location.state}
                                    </li>
                                     <li class="list-group-item list-group-item-action">
                                        Post Code : ${person.location.postcode}
                                    </li>
                                </ul>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="p-2">
                                        <i class="fab fa-facebook-f text-teal fa-2x"></i>
                                    </div>
                                    <div class="p-2">
                                        <i class="fab fa-twitter text-teal fa-2x"></i>
                                    </div>
                                    <div class="p-2">
                                        <i class="fab fa-github text-teal fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    $('#card-row').append(theCard);
};