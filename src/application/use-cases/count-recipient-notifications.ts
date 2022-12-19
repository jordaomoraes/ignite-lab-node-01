import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notification-repositorie';

interface CountRecipienteNotificationsRequest {
  recipientID: string;
}
interface CountRecipienteNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: CountRecipienteNotificationsRequest,
  ): Promise<CountRecipienteNotificationsResponse> {
    const { recipientID } = request;
    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientID,
    );

    return { count };
  }
}
