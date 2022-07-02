import { Schedule } from './entity';

export class CreateCalendarDTO {
  name!: string;
  start?: string;
  end?: string;
}

export class CreateUserDTO {
  name!: string;
  color!: string;
  isSigned: boolean = false;
  schedules: Schedule[] = [];
}

export class UpdateSchduleDTO {
  schedules!: Schedule[];
}
