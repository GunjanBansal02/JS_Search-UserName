// Step 1: Selecting Elements from the DOM
var input = document.querySelector("input");
var people = document.querySelector(".people");

// Step 2: Defining the Data (Array of Objects)
var data = [
    {name: "Harsh", src: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"},
    {name: "Harshita", src: "https://parrotprint.com/wp/wp-content/uploads/2017/04/pexels-photo-27411.jpg"},
    {name: "Aviral", src: "https://media.licdn.com/dms/image/v2/D5603AQHQpkfLcfmw1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728626597372?e=2147483647&v=beta&t=VrDs3u-ANuEV0MI413wm6EC9KWI0Q6YJJLOVYoLDZZE"},
    {name: "Harshitka", src: "https://images.squarespace-cdn.com/content/v1/590beb9b893fc0ef1a3523e3/1658676352637-1K6JK547ZU2L928STUKM/Maria-21-Edit.jpg"},
    {name: "Harman", src: "https://t4.ftcdn.net/jpg/03/02/94/53/360_F_302945354_dqIiUiITKpard7fBVKDLtffIqnkDbyo4.jpg"},
]

// Step 3: Generating Initial List of People
var pers = '';
data.forEach(function (elem) {
    pers+= `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`;
});

people.innerHTML = pers;

// Step 4: Implementing Live Search
input.addEventListener("input", function () {
    var matching = data.filter(function(e){
        return e.name.toLowerCase().startsWith(input.value);
    });

    var userName = '';
    matching.forEach(function (elem) {
        userName += `<div class="person">
                        <div class="img">
                            <img src="${elem.src}" alt="">
                        </div>
                        <h4>${elem.name}</h4>
                    </div>`;
    });
    people.innerHTML = userName;
});

