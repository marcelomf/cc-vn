const coutries = require('./countries.json');

function ex2() {
    let result = {
        numberOfCountries: coutries.length,
        countOfficialGerman: null,
        maxOfficialGerman: null,
        spokenByCountry: [],
        countHighestOfficialLanguages: null,
        highestOfficialLanguages: null,
        hashOfficialLanguage: {},
        countCommonOfficialLanguage: null,
        commonOfficialLanguage: null
    }

    for(const country of coutries) {
        for(const language of country.languages) {
            if(language.toLowerCase().trim() == 'de') {
                if(!result.countOfficialGerman) {
                    result.countOfficialGerman = country.languages.length;
                    result.maxOfficialGerman = country.country;
                } else {
                    if(result.countOfficialGerman < country.languages.length) {
                        result.countOfficialGerman = country.languages.length;
                        result.maxOfficialGerman = country.country;
                    }
                }
            }
            if(!result.hashOfficialLanguage[language]) {
                result.hashOfficialLanguage[language] = 1;
            } else {
                result.hashOfficialLanguage[language] += 1;
            }
            if(!result.countCommonOfficialLanguage || result.hashOfficialLanguage[language] > result.countCommonOfficialLanguage) {
                result.countCommonOfficialLanguage = result.hashOfficialLanguage[language];
                result.commonOfficialLanguage = language; 
            }
        }
        let countryInitial = country.country;
        result.spokenByCountry.push(
            JSON.parse(`{ "${countryInitial}" : ${country.languages.length} }`)
        );
        if(!result.countHighestOfficialLanguages) {
            result.countHighestOfficialLanguages = country.languages.length;
            result.highestOfficialLanguages = country.country;
        } else if(result.countHighestOfficialLanguages < country.languages.length) {
            result.countHighestOfficialLanguages = country.languages.length;
            result.highestOfficialLanguages = country.country;
        }
    }

    return result;

}

console.table(ex2());