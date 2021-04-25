import Link from 'next/link';

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <div className="col-md-6 col-sm-12">
      <div className="card w-100 mb-4" key={ticket.id}>
        <div class="card-body">
        <h3 class="card-title">{ticket.title}</h3>
        <h6 class="card-subtitle mb-2 text-muted">{ticket.price} $</h6>
        <hr></hr>
        <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a className="btn btn-dark btn-block">Purchase Ticket</a>
          </Link>
      </div>
      </div>
    </div>
    );
  });

  return (
    <div className="mt-5">
      <h2 className="mb-3">Tickets</h2>
      <div className="card-deck">

        {ticketList}
    </div>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;
