# Espresso
A sass framework
It'll get you up and going!


##Get started
It's easy to get started. Just follow the steps below.


###1.Download

Download Espresso or install with bower

	$ bower install espresso


###2. Install

Run Node Package Manager

	$ npm install --global gulp && npm install


###3. Configure

Enter the pixel grid values used in your artwork in _variables.scss file. Done!

	$columns: 12;
    $column-width: 65px;
    $gutter-width: 20px;


###4. Build

Run Gulp

	$ gulp


##Basic usage

This is the default usage. The grid is calculated and classes are generated for you to get building quickly.

	<div class="section">

        <div class="container">

            <div class="row">

                <div class="columns-2">

                    A column with a width of 6 columns

                </div>

                <div class="columns-2">

                    A column with a width of 4 columns
                    And pushed from the left a width of 2 columns

                </div>

            </div>

        </div>

	</div>


##Advanced usage

By setting the $advanced-usage variable in _variables.scss to 'true' you can work with Espresso more semantically.

	// based on a 12 column grid

	.main-page-content {

	    max-width: $grid-width; // calulated from your grid variables
	    margin: 0 auto;
	    padding: 0 1em;
	    @include clearfix;

	}

	.main-article {

	    //default is 100% width on small devices

	    //for devices larger than 640px
	    @include break-at(640px){

	        @include columns(8);

	    }

	}

	.popular-articles {

	    //default is 100% width on small devices

	    //for devices larger than 640px
	    @include break-at(640px) {

	        @include columns(6, omega); // omega is used to remove the margin-right

	    }

	}




## License

GNU GENERAL PUBLIC LICENSE
