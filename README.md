# Espresso
A sass framework
It'll get you up and going!


##Get started
It's easy to get started. Just follow the steps below.


###1. Download

Download Espresso or install with bower ( coming soon! )

	$ bower install espresso


###2. Install

Run Node Package Manager

	$ npm install --global gulp && npm install


###3. Configure

Enter the pixel grid values you wish in _variables.scss file. Done!

	$columns: 12;
    $column-width: 65px;
    $gutter-width: 20px;


###4. Build

Run Gulp

	$ gulp


##Basic usage

This is the default usage. The grid is calculated and classes are generated for you to get building quickly. ( _grid.scss & _breakpoints.scss Required. Get at https://github.com/kiriaze/s-grid )

	<section>

        <div class="container">

            <div class="row">

                <div class="columns-2">

                    A column with a width of 50%. Fixed to 2 columns.

                </div>

                <div class="columns-2">

                    A column with a width of 50%. Fixed to 2 columns.

                </div>

            </div>

            <div class="row">

                <div class="columns-50">

                    An alternate method for a column with 50% width. This should be used for multiple columns with different widths, all equaling to 100%.

                </div>

                <div class="columns-30">

                    A column with 30% width.

                </div>

                <div class="columns-20">

                    A column with 20% width.

                </div>

            </div>

        </div>

	</section>


##Advanced usage

By setting the $advanced-usage variable in _variables.scss to 'true' you can work with Espresso more semantically.

### Installation

1. Import grid into project, `@import 'grid';`.
2. Import breakpoints mixin into project, `@import 'breakpoints'`;
	* Simple's breakpoint mixin is the first of its kind - stupid simple and mobile first approach.

### Settings
1. Classes are by default, .container, .row, .columns.
2. Variable Settings

```
$gutter: 			3% !default;
$docWidth: 			100% !default;

// this sets your class names
$container-class:	"container" !default; // optional
$row-class:			"row" !default;
$column-class:		"columns" !default;
$max-columns:		12 !default;

// Grid check
$gridDebug:			false !default; // If true, styles grid/columns for easy visibily while testing
```

### Syntax
1. Class Syntax
```
.columns-{percentage, double digit} for mixed columns
	.columns-70, .columns-30 = totaling to 100

.columns-{single digit number} for equal coloumns
	.columns-1
	.columns-2, .columns-2
	.columns-4, .columns-4, .columns-4, .columns-4
```

2. Gutter Classes

```
.no-gutter {
	@include set-gutter(0);
}
.reset-gutter {
	@include set-gutter($gutter);
}
```

### Usage
```
<div class="container"> // optional - for fixed with breakpoints
	<div class="row"> // required
		<div class="columns-2"> // required
        	<div class="row">  // Nesting
				<div class="columns-2"></div>
                <div class="columns-2"></div>
		    </div>
        </div>
		<div class="columns-2"></div> // required
	</div>
</div>

# For mixed widths, percentage based
<div class="row">
	<div class="columns-30"></div> // default classes
	<div class="customClass-4"></div> // custom classes
	<div data-columns=".3"></div> // Using data attributes
</div>

# For equal widths
<div class="row">
	<div class="columns-3"></div> // default classes
	<div class="customClass-3"></div> // custom classes
	<div data-columns="3"></div> // Using data attributes
</div>

# Scss
# @include container-fixed($gutter: $gutter, $padded: false);
# @include columns($num, $display: float, $gutter: $gutter);
# @include grid($display: float, $gutter: $gutter);
.example-wrapper {
	@include grid();
	.example-column {
		// note: including columns within breakpoint mixin is required.
		@include breakpoint($small) {
    		@include columns(2);
    	}
	}
}
```


## License

GNU GENERAL PUBLIC LICENSE
