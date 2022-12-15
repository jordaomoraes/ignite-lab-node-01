/* eslint-disable prettier/prettier */

import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications : Notification[] = [];

const notificationsRepository = {

  async create(notification: Notification) {
    notifications.push(notification);
  }
}
describe('Send Notification', () => {

  it('should be able to send a notification ', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'This is a test for a notification',
      category: 'Category test',
      recipientID: 'exemple-recipientID'
    })
    expect(notifications).toHaveLength(1);
  });
});
