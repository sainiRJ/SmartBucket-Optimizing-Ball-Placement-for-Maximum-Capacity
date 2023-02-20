const volumeBalls = require('../model/volumeBalls')
const volumeBuckets = require('../model/volumeBuckets')

exports.createVolumeBall = async function(volumeData){
    return await volumeBalls.create(volumeData)
}

exports.createVolumeBucket = async function(volumeData){
    return await volumeBuckets.create(volumeData)
}