Crypto Bot - Alexa Skill
========================

## Usage

The skill supports two types of queries - 

1. **GetPrice**   
   Examples -  
    * What is the price for Bitcoin ?
    * Current  Ether value
    * How much is Ripple ?

2. **AmountInfo**   
   Examples -  
    * How many Bitcoin can I get for 100000 rupees?
    * Number of Ether for 9000 rupees

## Deployment

We use [Claudia.js](https://claudiajs.com/) to deploy the skill.

Commands to deploy the Lambda function -  

1. `claudia create --region us-east-1 --handler skill.handler --version skill`
2. `claudia allow-alexa-skill-trigger --version skill`