Crypto Bot - Alexa Skill
========================

We use [Claudia.js](https://claudiajs.com/) to deploy the skill.

Commands to deploy the Lambda function -  

1. claudia create --region us-east-1 --handler skill.handler --version skill
2. claudia allow-alexa-skill-trigger --version skill