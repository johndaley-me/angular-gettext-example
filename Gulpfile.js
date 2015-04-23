/**
 * Created by gayathrimadala on 4/23/15.
 */

var gulp = require('gulp');
var gettext = require('gulp-angular-gettext');

gulp.task('pot', function(){
    return gulp.src(['index.html'])
        .pipe(gettext.extract('po/template.pot',{}))
        .pipe(gulp.dest(''));
});
gulp.task('translations', function(){
    return gulp.src('po/*.po')
        .pipe(gettext.compile({ format: 'json' }))
        .pipe(gulp.dest('js/dist/translations'));
});