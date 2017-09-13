/*!
* Cosmic Ipsum v1.0
* https://github.com/eryhM
*
* Makes use of jQuery
* http://jquery.com/
*
* Copyright (c) 2017 Mhyre (eryhM)
* Released under the MIT license
* https://raw.githubusercontent.com/eryhm/cosmic-ipsum/master/LICENSE
*
*/
(($) =>
{
	'use strict';

	$.fn.cosmic = function(opts)
	{
		let self = $.fn.cosmic;

		self.wordBank =
		[
			"albedo",
			"Alpha Centauri",
			"apastron",
			"aperature",
			"aphelion",
			"apogee",
			"asterism",
			"asteroid",
			"astronaut",
			"astronomer",
			"astronomical unit",
			"astronomy",
			"axial tilt",
			"azimuth",
			"background radiation",
			"Bailey's beads",
			"big bang theory",
			"binary star",
			"black body",
			"black hole",
			"bolometer",
			"celestial",
			"celestial coordinates",
			"celestial equator",
			"circumpolar",
			"cislunar",
			"cluster",
			"comet",
			"conjunction",
			"constellation",
			"coriolis force",
			"cosmic rays",
			"corona",
			"cosmology",
			"cosmonaut",
			"cosmos",
			"crater",
			"crescent moon",
			"culmination",
			"dark matter",
			"day",
			"declination",
			"deep space",
			"Deneb",
			"density",
			"docking",
			"Doppler shift",
			"double star",
			"Drake equation",
			"dust",
			"dwarf planet",
			"dwarf star",
			"Earth",
			"Earthshine",
			"eccentricity",
			"eclipse",
			"ecliptic",
			"elliptical orbit",
			"ephemeris",
			"equinox",
			"escape velocity",
			"event horizon",
			"exoplanet",
			"extragalactic",
			"falling star",
			"flare",
			"flyby",
			"free fall",
			"full moon",
			"galaxy",
			"gamma ray",
			"gas giant",
			"gegenschein",
			"geostationary",
			"geosynchronous",
			"gibbous moon",
			"globular cluster",
			"gravitation",
			"gravitational constant",
			"gravitational lens",
			"gravity",
			"half moon",
			"heliocentric",
			"hydrogen",
			"helium",
			"H-R diagram",
			"Hubble telescope",
			"Hubble's law",
			"hyperbolic orbit",
			"hypernova",
			"ice giant",
			"inclination",
			"inertia",
			"inferior planets",
			"inner planets",
			"interstellar",
			"interstellar dust",
			"ionosphere",
			"Jupiter",
			"Kepler's laws",
			"kiloparsec",
			"Kirkwood gaps",
			"Kuiper belt",
			"Lagrange points",
			"lens",
			"libration",
			"light-year",
			"limb",
			"local arm",
			"local group",
			"lunar",
			"magnitude",
			"Lunar mare",
			"Mars",
			"mass",
			"Mercury",
			"meridian",
			"Messier object",
			"meteor",
			"meteor shower",
			"meteorite",
			"meteoroid",
			"Milky Way",
			"minor planet",
			"Mir",
			"moon",
			"muttnik",
			"nadir",
			"NASA",
			"nebula",
			"Neptune",
			"neutron star",
			"new moon",
			"north star",
			"nova",
			"observatory",
			"occultation",
			"Oort cloud",
			"opposition",
			"orbit",
			"orbital eccentricity",
			"orbital inclination",
			"outer planets",
			"parallax",
			"parsec",
			"partial eclipse",
			"penumbra",
			"perigee",
			"perihelion",
			"perturbation",
			"phase",
			"plane of the ecliptic",
			"planet",
			"planetary nebula",
			"planetoid",
			"planisphere",
			"Pluto",
			"pole star",
			"precession",
			"probe",
			"pulsar",
			"quarter moon",
			"quasar",
			"radiant",
			"radiation",
			"red dwarf",
			"red giant star",
			"red shift",
			"revolve",
			"retrograde",
			"right ascension",
			"rings",
			"Roche limit",
			"rocket",
			"satellite",
			"Saturn",
			"scientific notation",
			"scintillation",
			"seeing",
			"shooting star",
			"solar",
			"sidereal",
			"singularity",
			"sky",
			"solar",
			"solar system",
			"solar wind",
			"solstice",
			"space",
			"space exploration",
			"space station",
			"spectroscope",
			"spectrum",
			"Sputnik",
			"star",
			"starlight",
			"sun",
			"sunspot",
			"superior planets",
			"supernova",
			"synodic",
			"syzygy",
			"telemetry",
			"telescope",
			"terminator",
			"terrestrial",
			"total eclipse",
			"totality",
			"transit",
			"translunar",
			"transneptunians",
			"transparency",
			"twinkling",
			"umbra",
			"universe",
			"Uranus",
			"vacuum",
			"Van Allen belt",
			"variable star",
			"Venus",
			"vernal equinox",
			"visual magnitude",
			"waning",
			"wavelength",
			"waxing",
			"weightlessness",
			"white dwarf",
			"white giant",
			"wormhole",
			"x-rays",
			"yellow dwarf",
			"zenith",
			"zodiac"
		];

		self.randomize = () =>
		{
			for(let i = self.wordBank.length; i; i--)
			{
				let j = Math.floor(Math.random() * i);
				[self.wordBank[i - 1], self.wordBank[j]] = [self.wordBank[j], self.wordBank[i - 1]];
			}
		};

		self.defaults =
		{
			paragraphs: 1,
			length: 48,
			repeat: false,
			jump: 2,
			cosmic: true
		};

		$(this).each(() =>
		{
			let element = $(this);
			let result = '';
			let paragraph = '';
			let options = $.extend({}, self.defaults, opts);

			self.randomize();

			paragraph = self.wordBank.slice(0, options.length).join(' ');

			for(let i = 1; i <= options.paragraphs; i++)
			{
				//Capitalization
				if(!options.cosmic || i > 1)
					paragraph = paragraph.charAt(0).toUpperCase() + paragraph.slice(1);

				result += paragraph;

				if(i != options.paragraphs)
				{
					for(let i = 0; i < options.jump; i++)
					{
						result += '<br>';
					}
				}

				if(!options.repeat)
				{
					self.randomize();
					paragraph = self.wordBank.slice(0, options.length).join(' ');
				}
			}

			//Start with Cosmic ipsum?
			if(options.cosmic)
				result = 'Cosmic ipsum ' + result;

			element.text(result);
			element.html(element.text());

			return this;
		});
	};
})(jQuery);