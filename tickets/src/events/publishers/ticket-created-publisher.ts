import { Publisher, Subjects, TicketCreatedEvent } from '@ticketit/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
