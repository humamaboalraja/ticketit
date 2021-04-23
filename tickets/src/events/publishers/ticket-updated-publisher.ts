import { Publisher, Subjects, TicketUpdatedEvent } from '@ticketit/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
