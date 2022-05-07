const CloudPlatformList = require('../../configs/CloudPlaftform.json');
const DatabasesList = require('../../configs/Databases.json');
const OtherFrameworksList = require('../../configs/OtherFrameworks.json');
const ProgrammingLanguagesList = require('../../configs/ProgrammingLanguages.json');
const SoftSkillsList = require('../../configs/SoftSkills.json');
const ToolsList = require('../../configs/Tools.json');
const WebFrameworksList = require('../../configs/WebFrameworks.json');

function checarLista_porPalavra(list, word){
    let keywordsFound = []
    const currLanguage = [Object.keys(list)[0]]

    // Acessa a primeira key do objeto (Definido com o nome da Linguagem no Json)
    for (let i = 0; i < list[currLanguage].length; i++) {
        const currFramework = {
            name: regexpThis(list[currLanguage][i].name),
            variations: list[currLanguage][i].variations.map(el => regexpThis(el)),
            linkedTo: regexpThis(list[currLanguage][i].linkedTo)
        }
        
        // Testa o nome principal da linguagem
        if(currFramework.name.test(word)){
            keywordsFound.push(list[currLanguage][i].name)
            continue;
        }

        if(currFramework.variations.length > 0){
            // Abre a array de variações da linguagem
            for (let k = 0; k < currFramework.variations.length; k++) {
    
                // Checa a array
                if(currFramework.variations[k].test(word)){
                    keywordsFound.push(list[currLanguage][i].name)
                    break;
                }
            }
        }
    }

    if (keywordsFound.length > 0){
        return {
            [currLanguage]: keywordsFound
        }
    }
}

function normalize(string){
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function regexpThis(string){
    return new RegExp(`\\b${escapeRegex(normalize(string))}(?!\\w)`, "i")
}

function escapeRegex(string) {
    return string.replaceAll('+', '\\+');
}

function findState(string) {
    let word = wordsInArray([
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins",
        "Distrito Federal"
    ], string)

    if(word == string){
        word = wordsInArray(["Brasil"], string)
    }

    return word == string ? string : word[0]
}

function regimeTrabalho(string) {
    const words = wordsInArray([
        "Remoto",
        "Híbrido",
        "Presencial"
    ], string)

    return words == string ? "Presencial" : words[0]
}

function nivelConhecimento(string) {
    let words = wordsInArray([
        "Sênior",
        "Pleno",
        "Júnior",
        "Pl",
        "Jr",
        "Sn"
    ], string)

    if(words !== string){
        words = words.map(el => {
            if(el == "Pl"){
                return "Pleno"
            }else if(el == "Jr"){
                return "Júnior"
            }else if(el == "Sn"){
                return "Sênior"
            }else{
                return el
            }
        })
    }
    
    return words == string ? ["N/A"] : words
}

function wordsInArray(array, string){
    // Filtra a array em busca de alguma ocorrência
    let filteredArray = array.filter(el => {
        return regexpThis(el).test(normalize(string))
    })

    // Se encontrou alguma palavra, retorna a palavra encontradal, se não, retorna a palavra original
    if (filteredArray.length > 0) {
        return filteredArray
    } else {
        return string
    }
}

function encontrarFrameworks(text){
    let frameworksFound = {}

    frameworksFound = {...frameworksFound, ...checarLista_porPalavra(CloudPlatformList, text)}
    frameworksFound = {...frameworksFound, ...checarLista_porPalavra(CloudPlatformList, text)}
    frameworksFound = {...frameworksFound, ...checarLista_porPalavra(DatabasesList, text)}
    frameworksFound = {...frameworksFound, ...checarLista_porPalavra(OtherFrameworksList, text)}
    frameworksFound = {...frameworksFound, ...checarLista_porPalavra(ProgrammingLanguagesList, text)}
    frameworksFound = {...frameworksFound, ...checarLista_porPalavra(SoftSkillsList, text)}
    frameworksFound = {...frameworksFound, ...checarLista_porPalavra(ToolsList, text)}
    frameworksFound = {...frameworksFound, ...checarLista_porPalavra(WebFrameworksList, text)}

    return frameworksFound
}

module.exports = {
    encontrarFrameworks,
    nivelConhecimento,
    regimeTrabalho,
    findState
}