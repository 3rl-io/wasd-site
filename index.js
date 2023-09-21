const express = require('express'), app =  express();
app
    .use("/alpine.min.js", express.static('node_modules/alpinejs/dist/cdn.js'))
    .use("/", express.static(__dirname + '/public', {maxAge: "3d"}));

app.listen(8000, () => {
    console.log(`listening on port 8000`)
});
