# README

Try rails frontend feature : Stimulus + jQuery

Things you may want to cover:

* Ruby version
  * 2.6.0

* Rails version
  * 6.0.2.1

* Gems
  * default

* Built-in features
  * Stimulus
    * Install stimulus
      * `bin/rails webpacker:install:stimulus`
      * test_rails_turbolinks_stimulusjs/app/javascript/packs/application.js

        ```bash
        import "controllers"
        ...
        ```

  * jQuery
    * Install jQuery
      * yarn add jquery
      * test_rails_turbolinks_stimulusjs/app/javascript/packs/application.js

        ```bash
        import "jquery/src/jquery"
        ...
        ```

* Scaffold a temp form to test
  * bin/rails g scaffold Book name:string author:string

* Changes
  * https://github.com/charlietag/test_rails_aasm/compare/v0.0.0...master
