module.exports = {
    "entry": "./src/render.js",
    "output": {
        "path": __dirname + "/public/js",
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "loader": "babel-loader"
            }
        ]
    }
}