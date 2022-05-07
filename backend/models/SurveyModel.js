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
    LanguageHaveWorkedWith: {type: Array},
    LanguageWantToWorkWith: {type: Array},
    DatabaseHaveWorkedWith: {type: Array},
    DatabaseWantToWorkWith: {type: Array},
    PlatformHaveWorkedWith: {type: Array},
    PlatformWantToWorkWith: {type: Array},
    WebframeHaveWorkedWith: {type: Array},
    WebframeWantToWorkWith: {type: Array},
    MiscTechHaveWorkedWith: {type: Array},
    MiscTechWantToWorkWith: {type: Array},
    ToolsTechHaveWorkedWith: {type: Array},
    ToolsTechWantToWorkWith: {type: Array},
    NEWCollabToolsHaveWorkedWith: {type: Array},
    NEWCollabToolsWantToWorkWith: {type: Array},
    Age: {type: String}
})

const Survey = mongoose.model('survey', SurveySchema)

module.exports = Survey