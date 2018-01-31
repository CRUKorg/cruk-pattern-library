# CRUK Pattern Library

This project is a fork of the excellent [Primer](http://primercss.io) project by GitHub.

The aim of this is to provide a componentised approach to how we create interfaces in a consistent and efficient manner. This work is Open Source, we care about the wider community and are grateful to be part of it. We both benefit from Open Source and wish to give back by sharing the sum of our research and work in crafting carefully thought out solutions (UX, Design and Implementation).

This repository is the home of both our base front-end code and the place where it is documented.


## Contents

- [Working Methodology](#working-methodology)
- [Documentation](#documentation)
  - [Dependencies](#dependencies)
  - [Running locally](#running-locally)
  - [Publishing documentation](#publishing-documentation)
  - [Code stats](#code-stats)
- [Updating](#updating)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)


## Working Methodology

When working on a new proposition/project, this project should be forked which is where any new components for the pattern library would be developed and iterated over. Components would make their way to this central project by pull requests. By working in this way we can maintain a mainline of development whilst still allowing new components to be worked on.

As this repository is both code and documentation when working on a new pattern the pull request to include it should have both [Browser &amp; Device tested](http://crukorg.github.io/cruk-pattern-library/browser-support) code along with documentation for the new component.

You can view the pattern library itself at [http://crukorg.github.io/cruk-pattern-library/](http://crukorg.github.io/cruk-pattern-library/).

## Documentation

The Pattern Library is built with Jekyll and published via the `gh-pages` branch of this repository.

### Dependencies

You'll need the following installed:

- Latest Jekyll (minimum v2.2.0): `$ gem install jekyll`
- Latest Rouge: `$ gem install rouge`
- Latest Sass: `$ gem install sass`
- Latest Grunt CLI: `$ npm install -g grunt-cli`
- [Node.js and npm](http://nodejs.org/download/)

If you have all those set up, now you can install the dependencies:

```bash
$ npm install
```

### Running locally

From the Terminal, start a local Jekyll server:

```bash
$ jekyll serve
```

Open a second Terminal tab to automatically recompile the Sass files and run autoprefixer.

```bash
$ grunt watch
```

Alternatively, you can manually run `grunt` and `jekyll serve` when needed.


### Publishing documentation

Use the included Grunt task to generate and publish the library to the `gh-pages` branch.

```bash
$ grunt publish
```

This takes the `_site` directory, generates it's own Git repository there, and publishes the contents to the `gh-pages` branch here on GitHub. Changes are reflected in the hosted docs within a minute or so.

### Code stats

When compiling or watching the Sass files Grunt will automatically generate a [`.cruk-base-stats.md`](assets/css/cruk-base-stats.md) file. This is tracked in the Git repository to provide us historical and contextual information on the changes we introduce. For example, we'll know when the number of selectors or declarations rises sharply within a single change.

## Development

Development happens in our primary branch, `master`. For stable versions, see the [releases page](https://github.com/CRUKorg/cruk-pattern-library/releases). `master` will always be up to date with the latest changes, including those which have yet to be released.

## Contributing

When contributing changes, be sure to do the following steps when opening a pull request:

1. Bump the version number in `package.json`.
2. Run `grunt` and commit the changes. This compiles the SCSS to CSS so we can do basic analysis on the number of selectors, file size, etc.

All HTML and CSS should conform to the [style guidelines](http://crukorg.github.io/cruk-pattern-library/guidelines).

Editor preferences are available in the [editor config](https://github.com/CRUKorg/cruk-pattern-library/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

## Versioning

This library follows [the Semantic Versioning guidelines](http://semver.org/).

## License

Created by and copyright Cancer Research UK. Released under the [MIT license](LICENSE.md).

## Roadmap

@TODO: We need to refactor the JS to remove the dependency on jQuery. We should write in vanilla js.
@TODO: Implement eslint instead of hound.
