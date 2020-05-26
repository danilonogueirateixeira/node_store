'use strict';

var config = require('../config');


exports.send = async (to, subject, body) => {
    var SibApiV3Sdk = require('sib-api-v3-sdk');
    var defaultClient = SibApiV3Sdk.ApiClient.instance;

    var apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = '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';

    var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
    var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

    emailCampaigns.name = "Campaign sent via the API";
    emailCampaigns.subject = "subject";
    emailCampaigns.sender = { "name": "From name", "email": "danilonogueirateixeira@gmail.com" };
    emailCampaigns.type = "classic";

    htmlContent: 'Congratulations! You successfully sent this example campaign via the Sendinblue API.',

        //recipients: {listIds: [2, 7]},

        //scheduledAt: '2018-01-01 00:00:01'


        apiInstance.createEmailCampaign(emailCampaigns).then(function (data) {
            console.log('API called successfully. Returned data: ' + data);
        }, function (error) {
            console.error(error);
        });
}