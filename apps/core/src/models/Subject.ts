import { type InferSchemaType, Schema, model } from 'mongoose';
import { camelCase, startCase } from 'lodash-es';
import { mongooseLeanVirtuals } from 'mongoose-lean-virtuals';

const subjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    search: String,
    creditos: { type: Number },
  },
  { timestamps: true },
);

subjectSchema.plugin(mongooseLeanVirtuals);

subjectSchema.pre('save', function () {
  this.search = startCase(camelCase(this.name));
});

subjectSchema.pre<Subject>('insertMany', function (data) {
  this.search = startCase(camelCase(this.name));
});

export type Subject = InferSchemaType<typeof subjectSchema>;
export type SubjectDocument = ReturnType<(typeof SubjectModel)['hydrate']>;
export const SubjectModel = model('subjects', subjectSchema);
