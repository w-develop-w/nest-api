// we can describe the object with classes
// we're using a class because we need to use a decorator, but decorators can't be used with an interface

import { IsNumber, Min } from 'class-validator';

export class CreateDto {
  // Min - decorator for validation by the minimum number
  @Min(1)
  // IsNumber - decorator for validation by type (number or not)x
  @IsNumber()
  private readonly num: number;
}
