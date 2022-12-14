/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientID: string;

  @IsNotEmpty()
  @Length(5,240)
  content: string;
  category: string;
}
