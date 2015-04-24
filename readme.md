# Angular-gettext TodoMVC Example

> This is an example of how to use [angular-gettext](http://angular-gettext.rocketeer.be/), based on [TodoMVC](http://todomvc.com/).

Things to watch out for:

* Added `angular-gettext` to `bower.json`.
* Added a `Gruntfile` to extract and compile translations.
* Added a language switcher.
* Annotated the views to add translation support.
* Added translations in the `po` folder.

Full usage instructions can be found at [https://github.com/johndaley-me/angular-gettext-example.git](https://github.com/johndaley-me/angular-gettext-example.git).

---

Original README below:

# AngularJS TodoMVC Example

> HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.

> _[AngularJS - angularjs.org](http://angularjs.org)_


## Learning AngularJS
The [AngularJS website](http://angularjs.org) is a great resource for getting started.

Steps to create the project:

1. Clone the angular-gettext project from : [https://github.com/johndaley-me/angular-gettext-example.git]
2. Install `npm install`
3. Install `bower install`
4. Install POEdit from [http://poedit.net/] - (it's an optional).
5. Install Grunt - `npm install -g grunt-cli`
6. Run `grunt` to generate the template.pot file for export
7. Goto [https://www.transifex.com/], setup an account and upload the `template.pot` file.
8. Do translations to the respected International Language.
9. Import the translated po files from transifex into the project.
10.Run `grunt` to generate all translated po files.
