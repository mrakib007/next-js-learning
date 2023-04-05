import path from 'path';
import fs from 'fs';

function buildPath(){
    return path.join(process.cwd,'data','data.json');
}

function extractData(filePath){
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export default function handler (req,res){
    const {method} = req;

    //Access the data
    //Extract the data
      //res 404 if there are no AllEvents
      //AllEvents -- loop through them and identify the event id
        //Add the email into email_registered 
        //only if the email doesn't exist already
        //check the format of the email is ok or not 

    const filePath = buildPath();
    const data = extractData(filePath);
        
    if(method == "POST"){
        const {email,eventId} = req.body;

        res.status(200).json({message:`You hav been registered 
        successfully with the email: ${email} ${eventId}`})
    }
}