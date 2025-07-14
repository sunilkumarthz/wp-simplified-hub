const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const { deleteSync } = require('del');
const browserSync = require('browser-sync').create();

// Paths
const paths = {
    scss: {
        src: 'assets/scss/**/*.scss',
        dest: 'dist/css/',
        main: 'assets/scss/main.scss'
    },
    js: {
        src: 'assets/js/**/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'assets/images/**/*',
        dest: 'dist/images/'
    },
    fonts: {
        src: 'assets/fonts/**/*',
        dest: 'dist/fonts/'
    }
};

// Clean dist directory
function clean(cb) {
    deleteSync(['dist']);
    cb();
}

// Compile SCSS
function styles() {
    return gulp.src(paths.scss.main)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(browserSync.stream());
}

// Process JavaScript
function scripts() {
    return gulp.src(paths.js.src)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(browserSync.stream());
}

// Optimize images
function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {name: 'removeViewBox', active: true},
                    {name: 'cleanupIDs', active: false}
                ]
            })
        ]))
        .pipe(gulp.dest(paths.images.dest));
}

// Copy fonts
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}

// Watch files
function watch() {
    browserSync.init({
        proxy: 'localhost/your-wordpress-site', // Update this with your local WordPress URL
        files: [
            '**/*.php',
            'dist/css/*.css',
            'dist/js/*.js'
        ]
    });
    
    gulp.watch(paths.scss.src, styles);
    gulp.watch(paths.js.src, scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.fonts.src, fonts);
    gulp.watch('**/*.php').on('change', browserSync.reload);
}

// Build task
const build = gulp.series(clean, gulp.parallel(styles, scripts, images, fonts));

// Default task
const dev = gulp.series(build, watch);

// Export tasks
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.watch = watch;
exports.build = build;
exports.default = dev;