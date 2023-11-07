// import('node-fetch').then(fetch => {
//     const express = require('express');
//     const path = require('path');
//     const app = express();
//     const port = process.env.PORT || 8000;

//     // Serve your React app (build) in production
//     if (process.env.NODE_ENV === 'production') {
//         app.use(express.static(path.join(__dirname, '../dist')));

//         app.get('*', (req, res) => {
//             res.sendFile(path.join(__dirname, '../dist', 'index.html'));
//         });
//     }

//     // Define your API endpoints
//     app.get('/api/data', (req, res) => {
//         // Handle API requests and send responses here
//         res.json({ message: 'Hello from Express!' });
//     });

//     app.get('/api/top-headlines', async (req, res) => {
//         try {
//             const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c3f070d7c3164d759829cccd6c7308f0');
//             const data = await response.json();
//             res.json(data);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Failed to fetch data' });
//         }
//     });


//     app.listen(port, () => {
//         console.log(`Server is running on port ${port}`);
//     });
// });


