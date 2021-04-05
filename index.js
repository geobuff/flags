let index = {};

const flags = {
    'ad': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1e9.svg',
    'ae': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1ea.svg',
    'af': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1eb.svg',
    'ag': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1ec.svg',
    'al': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1f1.svg',
    'am': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1f2.svg',
    'ao': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1f4.svg',
    'ar': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1f7.svg',
    'at': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1f9.svg',
    'au': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1fa.svg',
    'az': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1ff.svg',
    'ba': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1e6.svg',
    'bb': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1e7.svg',
    'bd': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1e9.svg',
    'be': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1ea.svg',
    'bf': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1eb.svg',
    'bg': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1ec.svg',
    'bh': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1ed.svg',
    'bi': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1ee.svg',
    'bj': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1ef.svg',
    'bn': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1f3.svg',
    'bo': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1f4.svg',
    'br': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1f7.svg',
    'bs': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1f8.svg',
    'bt': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1f9.svg',
    'bw': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1fc.svg',
    'by': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1fe.svg',
    'bz': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e7-1f1ff.svg',
    'ca': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1e6.svg',
    'cd': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1e9.svg',
    'cf': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1eb.svg',
    'cg': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1ec.svg',
    'ch': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1ed.svg',
    'ci': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1ee.svg',
    'cl': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1f1.svg',
    'cm': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1f2.svg',
    'cn': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1f3.svg',
    'co': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1f4.svg',
    'cr': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1f7.svg',
    'cu': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1fa.svg',
    'cv': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1fb.svg',
    'cy': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1fe.svg',
    'cz': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e8-1f1ff.svg',
    'de': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e9-1f1ea.svg',
    'dj': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e9-1f1ef.svg',
    'dk': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e9-1f1f0.svg',
    'dm': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e9-1f1f2.svg',
    'do': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e9-1f1f4.svg',
    'dz': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e9-1f1ff.svg',
    'ec': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ea-1f1e8.svg',
    'ee': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ea-1f1ea.svg',
    'eg': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ea-1f1ec.svg',
    'er': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ea-1f1f7.svg',
    'es': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ea-1f1f8.svg',
    'et': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ea-1f1f9.svg',
    'fi': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1eb-1f1ee.svg',
    'fj': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1eb-1f1ef.svg',
    'fm': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1eb-1f1f2.svg',
    'fr': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1eb-1f1f7.svg',
    'ga': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1e6.svg',
    'gb': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1e7.svg',
    'gd': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1e9.svg',
    'ge': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1ea.svg',
    'gh': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1ed.svg',
    'gm': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1f2.svg',
    'gn': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1f3.svg',
    'gq': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1f6.svg',
    'gr': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1f7.svg',
    'gt': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1f9.svg',
    'gw': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1fc.svg',
    'gy': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ec-1f1fe.svg',
    'hn': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ed-1f1f3.svg',
    'hr': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ed-1f1f7.svg',
    'ht': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ed-1f1f9.svg',
    'hu': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ed-1f1fa.svg',
    'id': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ee-1f1e9.svg',
    'ie': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ee-1f1ea.svg',
    'il': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ee-1f1f1.svg',
    'in': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ee-1f1f3.svg',
    'iq': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ee-1f1f6.svg',
    'ir': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ee-1f1f7.svg',
    'is': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ee-1f1f8.svg',
    'it': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ee-1f1f9.svg',
    'jm': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ef-1f1f2.svg',
    'jo': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ef-1f1f4.svg',
    'jp': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ef-1f1f5.svg',
    'ke': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f0-1f1ea.svg',
    'kg': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f0-1f1ec.svg',
    'kh': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f0-1f1ed.svg',
    'ki': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f0-1f1ee.svg',
    'km': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f0-1f1f2.svg',
    'kn': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f0-1f1f3.svg',
    'kp': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f0-1f1f5.svg',
    'kr': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f0-1f1f7.svg',
    'kw': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f0-1f1fc.svg',
    'kz': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f0-1f1ff.svg',
    'la': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f1-1f1e6.svg',
    'lb': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f1-1f1e7.svg',
    'lc': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f1-1f1e8.svg',
    'li': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f1-1f1ee.svg',
    'lk': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f1-1f1f0.svg',
    'lr': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f1-1f1f7.svg',
    'ls': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f1-1f1f8.svg',
    'lt': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f1-1f1f9.svg',
    'lu': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f1-1f1fa.svg',
    'lv': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f1-1f1fb.svg',
    'ly': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f1-1f1fe.svg',
    'ma': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1e6.svg',
    'mc': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1e8.svg',
    'md': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1e9.svg',
    'me': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1ea.svg',
    'mg': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1ec.svg',
    'mh': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1ed.svg',
    'mk': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1f0.svg',
    'ml': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1f1.svg',
    'mm': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1f2.svg',
    'mn': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1f3.svg',
    'mr': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1f7.svg',
    'mt': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1f9.svg',
    'mu': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1fa.svg',
    'mv': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1fb.svg',
    'mw': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1fc.svg',
    'mx': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1fd.svg',
    'my': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1fe.svg',
    'mz': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f2-1f1ff.svg',
    'na': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1e6.svg',
    'ne': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1ea.svg',
    'ng': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1ec.svg',
    'ni': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1ee.svg',
    'nl': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1f1.svg',
    'no': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1f4.svg',
    'np': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1f5.svg',
    'nr': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1f7.svg',
    'nz': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1ff.svg',
    'om': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f4-1f1f2.svg',
    'pa': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f5-1f1e6.svg',
    'pe': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f5-1f1ea.svg',
    'pg': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f5-1f1ec.svg',
    'ph': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f5-1f1ed.svg',
    'pk': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f5-1f1f0.svg',
    'pl': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f5-1f1f1.svg',
    'ps': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f5-1f1f8.svg',
    'pt': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f5-1f1f9.svg',
    'pw': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f5-1f1fc.svg',
    'py': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f5-1f1fe.svg',
    'qa': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f6-1f1e6.svg',
    'ro': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f7-1f1f4.svg',
    'rs': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f7-1f1f8.svg',
    'ru': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f7-1f1fa.svg',
    'rw': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f7-1f1fc.svg',
    'sa': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1e6.svg',
    'sb': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1e7.svg',
    'sc': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1e8.svg',
    'sd': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1e9.svg',
    'se': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1ea.svg',
    'sg': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1ec.svg',
    'si': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1ee.svg',
    'sk': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1f0.svg',
    'sl': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1f1.svg',
    'sm': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1f2.svg',
    'sn': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1f3.svg',
    'so': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1f4.svg',
    'sr': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1f7.svg',
    'ss': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1f8.svg',
    'st': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1f9.svg',
    'sv': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1fb.svg',
    'sy': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1fe.svg',
    'sz': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f8-1f1ff.svg',
    'td': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1e9.svg',
    'tg': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1ec.svg',
    'th': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1ed.svg',
    'tj': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1ef.svg',
    'tl': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1f1.svg',
    'tm': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1f2.svg',
    'tn': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1f3.svg',
    'to': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1f4.svg',
    'tr': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1f7.svg',
    'tt': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1f9.svg',
    'tv': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1fb.svg',
    'tw': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1fc.svg',
    'tz': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f9-1f1ff.svg',
    'ua': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fa-1f1e6.svg',
    'ug': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fa-1f1ec.svg',
    'us': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fa-1f1f8.svg',
    'uy': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fa-1f1fe.svg',
    'uz': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fa-1f1ff.svg',
    'va': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fb-1f1e6.svg',
    'vc': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fb-1f1e8.svg',
    've': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fb-1f1ea.svg',
    'vn': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fb-1f1f3.svg',
    'vu': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fb-1f1fa.svg',
    'ws': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fc-1f1f8.svg',
    'xk': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fd-1f1f0.svg',
    'ye': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fe-1f1ea.svg',
    'za': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ff-1f1e6.svg',
    'zm': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ff-1f1f2.svg',
    'zw': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1ff-1f1fc.svg',
    'gb-bd': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Bedfordshire%27s_Flag.svg',
    'gb-bk': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Flag_of_Berkshire.svg',
    'gb-bst': 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Arms_of_Bristol_City_Council.svg',
    'gb-bu': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Buckinghamshire.svg',
    'gb-cm': 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Cambridgeshire_Flag.svg',
    'gb-ch': 'https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Cheshire.svg',
    'gb-co': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Cornwall.svg',
    'gb-cu': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/County_Flag_of_Cumbria.svg',
    'gb-db': 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Derbyshire_flag.svg',
    'gb-dv': 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Flag_of_Devon.svg',
    'gb-ds': 'https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Dorset.svg',
    'gb-dh': 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_County_Durham.svg',
    'gb-ex': 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Essex.svg',
    'gb-gc': 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Severn_Cross.svg',
    'gb-gl': 'https://upload.wikimedia.org/wikipedia/commons/1/18/County_Flag_of_Greater_London.svg',
    'gb-ha': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/County_Flag_of_Hampshire.svg',
    'gb-hd': 'https://upload.wikimedia.org/wikipedia/commons/7/79/County_Flag_Of_Herefordshire.svg',
    'gb-ht': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/County_Flag_of_Hertfordshire.svg',
    'gb-ke': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Kent.svg',
    'gb-la': 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Lancashire_County_Flag.svg',
    'gb-le': 'https://upload.wikimedia.org/wikipedia/commons/2/22/County_flag_of_Leicestershire.svg',
    'gb-li': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Lincolnshire_flag.svg',
    'gb-nf': 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Flag_of_Norfolk.svg',
    'gb-na': 'https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Northamptonshire.svg',
    'gb-ni': 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    'gb-nb': 'https://upload.wikimedia.org/wikipedia/commons/6/61/Flag_of_Northumberland.svg',
    'gb-nt': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/County_Flag_of_Nottinghamshire.svg',
    'gb-ox': 'https://upload.wikimedia.org/wikipedia/commons/3/39/Flag_of_Oxfordshire.svg',
    'gb-rt': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Rutland_County_Flag.svg',
    'gb-sc': 'https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg',
    'gb-sp': 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_Shropshire.svg',
    'gb-sm': 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Somnew.png',
    'gb-st': 'https://upload.wikimedia.org/wikipedia/commons/4/48/Staffordshire_Flag.svg',
    'gb-sf': 'https://upload.wikimedia.org/wikipedia/commons/0/01/County_Flag_of_Suffolk.svg',
    'gb-sr': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Surrey.svg',
    'gb-sx': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Sussex.svg',
    'gb-wa': 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Wales_%281959%E2%80%93present%29.svg',
    'gb-wr': 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Warwickshire.svg',
    'gb-wl': 'https://upload.wikimedia.org/wikipedia/commons/8/81/County_Flag_of_Wiltshire.svg',
    'gb-wo': 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Worcestershire_flag.svg',
    'gb-yk': 'https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_Yorkshire.svg',
    'us-al': 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg',
    'us-ak': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg',
    'us-az': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arizona.svg',
    'us-ar': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    'us-ca': 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    'us-co': 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg',
    'us-ct': 'https://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_Connecticut.svg',
    'us-de': 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Flag_of_Delaware.svg',
    'us-fl': 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    'us-ga': 'https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Georgia_(U.S._state).svg',
    'us-hi': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg',
    'us-id': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_Idaho.svg',
    'us-il': 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Illinois.svg',
    'us-in': 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Indiana.svg',
    'us-ia': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Iowa.svg',
    'us-ks': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Kansas.svg',
    'us-ky': 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Kentucky.svg',
    'us-la': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_Louisiana.svg',
    'us-me': 'https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Maine.svg',
    'us-md': 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Maryland.svg',
    'us-ma': 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Massachusetts.svg',
    'us-mi': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Michigan.svg',
    'us-mn': 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Minnesota.svg',
    'us-ms': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_Mississippi.svg',
    'us-mo': 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Missouri.svg',
    'us-mt': 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_Montana.svg',
    'us-ne': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Nebraska.svg',
    'us-nv': 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Flag_of_Nevada.svg',
    'us-nh': 'https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_New_Hampshire.svg',
    'us-nj': 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_New_Jersey.svg',
    'us-nm': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_New_Mexico.svg',
    'us-ny': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_New_York.svg',
    'us-nc': 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_North_Carolina.svg',
    'us-nd': 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Flag_of_North_Dakota.svg',
    'us-oh': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Ohio.svg',
    'us-ok': 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Oklahoma.svg',
    'us-or': 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Oregon.svg',
    'us-pa': 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Pennsylvania.svg',
    'us-ri': 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Rhode_Island.svg',
    'us-sc': 'https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_South_Carolina.svg',
    'us-sd': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_South_Dakota.svg',
    'us-tn': 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Tennessee.svg',
    'us-tx': 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    'us-ut': 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Utah.svg',
    'us-vt': 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Vermont.svg',
    'us-va': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Virginia.svg',
    'us-wa': 'https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Washington.svg',
    'us-dc': 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_the_District_of_Columbia.svg',
    'us-wv': 'https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_West_Virginia.svg',
    'us-wi': 'https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_Wisconsin.svg',
    'us-wy': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Wyoming.svg',
    'ar-ba': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Bandera_de_la_Provincia_de_Buenos_Aires.svg',
    'ar-ct': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Bandera_de_la_Provincia_de_Catamarca.svg',
    'ar-cc': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Bandera_de_la_Provincia_del_Chaco.svg',
    'ar-ch': 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bandera_de_la_Provincia_del_Chubut.svg',
    'ar-df': 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Bandera_de_la_Ciudad_de_Buenos_Aires.svg',
    'ar-cb': 'https://upload.wikimedia.org/wikipedia/commons/9/96/Bandera_de_la_Provincia_de_C%C3%B3rdoba.svg',
    'ar-cn': 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bandera_de_la_Provincia_de_Corrientes.svg',
    'ar-er': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Bandera_de_la_Provincia_de_Entre_R%C3%ADos.svg',
    'ar-fm': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Bandera_de_la_Provincia_de_Formosa.svg',
    'ar-jy': 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Bandera_de_la_Provincia_de_Jujuy.svg',
    'ar-lp': 'https://upload.wikimedia.org/wikipedia/commons/8/81/Bandera_de_la_Provincia_de_La_Pampa.svg',
    'ar-lr': 'https://upload.wikimedia.org/wikipedia/commons/6/60/Bandera_de_la_Provincia_de_La_Rioja.svg',
    'ar-mz': 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Bandera_de_la_Provincia_de_Mendoza.svg',
    'ar-mn': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Bandera_de_la_Provincia_de_Misiones.svg',
    'ar-nq': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Bandera_de_la_Provincia_de_Neuqu%C3%A9n.svg',
    'ar-rn': 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Bandera_de_la_Provincia_del_R%C3%ADo_Negro.svg',
    'ar-sa': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Bandera_de_la_Provincia_de_Salta.svg',
    'ar-sj': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Bandera_de_San_Juan_Ciudadana.png',
    'ar-sl': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Bandera_de_la_Provincia_de_San_Luis.svg',
    'ar-sc': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Bandera_de_la_Provincia_de_Santa_Cruz.svg',
    'ar-sf': 'https://upload.wikimedia.org/wikipedia/commons/8/84/Bandera_de_la_Provincia_de_Santa_Fe.svg',
    'ar-se': 'https://upload.wikimedia.org/wikipedia/commons/0/07/Bandera_de_la_Provincia_de_Santiago_del_Estero.svg',
    'ar-tf': 'https://upload.wikimedia.org/wikipedia/commons/9/94/Bandera_de_la_Provincia_de_Tierra_del_Fuego.svg',
    'ar-tm': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Bandera_de_la_Provincia_de_Tucum%C3%A1n.svg',
    'au-nsw': 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_New_South_Wales.svg',
    'au-qld': 'https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Queensland.svg',
    'au-sa': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_South_Australia.svg',
    'au-tas': 'https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Tasmania.svg',
    'au-vic': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Victoria_%28Australia%29.svg',
    'au-wa': 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_Western_Australia.svg',
    'au-act': 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_the_Australian_Capital_Territory.svg',
    'au-jbt': 'https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1fa.svg',
    'au-nt': 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_the_Northern_Territory.svg',
    'br-am': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Bandeira_do_Amazonas.svg',
    'br-pa': 'https://upload.wikimedia.org/wikipedia/commons/0/02/Bandeira_do_Par%C3%A1.svg',
    'br-mt': 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg',
    'br-mg': 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg',
    'br-ba': 'https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg',
    'br-ms': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg',
    'br-go': 'https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Goi%C3%A1s.svg',
    'br-ma': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeira_do_Maranh%C3%A3o.svg',
    'br-rs': 'https://upload.wikimedia.org/wikipedia/commons/6/63/Bandeira_do_Rio_Grande_do_Sul.svg',
    'br-to': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Bandeira_do_Tocantins.svg',
    'br-pi': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piau%C3%AD.svg',
    'br-sp': 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg',
    'br-ro': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Bandeira_de_Rond%C3%B4nia.svg',
    'br-rr': 'https://upload.wikimedia.org/wikipedia/commons/9/98/Bandeira_de_Roraima.svg',
    'br-pr': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paran%C3%A1.svg',
    'br-ac': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Bandeira_do_Acre.svg',
    'br-ce': 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Cear%C3%A1.svg',
    'br-ap': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amap%C3%A1.svg',
    'br-pe': 'https://upload.wikimedia.org/wikipedia/commons/5/59/Bandeira_de_Pernambuco.svg',
    'br-sc': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg',
    'br-pb': 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Bandeira_da_Para%C3%ADba.svg',
    'br-rn': 'https://upload.wikimedia.org/wikipedia/commons/3/30/Bandeira_do_Rio_Grande_do_Norte.svg',
    'br-es': 'https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg',
    'br-rj': 'https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg',
    'br-al': 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bandeira_de_Alagoas.svg',
    'br-se': 'https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg',
    'br-df': 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg',
    'ca-nu': 'https://upload.wikimedia.org/wikipedia/commons/9/90/Flag_of_Nunavut.svg',
    'ca-qc': 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Quebec.svg',
    'ca-nt': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_the_Northwest_Territories.svg',
    'ca-on': 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Ontario.svg',
    'ca-bc': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_British_Columbia.svg',
    'ca-ab': 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Flag_of_Alberta.svg',
    'ca-sk': 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_Saskatchewan.svg',
    'ca-mb': 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Manitoba.svg',
    'ca-yt': 'https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_Yukon.svg',
    'ca-nl': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Newfoundland_and_Labrador.svg',
    'ca-nb': 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_New_Brunswick.svg',
    'ca-ns': 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Nova_Scotia.svg',
    'ca-pe': 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Flag_of_Prince_Edward_Island.svg'
};

index.getFlagUrl = (code) => {
    return flags[code];
};

module.exports = index;