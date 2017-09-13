# Cosmic Ipsum Generator v1.0

**The Lorem Ipsum generator from outer space.**

Available as both a jQuery Plugin and over at https://eryhm.github.io/cosmic-ipsum/

---

### Plugin Installation

Grab a copy of cosmic-ipsum.js or its minified version from the dist folder. Make sure to include jQuery.

### Usage

Include jQuery and either of the plugin files in your HTML. Then, call the cosmic() function on any element like so:

	<p id="example">Some paragraph. I can be empty too!</p>

	<script type="text/javascript">
		$(document).ready(function() {
			$('#example').cosmic();
		});
	</script>

*Before*:

> Some paragraph. I can be empty too!

*After*:

> Cosmic ipsum local arm gibbous moon sky apogee cluster docking transit telescope Hubble telescope zodiac sun red dwarf umbra spectroscope visual magnitude lens moon white giant Milky Way solstice telemetry Alpha Centauri escape velocity transneptunians Mir albedo libration equinox gamma ray weightlessness Kuiper belt conjunction Roche limit radiant precession Uranus constellation Earth lunar meteor shower Sputnik Saturn dwarf star cosmic rays perturbation shooting star meteor Earthshine

### Options

Cosmic Ipsum has a set of default values that you can change by passing an object, for example:

	$('#example').cosmic({
		paragraphs: 3,
		length: 32,
		repeat: true,
		cosmic: false
	});

List of options and their default values:

* paragraphs: number (How many paragraphs? Default: 1)
* length: number (How many words per paragraph? Default: 48)
* repeat: bool (Identical paragraphs? Default: false)
* jump: number (How many line breaks between paragraphs? Default: 2)
* cosmic: bool (Start with 'Cosmic ipsum'? Default: true)

Enjoy!