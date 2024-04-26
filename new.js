const data=[{
    "name":"kavipriya",
    "department":"csbs",
    "mobileno":"9585822642",
    "subject":"data structures",
    "marks":"83"
},
];
const details=data.map((user)=>({
    Name:user.name,
    Department:user.department,
    Mobileno:parseInt(user.mobileno),
    Subject:user.subject,
    Marks:parseInt(user.marks)
}));
console.log(details);