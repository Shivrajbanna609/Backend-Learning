import mongoose, {plugin, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSearch = new Schema(
    {
        videoFile:{
            typeof: 'string',
            required: true,
        },
         thumbnail:{
                type: 'string',
                required: true
        },
        title:{
                type: 'string',
                required: true
        },
        description:{
                type: 'string',
                required: true
        },
        duration:{
                type: Number,
                required: true
        },
        Views:{
            type: Number,
            default: 0
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        
    },
{
    timestamps: true
})


videoSchema,plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSearch)