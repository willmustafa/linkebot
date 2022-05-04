async function run(){
    const fileManager = require('../scrapper/utils/file-manager');
    const frameworkList = (await fileManager.readFile('pre-data/framework-list.txt')).split('\n');
    const Framework = require('../models/framework');

    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < frameworkList.length; i++) {
            const frameSplit = frameworkList[i].split('|')
        
            const res = {
                name: frameSplit[0],
                variations: frameSplit[1].split(',')
            }
            const queryRes = await Framework.updateOne({name: res.name, variations: res.variations},
            res, {
             upsert: true   
            })

            if(queryRes.acknowledged){
                resolve(201)
            }else{
                reject(501)
            }
        }

    })
}

module.exports = {run}