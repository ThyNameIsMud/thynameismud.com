Caboose [![Build Status](https://secure.travis-ci.org/ff0000/caboose.png)](http://travis-ci.org/ff0000/caboose)
=======

RED Interactive's Sass + Compass framework

## Includes

* Robert Penner's easings ported to Sass
* Several helper mixins and placeholders to get you started

## Mixins

Mixins can be found in the `src/mixins` directory

### `_animation.scss`

A "polyfill" while Compass 0.13 is still in alpha/beta. The mixin [will be standard](https://github.com/chriseppstein/compass/blob/master/frameworks/compass/stylesheets/compass/css3/_animation.scss) once 0.13 is stable, and supports everything the upcoming build will.

[Compass Animation](http://beta.compass-style.org/reference/compass/css3/animation/)

### `_experimental-both.scss`

This mixin functions like Compass' [@experimental](http://compass-style.org/reference/compass/css3/shared/#mixin-experimental), except it will prefix the property and the value. Useful for mask-image: gradient(); and other types of methods that require property and value prefixing.

```scss
body {
	@include experimental-both(mask-image, $gradient);
}
```

### `_grad.scss`

A fallback-friendly gradient mixin. Takes two values and mixes them into one solid color for non-grad-supporting browsers, and generates a gradient for those that support CSS3 gradients.

```scss
body {
	@include grad(#000, #333);
}
```

### `_ie-friendly-transform.scss`

A fallback-friendly 3d-transform mixin. Outputs a 2d transform property for browsers that don't support 3d transforms, and a 3d transform for those that do.

```scss
body {
	@include ie-friendly-transform(translateX(100px) translateY(100px));
}
```

### `_mask-image.scss`

Mixins for CSS3 mask images.

```scss
body {
	@include mask-image(image-url("path/to/image.png"));
}
```

### `_position.scss`

Shortcut for setting position and top/left/right/bottom values.

```scss
body {
	@include absolute($coords);
}
```

or

```scss
body {
	@include fixed($coords);
}
```

### `_respond-to.scss`

A mixin for media-queries. Supports a wide array of widths to respond to:

```scss
body {
	background: blue;

	@include respond-to("handheld") {
		background: red;
	}

	@include respond-to("tablet") {
		background: black
	}
}
```

### `_truncate.scss`

Force overly long spans of text to truncate.

```scss
body {
	@include truncate(300px);
}
```

or

```scss
body {
	@include truncate(80%);
}
```

## Placeholders

Placeholders can be found in the `src/placeholders` directory.

### `_debug.scss`

Adds a debug outline to any targeted element. This extend rule is optional, make sure to flag it as such.

```scss
body {
	@extend %debug !optional;
}
```

### `_global-transition.scss`

Define a global transition and share it with multiple elements.

```scss
body {
	@extend %global-transition;
}
```

### `_magic-bullet-fix.scss`

Adds the [magic bullet fix](http://www.html5rocks.com/en/tutorials/speed/html5/#transanim) to targeted elements.

```scss
body {
	@extend %magic-bullet-fix;
}
```

### `_microfix.scss`

A better [micro clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) hack.

```scss
body {
	@extend %microfix;
}
```

### `_position-zero.scss`

Position the element absolute, with top / left / bottom / right set to zero.

```scss
body {
	@extend %position-zero;
}
```

### `_scrollable.scss`

Sets overflow to auto and adds `overflow-scrolling: touch` to applicable browsers.

```scss
body {
	@extend %scrollable;
}
```

### `_typeface.scss`

A [Better Helvetica Font Stack](http://j.mp/9t6O6Z).

```scss
body {
	@extend %typeface;
}
```

### MIT License
