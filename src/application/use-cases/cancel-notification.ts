import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notification-repositorie';
import { NotificatioNotFound } from './errors/notification-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}
type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificatioNotFound();
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
