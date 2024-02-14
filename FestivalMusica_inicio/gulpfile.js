const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
    src("src/scss/app.scss") // Identificar el archivo SASS
        .pipe(sass())     // Compilarlo
        .pipe(dest("build/css") );     // Almacenarla en el disco duro

    done(); // Callback que avisa a gulp cuando llegamos al final
}

function dev(done) {
    watch("src/scss/app.scss", css)

    done();
}

exports.css = css;
exports.dev = dev;

// npx gulp 'nombre de la tarea'
// npm run 'nombre del package de json'