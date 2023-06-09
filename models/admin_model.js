const mongoose = require('mongoose');

const admin_schema = new mongoose.Schema(
    {
        image : {
            type : String,
            required : true,
        },
        full_name : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
        },
        password : {
            type : String,
            required : true,
        },
        mobile_no : {
            type : Number,
            required : true,
        },
        gender : {
            type : String
        },
        age : {
            type : Number
        },
        dob : {
            type : String
        },
        address : {
            house_no : {
                type : String,
            },
            street : {
                type : String,
            },
            area : {
                type : String,
            },
            city : {
                type : String,
            },
            state : {
                type : String,
            },
            pin_code : {
                type : String,
            },
        },
        wishlist : {
            type : Array,
        },
        on_cart : {
            id:{
                type : Array,
            },
            cuz : {
                type : Array,
            },
            quant:{
                type : Array,
            }
        },
        orders : {
            type : Array,
        },
        workshops : {
            type : Array,
        },
    }
);

const Admin  = mongoose.model("Admin_data" , admin_schema);
module.exports = Admin;
