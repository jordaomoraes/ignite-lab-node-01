import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notification-repositorie';
import { NotificatioNotFound } from './errors/notification-not-found';

interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificatioNotFound();
    }

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
