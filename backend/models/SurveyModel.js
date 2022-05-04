const mongoose = require('mongoose');

const SurveySchema = mongoose.Schema({
    MainBranch: {type: String},
    Employment: {type: String},
    Country: {type: String},
    EdLevel: {type: String},
    Age1stCode: {type: String},
    LearnCode: {type: String},
    YearsCode: {type: String},
    YearsCodePro: {type: String},
    DevType: {type: String},
    OrgSize: {type: String},
    LanguageHaveWorkedWith: {type: String},
    LanguageWantToWorkWith: {type: String},
    DatabaseHaveWorkedWith: {type: String},
    DatabaseWantToWorkWith: {type: String},
    PlatformHaveWorkedWith: {type: String},
    PlatformWantToWorkWith: {type: String},
    WebframeHaveWorkedWith: {type: String},
    WebframeWantToWorkWith: {type: String},
    MiscTechHaveWorkedWith: {type: String},
    MiscTechWantToWorkWith: {type: String},
    ToolsTechHaveWorkedWith: {type: String},
    ToolsTechWantToWorkWith: {type: String},
    NEWCollabToolsHaveWorkedWith: {type: String},
    NEWCollabToolsWantToWorkWith: {type: String},
    Age: {type: String}
})

const Survey = mongoose.model('survey', SurveySchema)

module.exports = Survey