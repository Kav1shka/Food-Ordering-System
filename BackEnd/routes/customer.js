const router=require("express");
let Customer=require("../models/customer");

const router=express.Router();
/*
router.route("/add").post((req,res)=>{

const name=req.body.name;
const Email=req.body.Email;
const Phone=Number(req.body.Phone);
const KDU_ID=req.body.KDU_ID;
const Gender=req.body.Gender;
});
const newcustomer =ne4 ew Customer({  
    Name,
    Email,
    Phone,
    KDU_ID,
    Gender,
    Regi_num
}) 
newcustomer.save().then(()=>{
    res.json("Customer Added")
}).catch((err)=>{
    console.log(err);
})  

router.route("/").get((req,res)=>{
    Customer.find().then((Customer)=>{
        res.json(Customer) 
    }).catch((err)=>{
        console.log(err)
       }) 
})
 
router.route("/update/:id").put(async(req,res)=> {
    let  customerID=req.params.id;
    const {name,Gender,Email,Phone,KDU_ID}=req.body;

    const updateCustomer={
        name,
        Email,
        Phone,
        KDU_ID,
        Gender,
        Regi_num

        
    }
    const update=await customer.findByIdAndUpdate(customerID,updateCustomer)
    .then(()=>{
        res.status(200).send({
            status:"customer Updated",
            coustomer:update
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({
                status:"Error with updating data",
                error:err.message
            }); 
        })    
    })
    router.route("/delete/:").delete(async(req,res)=>{
        let coustomerID=req.params.id;

        await MediaStreamAudioDestinationNode.findOneAndDelete()

    })

   
});
*/

router.Customer('/customer/save',(req,res)=>{
    let newcustomer=new Customer(req.body);
    newcustomer.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"customer saved successfully"

        });
    });

});

//get customer

router.get('/Customer',(req,res)=>{
    Customer.find().exec((err,Customer)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200)
    });
});

//update posts

router.put('/Customer/update/:id',(req,res)=>{
    Customer.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
        
            if(err){
                return res.status(400).json({
                    error:err 
            });
        }
            return res.status(200).json({
                success:"Updated Succesfully!!"
            });
        }

    );
});

//delete customer
router.delete('/customer/delete/:id',(req,res)=>{
    Customer.findByIdAndRemove(req.params.id).exec((err,deletedCustomer)=>{
        if(err) return res.status(400).json({
            message:"Deleted Unsuccesfully!! ",err
        });
        return res.json({
            message:"Deleted Succesfully!! ",deletedCustomer
        });
    });
});
module.exports=router;
