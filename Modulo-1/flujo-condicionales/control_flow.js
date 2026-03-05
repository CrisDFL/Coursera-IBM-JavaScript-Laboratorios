let useRole = "admin";
let accessLevel;

if(useRole == "admin"){
    accessLevel = "Full access granted"
} else if (useRole == "manager"){
    accessLevel = "Limited access granted";
} else{
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);
//---------------------------------------------
let isLoggedIn = true;
let useMessage;

if(isLoggedIn){
    if(useRole === "admin"){
        useMessage = "Welcome, admin";
    }else{
        useMessage = "Welcome user";
    }
} else {
    useMessage = "Please log in to access the system.";
}

console.log(useMessage);
//-----------------------------------------------
let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        useMessage = "Unknown";
}

console.log("User category", userCategory);
//-----------------------------------------------
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);