import { FilterableField, FilterableRelation } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";
import { BaseDTO } from "src/modules/bases/dto/base.dto";
import { LessonDTO } from "src/modules/lessons/dto/lesson.dto";

@ObjectType('Content')
@FilterableRelation('lesson', () => LessonDTO, { nullable: true })
export class ContentDTO extends BaseDTO{

  @FilterableField()
  description: string;
  
  @FilterableField()
  linkContent: string;

}
