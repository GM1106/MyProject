let proj_folder = 'dist';
let sourc_folder = '#src';


// ---------------------------
let path = {
    build: {
        html: proj_folder + '/',
        css: proj_folder + '/css/',
        js: proj_folder + '/js/',
        img: proj_folder + '/img/',
        fonts: proj_folder + '/fonts/'
    },
    src: {
        html: [sourc_folder + '/*.html', '!' + sourc_folder + '/_*.html'],
        css: sourc_folder + '/scss/style.scss',
        js: sourc_folder + '/js/script.js',
        img: sourc_folder + '/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}',
        fonts: sourc_folder + '/fonts/**/*.{ttf,woff,woff2}'
    },
    watch: {
        html: sourc_folder + '/**/*.html',
        css: sourc_folder + '/scss/**/*.scss',
        js: sourc_folder + '/js/**/*.js',
        img: sourc_folder + '/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}',
    },
    clean: './' + proj_folder + '/'
}

// ----------------------------
let { src, dest } = require('gulp');
let gulp = require('gulp');
let browser_sync = require('browser-sync');
let file_include = require('gulp-file-include');
let del = require('del');
let scss = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let group_media = require('gulp-group-css-media-queries');
let clean_css = require('gulp-clean-css');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify-es').default;
let imagemin = require('gulp-imagemin');
let webp = require('gulp-webp');
let webphtml = require('gulp-webp-html');
let webpcss = require("gulp-webpcss");

// ----------------------------


function browserSync() {
    browser_sync.init({
        server: {
            baseDir: './' + proj_folder + '/'
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(file_include())
        .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browser_sync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(file_include())
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                extname: '.min.js'
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browser_sync.stream())
}



function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: 'expanded'
            })
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 15 versions'],
                cascade: true
            })
        )
        // .pipe(webpcss({
        //     baseClass: '.webp1',
        //     replace_from: /\.(png|jpg|jpeg)/,
        //     replace_to: '.webp',
        // }))
        .pipe(webpcss({ webpClass: '', noWebpClass: '.no-webp' }))
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: '.min.css'
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browser_sync.stream())
}


function images() {
    return src(path.src.img)
        .pipe(
            webp({
                quality: 70
            })
        )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: true }],
                interlaced: true,
                optimizationLevel: 3
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browser_sync.stream())
}


function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean() {
    return del(path.clean);
}


// ---------------------

let build = gulp.series(clean, gulp.parallel(js, css, html, images));
let watch = gulp.parallel(build, watchFiles, browserSync);

//----------------------------

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;



