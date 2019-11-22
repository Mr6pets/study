//存储模型
const mongoose =require("mongoose");
//实例化一个schema
const Schema=mongoose.Schema;
//create Schema
//定义存储的模型是怎么样的
const ProfileSchema=new Schema({
	user:{
		//根据id得到user的值
		type:Schema.Types.ObjectId,
		//关联那张表
		ref:"users"
	},
	handle:{
		type:String,
		require:true,
		max:40
	},
	company:{
		type:String
	},
	website:{
		type:String
	},
	location:{
		type:String
	},
	status:{
		type:String,
		require:true
	},
	skills:{
		//字符串数据表示
		type:[String],
		require:true
	},
	bio:{
		type:String
	},
	githubusername:{
		type:String
	},
	experience:[
		{
			current:{
				type:Boolean,
				default:true
			},
			//id会自动生成 不用写表样式
			title:{
				type:String,
				require:true
			},
			company:{
				type:String,
				require:true
			},
			location:{
				type:String
			},
			from:{
				type:String,
				require:true
			},
			to:{
				type:String
			},
			description:{
				type:String
			}
		}
	],
	education:[
		{
			current:{
				type:Boolean,
				default:true
			},
			//id会自动生成 不用写表样式
			school:{
				type:String
			},
			degree:{
				type:String
			},
			fieldofstudy:{
				type:String
			},
			from:{
				type:String,
				require:true
			},
			to:{
				type:String
			},
			description:{
				type:String
			}
		}
	],
	social:{
		wechat:{
			type:String
		},
		QQ:{
			type:String
		},
		tengxunkt:{
			type:String
		},
		wangyikt:{
			type:String
		},
	},
	date:{
		type:Date,
		default:Date.now
	}
})
// 将搭建的模型暴露出去,数据库为profile用户的模型依照搭建的模型进行存储赋值给Profile
module.exports= Profile = mongoose.model("profile",ProfileSchema)




