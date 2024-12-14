function whereAt(location) {
    if (location === "here") {
        console.log("You are here.");
     } else if (location === "there") {
        console.log("You are there.");
    } else {
        console.log("You are lost.");
    }
whereAt("here");
whereAt("there");
whereAt("no idea")
