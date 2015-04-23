angular.module("gettext").run(['gettextCatalog', function (gettextCatalog) {
    gettextCatalog.setStrings('es', {"todos":"quehaceres","Mark all as complete":"Marcar todos como completa","{{$count}} item left":["{{$count}} tarea se queda","{{$count}} tareas se quedan"],"All":"Todos","Active":"Activo","Completed":"Terminado","Clear completed ({{completedCount}})":"Borrar terminados ({{completedCount}})","Double-click to edit a todo":"Haga doble clic para editar un TODO","What needs to be done?":"Qué hay que hacer?"});
    gettextCatalog.setStrings('nl', {"Mark all as complete":"Markeer als afgewerkt","{{$count}} item left":["{{$count}} item te gaan","{{$count}} items te gaan"],"All":"Alle","Active":"Actief","Completed":"Afgewerkt","Clear completed ({{completedCount}})":"Wis afgewerkte taken ({{completedCount}})","Double-click to edit a todo":"Dubbelklik om een todo te bewerken","What needs to be done?":"Wat moet gedaan worden?"});
    gettextCatalog.setStrings('te', {"Mark all as complete":"అన్ని పూర్తి చేయండి","{{$count}} item left":["ఏకవచనం : {{$count}} మిగిలిపోయిన అంశం\\n","బహువచనం: {{$count}} మిగిలిపోయిన అంశాలు"],"All":"అన్ని","Active":"ఉపయోగంలో","Completed":"పూర్తి అయినవవి","Clear completed ({{completedCount}})":"స్పష్టమైన పూర్తి","Double-click to edit a todo":"todo సవరించడానికి ఒక డబుల్క్ల క్లిక్ చేయండి","What needs to be done?":"ఏది కావాలి"});
    gettextCatalog.setStrings('ur_PK', {"todos":"کام کی فہرست","Mark all as complete":"نشان تمام کے طور پر مکمل","{{$count}} item left":["شے بائیں {{$count}}","بائیں اشیاء {{$count}}"],"All":"تمام","Active":"ایکٹو","Completed":"مکمل ہو گیا","Clear completed ({{completedCount}})":"واضح مکمل کر لیا  ({{completedCount}})","Double-click to edit a todo":"ایک کام کو ترمیم کرنے کے لے؛  ڈبل کلک کریں","What needs to be done?":"کیا کیا کرنے کی ضرورت ہے؟"});

}]);