const homePage = (req, res) => {
    res.status(200).send(`<h1 style = "text-align:center; ">Web Developer Task</h1>
    <h2 style = "text-align:center; ">Student Mentor Database Management</h2>
    `);
};
export default { homePage };