import express from "express";
const app = express();

const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("Server is ready");
// });

app.get("/api/jokes", (req, res) => {

    const jokes = [
        {
            id: 1,
            title: 'A jokes',
            content: "This is jokes"
        },
        {
            id: 2,
            title: 'B jokes',
            content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 3,
            title: 'C jokes',
            content: "Parallel lines have so much in common. It's a shame they'll never meet."
        },
        {
            id: 4,
            title: 'D jokes',
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 5,
            title: 'E jokes',
            content: "I told my wife she was drawing her eyebrows too high. She looked surprised."
        }
    ];

    res.send(jokes)
})


app.listen(port, () => {
    console.log(`Server is runnung on ${port}`)
}); 