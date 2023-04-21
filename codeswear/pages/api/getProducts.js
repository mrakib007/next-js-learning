import connectDb from "@/middleware/mongoose";
import Product from "@/models/Product";


const handler = async (req, res) =>{
    let products = await Product.find();
    let tShirts = {};
    for(let item of products){
        if(item.title in tShirts){
           if(!tShirts[item.title].color.includes(item.color) && 
           item.availableQty > 0){
            tShirts[item.title].color.push(item.color);
           }
           if(!tShirts[item.title].size.includes(item.size) && 
           item.availableQty > 0){
            tShirts[item.title].size.push(item.size);
           }
        }else{
            tShirts[item.title] = JSON.parse(JSON.stringify(item));
            if(item.availableQty > 0){
                tShirts[item.title].color = [item.color];
                tShirts[item.title].size = [item.size];
            }
        }
    }
    res.status(200).json({tShirts});     
}
export default connectDb(handler);
  