require.config
  baseUrl: '/js/'

  paths:
    underscore: 'vendor/underscore'
    backbone: 'vendor/backbone'
    marionette: 'vendor/backbone/backbone.marionette'
    marionette_kl: 'vendor/backbone/backbone.marionette.kl'
    
    css: 'vendor/require/css/main'
    text: 'vendor/require/text'
    tpl: 'vendor/require/tpl'
    validation: 'vendor/backbone/backbone-validation'
    binding: 'vendor/backbone/Backbone.ModelBinder'

    modules: 'modules'
    collections: 'lib/collections'
    models: 'lib/models'
    widgets: 'lib/widgets'
    views: 'lib/views'
    templates: '/templates/'

    shim:
      underscore:
        exports: '_'

      backbone:
        deps: ['underscore']
        exports: 'Backbone'

      binding:
        deps: ['backbone']
        exports: 'binding'

      validation:
        deps: ['backbone']
        exports: 'validation'

      marionette:
        deps: ['backbone']
        exports: 'Marionette'

      override:
        deps: ['marionette']
        exports: 'override'

      App:
        deps: ['marionette']
        exports: 'App'

    config:
        text:
          onXhr: (xhr, url) ->
            xhr.setRequestHeader 'X-Requested-With', 'XMLHttpRequest'

        tpl:
          onXhr: (xhr, url) ->
            xhr.setRequestHeader 'X-Requested-With', 'XMLHttpRequest'


require [
    'underscore'
    'backbone'
    'marionette'
    'App'
    'modal'
    'override'
    'validation'
    'binding'
    'marionette_kl'
],
(_, Backbone, Marionette, App) ->
  App = new App()
