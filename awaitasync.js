async function fetchData() {
    return [
        {
            "name": "kavipriya",
            "department": "csbs",
            "mobileno": "9585822642",
            "subject": "data structures",
            "marks": "83"
        }
    ];
}
async function processData() {
    try {
        const data = await fetchData();
        const details = data.map((user) => ({
            Name: user.name,
            Department: user.department,
            Mobileno:parseInt(user.mobileno),
            Subject: user.subject,
            Marks:parseInt(user.marks)
        }));
        console.log(details);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
processData();
