import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notification-repositorie';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientID: notification.recipientID,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
