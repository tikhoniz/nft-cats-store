import { Schema, model, models } from 'mongoose'

const catSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    history: { type: String, required: true },
    summary: { type: String, required: true },
    slug: { type: String },
  },
  {
    timestamps: true,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id.toString()
        delete ret._id
      },
    },
  },
)

const CatModel = models.Cat || model('Cat', catSchema)

export default CatModel
