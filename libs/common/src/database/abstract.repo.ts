// in this file we wrap basic mongoose methods in  with presistence error handling and logging

import { Logger, NotFoundException } from '@nestjs/common';
import { Model, QueryFilter, Types, UpdateQuery } from 'mongoose';
import { AbstractDocument } from './abstract.schema';

export abstract class AbstaractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger;

  constructor(protected readonly model: Model<TDocument>) {}

  // Create Method with auto generated IDs

  async create(documnet: Omit<TDocument, '_id'>): Promise<TDocument> {
    const createdDocumnet = new this.model({
      ...documnet,
      _id: new Types.ObjectId(),
    });

    return (await createdDocumnet.save()).toJSON();
  }

  async findOne(filterQuery: QueryFilter<TDocument>): Promise<TDocument> {
    const documnet = await this.model.findOne(filterQuery, {}, { lean: true });

    if (!documnet) {
      this.logger.warn('Document Was Not Found with Query Filter', filterQuery);
      throw new NotFoundException('Document Was Not Found ');
    }

    return documnet;
  }

  async findOneAndUpdate(
    filterQuery: QueryFilter<TDocument>,
    update: UpdateQuery<TDocument>,
  ) {
    const documnet = await this.model.findOneAndUpdate(filterQuery, update, {
      lean: true,
      new: true,
    });

    if (!documnet) {
      this.logger.warn('Document Was Not Found with Query Filter', filterQuery);
      throw new NotFoundException('Document Was Not Found ');
    }

    return documnet;
  }

  async find(filterQuery: QueryFilter<TDocument>) {
    const documnet = await this.model.find(
      filterQuery,
      {},
      {
        lean: true,
        new: true,
      },
    );
  }

  async findOneAndDelete(filterQuery: QueryFilter<TDocument>) {
    const documnet = await this.model.findOneAndDelete(filterQuery, {
      lean: true,
    });

    return documnet;
  }
}
