// moment.js locale configuration
// locale : swahili (sw)
// author : Fahad Kassim : https://github.com/fadsel

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('sw', {
        months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
        	sameDay : '[leo saa] LT',
        	nextDay : '[kesho saa] LT',
        	nextWeek : '[wiki ijayo] dddd [saat] LT',
        	lastDay : '[jana] LT',
        	lastWeek : '[wiki iliyopita] dddd [saat] LT',
        	sameElse : 'L'
        },
        relativeTime : {
        	future : '%s baadaye',
        	past : 'tokea %s',
        	s : 'hivi punde',
        	m : 'dakika moja',
        	mm : 'dakika %d',
        	h : 'saa limoja',
        	hh : 'masaa %d',
        	d : 'siku moja',
        	dd : 'masiku %d',
        	M : 'mwezi mmoja',
        	MM : 'miezi %d',
        	y : 'mwaka mmoja',
        	yy : 'miaka %d'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));
