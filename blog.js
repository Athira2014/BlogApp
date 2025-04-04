class User{
    constructor(name, email, title, content){
        this.name = this.validateString(name) ? name : null;
        this.email = this.validateEmail(email) ? email : null;
        this.title = this.validateString(title) ? title : null;
        this.content = this.validateString(content) ? content : null;
    }

    validateString(value) {
        return value && value.trim() !== "";
    }

    validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return this.validateString(email) && emailPattern.test(email);
    }
}

document.getElementById("postBlog").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const title = document.getElementById("blogTitle").value.trim();
    const content = document.getElementById("content").value.trim();

    const user = new User(name, email, title, content);

    if (user.name && user.email && user.title && user.content) {

        const container = document.getElementById("blogContainer");

        const postDiv = document.createElement("div");
        postDiv.className = "blog-post p-3 mb-4 border rounded";

        const authorContainer = document.createElement("authorContainer");
        authorContainer.className = "d-flex align-items-centre mb-2"

        const personLogo = document.createElement("img");
        personLogo.src="images/user_icon.png";
        personLogo.alt="icon";
        personLogo.width= 15;
        personLogo.className = "me-2";

        const authorEl = document.createElement("h5");
        authorEl.className = "mb-0";
        authorEl.textContent = user.name;

        const clockIcon = document.createElement("img");
        clockIcon.src = "images/calendar_clock_icon.ico";
        clockIcon.alt = "clock_icon";
        clockIcon.width = 15;
        clockIcon.className = "me-2";

       
       const dateEl = document.createElement("h5");
       dateEl.textContent = new Date().toLocaleDateString('en-us', {
        year: "numeric",
        month:"short",
        day: "numeric"
       });

       dateEl.className = "mb-0";

        const titleEl = document.createElement("h4");
        titleEl.textContent = user.title;

        const contentEl = document.createElement("p");
        contentEl.textContent = user.content;

        authorContainer.appendChild(personLogo);
        authorContainer.appendChild(authorEl);
        authorContainer.appendChild(clockIcon);
        authorContainer.appendChild(dateEl);


        postDiv.appendChild(authorContainer);
        postDiv.appendChild(titleEl);
        postDiv.appendChild(contentEl);

        container.appendChild(postDiv);

        this.reset(); 

    } else {
        alert("Please fill in all required fields with valid values.");
    }

});
