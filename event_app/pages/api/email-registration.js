import path from 'path';
import fs from 'fs';

function buildPath(){
    return path.join(process.cwd(),'data','data.json');
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
    const {events_categories,allEvents} = extractData(filePath);

    if(!allEvents){
        return res.status(404).json({
            status: 404,
            message: 'Events data not found'
        })
    }
        
    if(method == "POST"){
        const {email,eventId} = req.body;
        if(!email || !email.include('@')){
            res.status(422).json({message:'Invalid Email Address'})
            return;
        }
        const newAllEvents = allEvents.map(event=>{
            if(event.id === eventId){
                if(event.emails_registered.includes(email)){
                    res.status(401).json({message: "This email has already been registered"})
                    return event;
                }
                return {
                    ...event,email_registered: [...event.emails_registered,email]
                }
            }
            return event;
        })

        fs.writeFileSync(filePath,JSON.stringify({events_categories,allEvents: newAllEvents}));

        res.status(200).json({message:`You hav been registered 
        successfully with the email: ${email} for the events: ${eventId}`})
    }
}