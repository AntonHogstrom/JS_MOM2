//Deletes course with fetch and takes user to /courses which makes GET for all courses
let deleteCourse = (_id) => {
    fetch('http://localhost:3000/courses/' + _id, {
        headers: {
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        method: "DELETE",
    })
    window.location.replace("/courses");
}
