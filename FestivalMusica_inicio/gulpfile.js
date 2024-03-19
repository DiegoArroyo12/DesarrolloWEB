const { src, dest, watch, parallel} = require("gulp");

// CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

// Imagenes
const webp = require('gulp-webp');

function css(done) {
    src("src/scss/**/*.scss") // Identificar el archivo SASS
        .pipe(plumber())
        .pipe(sass())     // Compilarlo
        .pipe(dest("build/css") );     // Almacenarla en el disco duro

    done(); // Callback que avisa a gulp cuando llegamos al final
}

function versionWebp( done ) {

    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}') // Entre llaves busca esos dos tipos de formatos
        .pipe( webp(opciones) )
        .pipe( dest('build/img') )
    
    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css)

    done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel( versionWebp, dev ); // npm i -D gulp-webp@4

// npx gulp 'nombre de la tarea'
// npm run 'nombre del package de json'