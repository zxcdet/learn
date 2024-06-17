// undefined	NaN
// null	0
// true / false	1 / 0
// 0, null, undefined, NaN, ""	false
// любое другое значение	true

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0